import { INITIAL_STATE, dimensionsOrientationDuck } from './dimensions-orientation';

describe('dimensionsOrientationDuck', () => {
  it('should create a duck with the correct initial state', () => {
    const duck = dimensionsOrientationDuck;
    expect(duck.initialState).toEqual(INITIAL_STATE);
  });
});
