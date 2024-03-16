import { DEVICE_ORIENTATIONS } from 'constants/device-orientations';
import { createDuck } from 'utils/create-duck/create-duck';

export const dimensionsOrientationDuck = createDuck({
  name: 'dimensions-orientation',
  initialState: {
    height: null,
    orientation: DEVICE_ORIENTATIONS.PORTRAIT,
    width: null,
  },
});
