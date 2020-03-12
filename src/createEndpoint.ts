export interface EndpointOptions {

}

export interface Endpoint<T> {
  (options: EndpointOptions): Promise<T>
}

export default function createEndpoint<T = any>(pattern: string): Endpoint<T> {
  return async (options: EndpointOptions) => {

    return null;
  };
}
