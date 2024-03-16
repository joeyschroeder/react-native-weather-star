export const convertTempToColor = (theme = {}, temp = '') => {
  if (typeof temp !== 'number') return theme.colors.primary;

  if (temp > 85) return theme.colors.danger;
  if (temp > 45) return theme.colors.primary;

  return theme.colors.primary;
};
