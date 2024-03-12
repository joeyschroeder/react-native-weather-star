import { COLORS } from '../../constants/colors';
import Color from 'color';
import {
  selectDimensionsOrientationHeight,
  selectDimensionsOrientationOrientation,
  selectDimensionsOrientationWidth,
} from '../../store/dimensions-orientation/dimensions-orientation';
import { selectWeatherForecastIsDaytime } from '../../store/weather/weather-forecast/weather-forecast';
import {
  selectSettingsDisplayColor,
  selectSettingsDisplayColorScheme,
} from '../../store/settings/settings-display/settings-display';
import { COLOR_SCHEMES } from '../../constants/color-schemes';

const COLOR_VALUES = Object.keys(COLORS).reduce((acc, key) => {
  const lowercaseKey = key.toLowerCase();
  acc[lowercaseKey] = COLORS[key];

  return acc;
}, {});

const MIX_WHITE = Color(COLORS.WHITE);

export const selectTheme = (state) => {
  const colorScheme = selectSettingsDisplayColorScheme(state);
  const colorSchemeIsAuto = colorScheme === COLOR_SCHEMES.AUTO;

  const height = selectDimensionsOrientationHeight(state);
  const orientation = selectDimensionsOrientationOrientation(state);
  const width = selectDimensionsOrientationWidth(state);
  const isDaytime = selectWeatherForecastIsDaytime(state);

  const isDark = (colorSchemeIsAuto && !isDaytime) || colorScheme === COLOR_SCHEMES.DARK;

  const background = isDark ? COLORS.BLACK : Color(COLORS.BLACK).mix(MIX_WHITE, 0.8).string();
  const section = isDark ? COLORS.GREY : COLORS.WHITE;
  const valueBackground = isDark ? COLORS.BLACK_TYPE : Color(COLORS.BLACK).mix(MIX_WHITE, 0.9).string();
  const text = isDark ? COLORS.WHITE : COLORS.BLACK_TYPE;

  const primary = selectSettingsDisplayColor(state);

  return {
    colors: {
      ...COLOR_VALUES,
      background,
      primary,
      section,
      text,
      valueBackground,
    },
    dark: isDark,
    dimensions: {
      height,
      orientation,
      width,
    },
  };
};
