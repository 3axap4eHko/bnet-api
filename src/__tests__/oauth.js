import oauth from '../oauth';
import fetch, { mockJson } from 'isomorphic-fetch';
import { REGION_EU } from '../consts';

jest.mock('isomorphic-fetch');

describe('OAuth test suite', () => {
  beforeEach(() => {
    fetch.mockClear();
    mockJson.mockClear();
  });

  it('Should authorize with proper region and credentials', async () => {
    const clientId = 'testClientId';
    const clientSecret = 'testClientSecret';
    const authorization = `Basic ${Buffer.from(`${clientId}:${clientSecret}`).toString('base64')}`;

    await oauth(REGION_EU, clientId, clientSecret);

    expect(fetch).toHaveBeenCalledWith(
      expect.stringContaining('/oauth/token'),
      expect.objectContaining({
        method: 'POST',
        headers: {
          authorization,
        },
      }));
  });
});
