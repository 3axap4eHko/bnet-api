import api from '../api';

export default async function getCharacters(region, realmSlug, characterName, pvpBracket, locale = 'en_GB') {
  return api(region, '/profile/wow/character/{realmSlug}/{characterName}/pvp-bracket/{pvpBracket}', {
    realmSlug,
    characterName,
    pvpBracket,
  }, { locale, namespace: `profile-${region}` });
}
