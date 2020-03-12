import { ResponseType } from './consts';

export interface AuthorizerOptions {
  uri: string;
  clientId: string;
  state?: string;
  redirectUri: string;
  responseType: ResponseType;
}


export default function createAuthorizer(options: AuthorizerOptions) {

}
