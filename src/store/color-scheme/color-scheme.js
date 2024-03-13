import { createSlice } from '@reduxjs/toolkit';
import { COLOR_SCHEMES } from 'constants/color-schemes';

export const NAME = 'color-scheme';
const INITIAL_STATE = COLOR_SCHEMES.DARK;

/*
 * This state is not being used. The weather API provides an "isDaytime" property
 * that is used to determine the color scheme. It seems the Android device
 * Appearance API is not reliably firing change events.
 */
export const colorSchemeSlice = createSlice({
  name: NAME,
  initialState: INITIAL_STATE,
  reducers: {
    update(state, { payload: colorScheme }) {
      return colorScheme;
    },
  },
  selectors: {
    selectColorScheme: (state) => state,
  },
});

const { actions, selectors } = colorSchemeSlice;

// actions
export const { update: updateColorScheme } = actions;

// selectors
export const { selectColorScheme } = selectors;
