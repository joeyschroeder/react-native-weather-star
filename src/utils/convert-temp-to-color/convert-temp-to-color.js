import { COLORS } from '../../constants/colors';

export const convertTempToColor = (temp) => {
  if (typeof temp !== 'number') return COLORS.WHITE;

  if (temp > 85) return COLORS.DANGER;
  if (temp > 45) return COLORS.WHITE;

  return COLORS.DANGER;
};
