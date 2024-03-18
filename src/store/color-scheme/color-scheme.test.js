import { colorSchemeDuck } from './color-scheme';
import { COLOR_SCHEMES } from 'constants/color-schemes';

describe('colorSchemeDuck', () => {
  it('should create a duck with the correct initial state', () => {
    const duck = colorSchemeDuck;
    expect(duck.initialState).toEqual(COLOR_SCHEMES.DARK);
  });
});
