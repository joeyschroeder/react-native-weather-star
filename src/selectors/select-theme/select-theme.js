import { COLORS } from 'constants/colors';
import Color from 'color';
import {
  selectDimensionsOrientationHeight,
  selectDimensionsOrientationOrientation,
  selectDimensionsOrientationWidth,
} from 'store/dimensions-orientation/dimensions-orientation';
import { selectWeatherForecastIsDaytime } from 'store/weather/weather-forecast/weather-forecast';
import {
  selectSettingsDisplayColor,
  selectSettingsDisplayColorScheme,
} from 'store/settings/settings-display/settings-display';
import { COLOR_SCHEMES } from 'constants/color-schemes';
import { createSelector } from '@reduxjs/toolkit';

const COLOR_VALUES = Object.keys(COLORS).reduce((acc, key) => {
  const lowercaseKey = key.toLowerCase();
  acc[lowercaseKey] = COLORS[key];

  return acc;
}, {});

const MIX_WHITE = Color(COLORS.WHITE);

function combiner(colorScheme, height, isDaytime, orientation, primary, width) {
  const colorSchemeIsAuto = colorScheme === COLOR_SCHEMES.AUTO;
  const isDark = (colorSchemeIsAuto && !isDaytime) || colorScheme === COLOR_SCHEMES.DARK;

  const background = isDark ? COLORS.BLACK : Color(COLORS.BLACK).mix(MIX_WHITE, 0.8).string();
  const section = isDark ? COLORS.GREY : COLORS.WHITE;
  const valueBackground = isDark ? COLORS.BLACK_TYPE : Color(COLORS.BLACK).mix(MIX_WHITE, 0.9).string();
  const text = isDark ? COLORS.WHITE : COLORS.BLACK_TYPE;

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
}

export const selectTheme = createSelector(
  [
    selectSettingsDisplayColorScheme,
    selectDimensionsOrientationHeight,
    selectWeatherForecastIsDaytime,
    selectDimensionsOrientationOrientation,
    selectSettingsDisplayColor,
    selectDimensionsOrientationWidth,
  ],
  combiner,
);
