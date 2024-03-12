import { createSlice } from '@reduxjs/toolkit';
import { COLOR_SCHEMES } from '../../constants/color-schemes';

export const NAME = 'color-scheme';
const INITIAL_STATE = COLOR_SCHEMES.DARK;

/*
 * This state is not being used. The weather API provides an "isDaytime" property
 * that is used to determine the color scheme. It seems the Android device
 * Appearce API is not reliably firing change events.
 */
const colorSchemeSlice = createSlice({
  name: NAME,
  initialState: INITIAL_STATE,
  reducers: {
    updateColorScheme(state, { payload: colorScheme }) {
      return colorScheme;
    },
  },
});

const { actions, reducer } = colorSchemeSlice;

export { reducer as colorSchemeReducer };

// actions
export const { updateColorScheme } = actions;

// selectors
// eslint-disable-next-line import/no-unused-modules
export const selectColorScheme = (state) => state[NAME] || INITIAL_STATE;
