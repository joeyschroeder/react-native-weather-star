import Color from 'color';

const BLACK_TYPE = '#3a3a3a';

const VALUES = {
  BLACK: '#000',
  BLACK_TYPE,
  BLUE: '#00c6ff',
  GREEN: '#00ffba',
  GREY: Color(BLACK_TYPE).lighten(0.3).string(),
  RED: '#ff0042',
  TRANSPARENT: 'transparent',
  WHITE: '#fff',
  YELLOW: '#ffae00',
};

export const COLORS = {
  ...VALUES,
  DANGER: VALUES.RED,
  INFO: VALUES.BLUE,
  SUCCESS: VALUES.GREEN,
  TRANSPARENT: VALUES.TRANSPARENT,
  WARNING: VALUES.YELLOW,
};
