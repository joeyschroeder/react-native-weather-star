import { get } from 'lodash';

export function buildStateSelector(pathNames = '', defaultState = {}) {
  if (typeof pathNames === 'string') return (state) => get(state, pathNames, defaultState);

  if (Array.isArray(pathNames)) {
    const pathName = pathNames.filter((value) => Boolean(value)).join('.');
    return (state) => get(state, pathName, defaultState);
  }

  throw new Error('pathName is not a string or array of strings');
}
