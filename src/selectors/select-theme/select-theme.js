import { COLORS } from '../../constants/colors';
import { COLOR_SCHEMES } from '../../constants/color-schemes';
import { selectColorScheme } from '../../store/color-scheme/color-scheme';
import Color from 'color';

const COLOR_VALUES = Object.keys(COLORS).reduce((acc, key) => {
  const lowercaseKey = key.toLowerCase();
  acc[lowercaseKey] = COLORS[key];

  return acc;
}, {});

const MIX_WHITE = Color(COLORS.WHITE);

export const selectTheme = (state) => {
  const theme = selectColorScheme(state);
  const isDark = theme === COLOR_SCHEMES.DARK;

  const background = isDark ? COLORS.BLACK : Color(COLORS.BLACK).mix(MIX_WHITE, 0.8).string();
  const section = isDark ? COLORS.GREY : COLORS.WHITE;
  const valueBackground = isDark ? COLORS.BLACK_TYPE : Color(COLORS.BLACK).mix(MIX_WHITE, 0.9).string();
  const text = isDark ? COLORS.WHITE : COLORS.BLACK_TYPE;

  const primary = COLORS.RED;
  const secondary = COLORS.BLUE;

  return {
    ...COLOR_VALUES,
    background,
    section,
    valueBackground,
    primary,
    secondary,
    text,
    dark: theme === COLOR_SCHEMES.DARK,
  };
};
