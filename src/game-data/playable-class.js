import api from '../api';

export default async function getPlayableClasses(region, classId, locale = 'en_GB') {
  return api(region, '/data/wow/playable-class/{classId}', { classId }, { locale, namespace: `static-${region}` });
}
