import { createSlice } from '@reduxjs/toolkit';
import { SETTINGS_INITIAL_STATE } from '../../../constants/settings-initial-state';

const NAME = 'edit';
const INITIAL_STATE = SETTINGS_INITIAL_STATE;

export const settingsEditSlice = createSlice({
  name: NAME,
  initialState: INITIAL_STATE,
  reducers: {
    updateColorScheme(state, { payload: colorScheme }) {
      state.colorScheme = colorScheme;
    },
    updateColor(state, { payload: color }) {
      state.color = color;
    },
  },
  selectors: {
    selectColorScheme: (state) => state.colorScheme,
    selectColor: (state) => state.color,
  },
});

const { actions, selectors } = settingsEditSlice;

// actions
export const { updateColor, updateColorScheme } = actions;

// selectors
export const { selectColor: selectSettingsEditColor, selectColorScheme: selectSettingsEditColorScheme } = selectors;
