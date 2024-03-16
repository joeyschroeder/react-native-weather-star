import { COLORS } from 'constants/colors';
import Color from 'color';
import { selectWeatherForecastIsDaytime } from 'store/weather/weather-forecast/weather-forecast';
import { COLOR_SCHEMES } from 'constants/color-schemes';
import { createSelector } from '@reduxjs/toolkit';
import { dimensionsOrientationDuck } from 'store/dimensions-orientation/dimensions-orientation';
import { settingsDisplayDuck } from 'store/settings/settings-display/settings-display';

const COLOR_VALUES = Object.keys(COLORS).reduce((acc, key) => {
  const lowercaseKey = key.toLowerCase();
  acc[lowercaseKey] = COLORS[key];

  return acc;
}, {});

function combiner(colorScheme, height, isDaytime, orientation, primaryKey, width) {
  const colorSchemeIsAuto = colorScheme === COLOR_SCHEMES.AUTO;
  const isDark = (colorSchemeIsAuto && !isDaytime) || colorScheme === COLOR_SCHEMES.DARK;
  const primary = COLORS[primaryKey];

  const background = isDark ? COLORS.BLACK : Color(primary).darken(0.2).string();
  const section = isDark ? COLORS.GREY : primary;
  const valueBackground = Color(COLORS.BLACK).alpha(0.2).string();
  const text = COLORS.WHITE;

  return {
    colors: {
      ...COLOR_VALUES,
      background,
      primary: isDark ? primary : COLORS.WHITE,
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
    settingsDisplayDuck.select.colorScheme,
    dimensionsOrientationDuck.select.height,
    selectWeatherForecastIsDaytime,
    dimensionsOrientationDuck.select.orientation,
    settingsDisplayDuck.select.color,
    dimensionsOrientationDuck.select.width,
  ],
  combiner,
);
