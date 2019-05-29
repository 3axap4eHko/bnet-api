import api from '../api';

export default async function getPvPSeasons(region, locale = 'en_GB') {
  return api(region, '/data/wow/pvp-season/index', {}, { locale, namespace: `dynamic-${region}` });
}
