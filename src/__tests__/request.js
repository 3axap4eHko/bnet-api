import request from '../request';
import fetch, { mockJson } from 'isomorphic-fetch';
import { REGION_EU } from '../consts';

jest.mock('isomorphic-fetch');

describe('Request test suite', () => {
  beforeEach(() => {
    fetch.mockClear();
    mockJson.mockClear();
  });

  it('Should request api with proper region and authToken', async () => {
    const accessToken = 'testAuthToken';
    const resource = '/test/endpoint';
    const authorization = `Bearer ${accessToken}`;

    await request({ region: REGION_EU, resource, accessToken });

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining(resource),
      expect.objectContaining({
        headers: {
          authorization,
        },
      }));
  });
});
