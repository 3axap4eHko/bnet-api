import fetch from 'isomorphic-fetch';
import { Region, Discover } from './consts';

export type ResponseType = 'code' | 'code id_token' | 'id_token' | 'token id_token';
export type SubjectType = 'public' | 'private';
export type Algorithms = 'RS256' | 'RS512';
export type GrantType =
    'authorization_code'
    | 'client_credentials'
    | 'implicit'
    | 'token_extension'
    | 'server_sso'
    | 'client_sso'
    | 'device_code';

export interface IssuerConfig {
  issuer: string;
  authorization_endpoint: string;
  token_endpoint: string;
  jwks_uri: string;
  response_types_supported: ResponseType[];
  userinfo_endpoint: string;
  subject_types_supported: SubjectType[],
  id_token_signing_alg_values_supported: Algorithms[],
  grant_types_supported: GrantType[];
}

export default async function discover(region: Region) {
  const endpoint = Discover[region];
  const response = await fetch(endpoint);
  const metadata: IssuerConfig = await response.json();

  console.log(JSON.stringify(metadata, null, ' '));
}
