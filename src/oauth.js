import fetch from 'isomorphic-fetch';
import * as qs from 'query-string';
import { toBase64, handleResponse } from './utils';
import { regionTokens, regionAuthorize } from './consts';

export function getAuthorizeURL(region, clientId, scope, redirectUri) {
  const authorizeEndpoint = regionAuthorize[region];
  return `${authorizeEndpoint}?${qs.stringify({
    client_id: clientId,
    scope,
    redirect_uri: redirectUri,
    response_type: 'code',
  })}`;
}

export default async function oauth(region, clientId, clientSecret, code, scope, redirectUri) {
  const oauthEndpoint = regionTokens[region];

  if (!oauthEndpoint) {
    throw new Error('invalid_region');
  }
  const query = JSON.parse(JSON.stringify({
    scope,
    redirect_uri: redirectUri,
    grant_type: code ? 'authorization_code' : 'client_credentials',
    code,
  }));

  const response = await fetch(`${oauthEndpoint}?${qs.stringify(query)}`, {
    method: 'POST',
    headers: {
      authorization: `Basic ${toBase64(`${clientId}:${clientSecret}`)}`,
    },
  });
  return handleResponse(response);
}

