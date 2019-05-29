import api from '../api';

export default async function getPlayableSpecs(region, specId, locale = 'en_GB') {
  return api(region, '/data/wow/playable-specialization/{specId}', { specId }, { locale, namespace: `static-${region}` });
}
