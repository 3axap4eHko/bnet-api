import { createInterface } from 'readline';
import { PassThrough } from 'stream';
import { generators, Issuer, ResponseType } from 'openid-client';
import { createClient } from '../index';
import { Region } from '../consts';

jest.setTimeout(60 * 1000);

async function readLine() {
  const readline = createInterface({
    input: process.stdin,
  });

  const code = await new Promise(resolve => readline.on('line', resolve));
  readline.close();

  return code;
}

describe('createClient test suite', () => {
  it('test bnet', async () => {
    const client = await createClient({
      region: Region.EU,
      clientId: process.env.BNET_ID,
      clientSecret: process.env.BNET_SECRET,
      redirectUri: process.env.BNET_REDIRECT_URL,
    });
    console.log(client);

    const nonce = generators.nonce();

    const url = client.authorizationUrl({
      scope: 'wow.profile openid',
      response_type: 'code',
      nonce,
    });
    console.log(url);

    const code = await readLine();

    console.log(code);
  });
});
