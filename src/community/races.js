import api from '../api';

export default async function getRaces(region, locale = 'en_GB') {
  return api(region, '/wow/data/character/races', {}, { locale });
}
