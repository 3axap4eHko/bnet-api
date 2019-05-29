import api from '../api';

export default async function getPlayableClasses(region, locale = 'en_GB') {
  return api(region, '/data/wow/playable-class/index', {}, { locale, namespace: `static-${region}` });
}
