import * as qs from 'qs';
import fetch from 'isomorphic-fetch';
import { generators, Issuer, ResponseType } from 'openid-client';
import { Region, Discover } from './consts';

export interface ClientOptions {
  region: Region;
  clientId: string;
  clientSecret: string;
  redirectUri: string;
  responseTypes?: ResponseType[];
}

export { ResponseType };

export async function createClient({ region, clientId, clientSecret, redirectUri, responseTypes }: ClientOptions) {
  const endpoint = Discover[region];
  const issuer = await Issuer.discover(endpoint);
  const client = new issuer.Client({
    client_id: clientId,
    client_secret: clientSecret,
    redirect_uris: [redirectUri],
  });
  return client;
}
