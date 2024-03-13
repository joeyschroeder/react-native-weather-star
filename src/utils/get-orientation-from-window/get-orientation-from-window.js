import { DEVICE_ORIENTATIONS } from 'constants/device-orientations';

export const getOrientationFromWindow = ({ height, width }) => {
  return width > height ? DEVICE_ORIENTATIONS.LANDSCAPE : DEVICE_ORIENTATIONS.PORTRAIT;
};
