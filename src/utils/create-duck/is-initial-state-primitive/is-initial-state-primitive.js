export function isInitialStatePrimitive(initialState) {
  return Array.isArray(initialState) || typeof initialState !== 'object';
}
