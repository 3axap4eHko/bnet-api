import api from '../api';

export default async function getPlayableSpecs(region, locale = 'en_GB') {
  return api(region, '/data/wow/playable-specialization/index', {}, { locale, namespace: `static-${region}` });
}
