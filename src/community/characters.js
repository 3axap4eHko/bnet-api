import api from '../api';

export default async function getCharacters(region, locale = 'en_GB') {
  return api(region, '/wow/user/characters', { }, { locale });
}
