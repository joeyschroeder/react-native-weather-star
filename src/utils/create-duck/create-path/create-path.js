export function createPath(...names) {
  const pathValues = names.flat();
  return pathValues.filter((value) => Boolean(value)).join('.');
}
