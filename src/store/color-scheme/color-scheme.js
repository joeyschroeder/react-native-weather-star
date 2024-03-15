import { createSlice } from '@reduxjs/toolkit';
import { COLOR_SCHEMES } from 'constants/color-schemes';

/*
 * This state is not being used. The weather API provides an "isDaytime" property
 * that is used to determine the color scheme. It seems the Android device
 * Appearance API is not reliably firing change events.
 */
export const colorSchemeSlice = createSlice({
  name: 'color-scheme',
  initialState: COLOR_SCHEMES.DARK,
  reducers: {
    update(state, { payload: colorScheme }) {
      return colorScheme;
    },
  },
  selectors: {
    selectColorScheme: (state) => state,
  },
});

// actions
export const { update: updateColorScheme } = colorSchemeSlice.actions;

// selectors
export const { selectColorScheme } = colorSchemeSlice.getSelectors();
