import { createInterface } from 'readline';
import { PassThrough } from 'stream';
import { generators, Issuer, ResponseType } from 'openid-client';
import discover from '../discover';
import { Region } from '../consts';

describe('Discover test suite', () => {
  it('test bnet', async () => {
    const result = await discover(Region.EU);

    console.log(result);
  });
});
