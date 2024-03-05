import { COLORS } from '../../constants/colors';
import { THEMES } from '../../constants/themes';

const COLOR_VALUES = Object.keys(COLORS).reduce((acc, key) => {
  const lowercaseKey = key.toLowerCase();
  acc[lowercaseKey] = COLORS[key];

  return acc;
}, {});

// TODO: Add these values to the store
export const selectTheme = (state) => {
  const theme = THEMES.DARK;

  const background = COLORS.GREY;
  const text = COLORS.WHITE;

  const primary = COLORS.RED;
  const secondary = COLORS.BLUE;

  return {
    ...COLOR_VALUES,
    background,
    primary,
    secondary,
    text,
    dark: theme === THEMES.DARK,
  };
};
