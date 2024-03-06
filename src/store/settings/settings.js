import { createSlice } from '@reduxjs/toolkit';

export const NAME = 'settings';
export const INITIAL_STATE = {
  clockHourFormat: undefined,
  colorScheme: undefined,
  dangerColor: undefined,
  // humidityDangerThreshold: undefined,
  // latitude: undefined,
  // longitude: undefined,
  // precipDangerThreshold: undefined,
  // tempHighThreshold: undefined,
  // tempLowThreshold: undefined,
  // tempUnit: undefined,
  // useGeolocation: undefined,
  // windDangerThreshold: undefined,
  // windSpeedUnit: undefined,
};

const settingsSlice = createSlice({
  name: NAME,
  initialState: INITIAL_STATE,
  reducers: {
    updateColorScheme(state, { payload: colorScheme }) {
      return colorScheme;
    },
  },
});

const { actions, reducer } = settingsSlice;

export { reducer as settingsReducer };

// actions
export const { updateColorScheme } = actions;

// selectors
export const selectSettings = (state) => state[NAME] || INITIAL_STATE;
