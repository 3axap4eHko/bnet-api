import oauth from './oauth';
import request from './request';

const context = { config: {}, auth: {} };

class AccessToken {
  constructor(accessToken, expiresIn) {
    this.accessToken = accessToken;
    this.issuedAt = Date.now();
    this.expiresAt = expiresIn * 1000 + this.issuedAt;
  }

  isExpired = () => {
    return this.expiresAt > Date.now();
  };
}

export function setConfig(config) {
  Object.assign(context.config, config);
  context.initialized = true;
}

export const TYPE_PROFILE = 'profile';
export const TYPE_GAME_DATA = 'game-data';
export const TYPE_COMMUNITY = 'community';

export function getType(resource) {
  if (/^\/profile/.test(resource)) {
    return TYPE_PROFILE;
  }
  if (/^\/wow/.test(resource)) {
    return TYPE_COMMUNITY;
  }
  if (/^\/data/.test(resource)) {
    return TYPE_GAME_DATA;
  }
  throw new Error(`Unknown resource type for "${resource}"`);
}

export function authorize() {

}

export default async function api(region, resource, params, query) {
  if (!(context.auth[region] instanceof AccessToken) || context.auth[region].isExpired()) {
    const auth = await oauth(region, context.config.clientId, context.config.clientSecret);
    context.auth[region] = new AccessToken(auth.accessToken, auth.expiresIn);
  }
  const { accessToken } = context.auth[region];
  const { data, meta } = await request({ region, resource, accessToken, params, query });
  return data;
}
