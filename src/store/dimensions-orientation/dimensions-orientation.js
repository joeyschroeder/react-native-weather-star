import { createSlice } from '@reduxjs/toolkit';
import { DEVICE_ORIENTATIONS } from 'constants/device-orientations';

export const NAME = 'dimensions-orientation';
const INITIAL_STATE = {
  height: null,
  orientation: DEVICE_ORIENTATIONS.PORTRAIT,
  width: null,
};

export const dimensionsOrientationSlice = createSlice({
  name: NAME,
  initialState: INITIAL_STATE,
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

const { actions, selectors } = dimensionsOrientationSlice;

// actions
export const { update: updateDimensionsOrientation } = actions;

// selectors
export const {
  selectHeight: selectDimensionsOrientationHeight,
  selectOrientation: selectDimensionsOrientationOrientation,
  selectWidth: selectDimensionsOrientationWidth,
} = selectors;
