import { camelCase } from 'yyf/format';

export const upperFirst = str => str[0].toUpperCase() + str.slice(1);
export const lowerFirst = str => str[0].toLowerCase() + str.slice(1);
export const splitWords = str => str.split(/[\s\-_.,]+/g).filter(v => v);
export const cammelCase = str => {
  const [word, ...words] = splitWords(str);
  return [word, ...words.map(upperFirst)].join('');
};

export const toBase64 = typeof btoa === 'undefined'
  ? value => Buffer.from(value).toString('base64')
  : value => btoa(value);

export const fromBase64 = typeof atob === 'undefined'
  ? value => Buffer.from(value, 'base64').toString('utf8')
  : value => btoa(value);

export function normalize(data) {
  if (typeof data === 'object' && data !== null) {
    return Object.keys(data).reduce((result, name) => {
      result[camelCase(name)] = normalize(data[name]);
      return result;
    }, new data.constructor());
  }
  return data;
}

export async function handleResponse(response) {
  if (response.status === 404) {
    return null;
  }
  if (response.status !== 200) {
    throw new Error(response.statusText);
  }

  const data = await response.json();
  return normalize(data);
}

export function pathify(pattern, params) {
  return Object.keys(params).reduce((path, name) => path.replace(`{${name}}`, params[name]), pattern);
}

export function required(message) {
  throw new Error(`Value ${message} is required`);
}
