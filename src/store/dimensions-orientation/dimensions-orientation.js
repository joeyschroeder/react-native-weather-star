import { createSlice } from '@reduxjs/toolkit';
import { DEVICE_ORIENTATIONS } from '../../constants/device-orientations';

export const NAME = 'dimensions-orientation';
const INITIAL_STATE = {
  height: null,
  orientation: DEVICE_ORIENTATIONS.PORTRAIT,
  width: null,
};

const dimensionsOrientationSlice = createSlice({
  name: NAME,
  initialState: INITIAL_STATE,
  reducers: {
    updateDimensionsOrientation(state, { payload }) {
      return payload;
    },
  },
});

const { actions, reducer } = dimensionsOrientationSlice;

export { reducer as dimensionsOrientationReducer };

// actions
export const { updateDimensionsOrientation } = actions;

// selectors
const selectDimensionsOrientation = (state) => state[NAME] || INITIAL_STATE;
export const selectDimensionsOrientationOrientation = (state) => selectDimensionsOrientation(state).orientation;
export const selectDimensionsOrientationWidth = (state) => selectDimensionsOrientation(state).width;
export const selectDimensionsOrientationHeight = (state) => selectDimensionsOrientation(state).height;
