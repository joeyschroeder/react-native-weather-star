import { DEVICE_ORIENTATIONS } from '../../constants/device-orientations';

export const getOrientationFromWindow = ({ width, height }) => {
  return width > height ? DEVICE_ORIENTATIONS.LANDSCAPE : DEVICE_ORIENTATIONS.PORTRAIT;
};
