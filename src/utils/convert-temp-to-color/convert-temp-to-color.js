export const convertTempToColor = (theme = {}, temp = '') => {
  if (typeof temp !== 'number') return theme.text;

  if (temp > 85) return theme.danger;
  if (temp > 45) return theme.text;

  return theme.danger;
};
