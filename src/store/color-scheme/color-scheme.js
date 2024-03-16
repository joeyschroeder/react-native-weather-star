import { COLOR_SCHEMES } from 'constants/color-schemes';
import { createDuck } from 'utils/create-duck/create-duck';

/*
 * This state is not being used. The weather API provides an "isDaytime" property
 * that is used to determine the color scheme. It seems the Android device
 * Appearance API is not reliably firing change events.
 */
export const colorSchemeDuck = createDuck({
  name: 'color-scheme',
  initialState: COLOR_SCHEMES.DARK,
});
