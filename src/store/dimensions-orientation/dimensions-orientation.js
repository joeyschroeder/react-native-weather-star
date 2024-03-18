import { DEVICE_ORIENTATIONS } from 'constants/device-orientations';
import { createDuck } from 'utils/create-duck/create-duck';

export const INITIAL_STATE = {
  height: null,
  orientation: DEVICE_ORIENTATIONS.PORTRAIT,
  width: null,
};

export const dimensionsOrientationDuck = createDuck({
  name: 'dimensions-orientation',
  initialState: INITIAL_STATE,
});
