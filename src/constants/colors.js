import Color from 'color';

const BLACK_TYPE = '#3a3a3a';

export const COLORS = {
  BLACK: '#000',
  BLACK_TYPE,
  DANGER: '#ff0042',
  GREY: Color(BLACK_TYPE).lighten(0.3).string(),
  SUCCESS: '#00ffba',
  TRANSPARENT: 'transparent',
  INFO: '#027095',
  WARNING: '#ffae00',
  WHITE: '#fff',
};
