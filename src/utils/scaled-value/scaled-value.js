import { DIMENSIONS } from '../../constants/dimensions';

export const scaledValue = (value) => {
  if (typeof value !== 'number') return 0;

  /*
   * areaConstant is arbitrarily based off of the
   * iPhone X (375 x 812); this value is used as
   * the 100% base for all other values to be
   * scaled proportionately;
   */

  const heightConstant = 812;
  const scaleAmount = DIMENSIONS.HEIGHT / heightConstant;

  const result = value * scaleAmount;

  return Math.round(result);
};
