import { COLOR_SCHEMES } from './color-schemes';
import { SETTINGS_COLOR_OPTIONS } from './settings-color-options';

export const SETTINGS_INITIAL_STATE = {
  colorScheme: COLOR_SCHEMES.AUTO,
  color: Object.entries(SETTINGS_COLOR_OPTIONS)[0][0], // RED
};
