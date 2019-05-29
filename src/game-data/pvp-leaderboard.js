import api from '../api';

export const PVP_BRACKET_2x2 = '2v2';
export const PVP_BRACKET_3x3 = '3v3';
//export const PVP_BRACKET_5x5 = '5v5';
export const PVP_BRACKET_RBG = 'rbg';

export default async function getPvPLeaderboard(region, bracket, locale = 'en_GB') {
  return api(region, '/wow/leaderboard/{bracket}', { bracket }, { locale, namespace: `dynamic-${region}` });
}


