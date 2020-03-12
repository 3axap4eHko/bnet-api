export enum Region {
  EU = 'EU',
  US = 'US',
  KR = 'KR',
  TW = 'TW',
  CN = 'CN',
}

export enum Discover {
  US = 'https://us.battle.net/oauth/.well-known/openid-configuration',
  EU = 'https://eu.battle.net/oauth/.well-known/openid-configuration',
  KR = 'https://kr.battle.net/oauth/.well-known/openid-configuration',
  TW = 'https://tw.battle.net/oauth/.well-known/openid-configuration',
  CN = 'https://www.battlenet.com.cn/oauth/.well-known/openid-configuration',
}

export type TokenTypeHint = 'access_token' | 'refresh_token' | string;
export type ResponseType =
    'code'
    | 'id_token'
    | 'code id_token'
    | 'id_token token'
    | 'code token'
    | 'code id_token token'
    | 'none';
export type ClientAuthMethod =
    'client_secret_basic'
    | 'client_secret_post'
    | 'client_secret_jwt'
    | 'private_key_jwt'
    | 'tls_client_auth'
    | 'self_signed_tls_client_auth'
    | 'none';
