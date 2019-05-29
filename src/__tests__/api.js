import api from '../api';
import oauth from '../oauth';
import request from '../request';
import { REGION_EU } from '../consts';

jest.mock('../oauth');
jest.mock('../request');

describe('API test suite', () => {
  it('Should return getPvPLeaderboard', async () => {
    api.setConfig({
      clientId: 'a39f02fe185044048e94bfa183dc7008',
      clientSecret: 'N42Iy68r2CDhOdv2RhN2Zkc4qGxjFGOJ',
    });

    await api(REGION_EU, '/resource/{name}', { name: 'test' }, { locale: 'test' });
  });
});
