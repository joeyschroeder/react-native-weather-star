export const convertTempToColor = (theme = {}, temp = '') => {
  if (typeof temp !== 'number') return theme.colors.text;

  if (temp > 85) return theme.colors.primary;
  if (temp > 45) return theme.colors.text;

  return theme.colors.primary;
};
