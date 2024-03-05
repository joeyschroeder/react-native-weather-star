import { createSlice } from '@reduxjs/toolkit';
import { COLOR_SCHEMES } from '../../constants/color-schemes';

export const NAME = 'color-scheme';
export const INITIAL_STATE = COLOR_SCHEMES.DARK;

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
export const selectColorScheme = (state) => state[NAME] || INITIAL_STATE;
