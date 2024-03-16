import Color from 'color';

const WHITE = '#fff';
const BLACK = '#000';

const MIX_WHITE = Color(WHITE);
const MIX_BLACK = Color(BLACK);

const VALUES = {
  BLACK,
  BLACK_TYPE: MIX_BLACK.mix(MIX_WHITE, 0.2).string(),
  BLUE: '#00c6ff',
  GREEN: '#00dc87',
  GREY: MIX_BLACK.mix(MIX_WHITE, 0.25).string(),
  RED: '#ff0042',
  TRANSPARENT: 'transparent',
  WHITE,
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
