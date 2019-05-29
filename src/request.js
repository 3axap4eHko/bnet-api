import * as qs from 'query-string';
import fetch from 'isomorphic-fetch';
import { handleResponse, pathify } from './utils';
import { regionAPI } from './consts';

export default async function request({ region, resource, accessToken, params = {}, query = {}, data, headers = {} } = {}) {
  const apiEndpoint = regionAPI[region];
  if (!apiEndpoint) {
    throw new Error('invalid_region');
  }

  const options = { headers };

  headers.authorization = `Bearer ${accessToken}`;

  if (data) {
    headers['content-type'] = 'application/json';
    options.method = 'POST';
    options.body = JSON.stringify(data);
  }

  const pathname = pathify(resource, params);
  const url = `${apiEndpoint}${pathname}?${qs.stringify(query)}`;
  console.log(url, options);
  const response = await fetch(url, options);

  const meta = {
    resetIn: new Date(response.headers.get('x-plan-quota-reset')).valueOf() - Date.now(),
    qpsTotal: response.headers.get('x-plan-qps-allotted') | 0,
    qpsCurrent: response.headers.get('x-plan-qps-current') | 0,
    quotaTotal: response.headers.get('x-plan-quota-allotted') | 0,
    quotaCurrent: response.headers.get('x-plan-quota-current') | 0,
  };

  try {
    const data = await handleResponse(response);
    return { data, meta };
  } catch (e) {
    throw new Error(`${apiEndpoint}: ${e.message}`);
  }
}
