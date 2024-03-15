import { createSlice } from '@reduxjs/toolkit';
import { DEVICE_ORIENTATIONS } from 'constants/device-orientations';

export const dimensionsOrientationSlice = createSlice({
  name: 'dimensions-orientation',
  initialState: {
    height: null,
    orientation: DEVICE_ORIENTATIONS.PORTRAIT,
    width: null,
  },
  reducers: {
    update(state, { payload }) {
      return payload;
    },
  },
  selectors: {
    selectOrientation: (state) => state.orientation,
    selectWidth: (state) => state.width,
    selectHeight: (state) => state.height,
  },
});

// actions
export const { update: updateDimensionsOrientation } = dimensionsOrientationSlice.actions;

// selectors
export const {
  selectHeight: selectDimensionsOrientationHeight,
  selectOrientation: selectDimensionsOrientationOrientation,
  selectWidth: selectDimensionsOrientationWidth,
} = dimensionsOrientationSlice.getSelectors();
