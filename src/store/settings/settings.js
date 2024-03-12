import { combineReducers } from '@reduxjs/toolkit';
import { NAME as SETTINGS_DISPLAY, settingsDisplayReducer } from './settings-display/settings-display';
import { NAME as SETTINGS_EDIT, settingsEditReducer } from './settings-edit/settings-edit';

export const NAME = 'settings';

export const settingsReducer = combineReducers({
  [SETTINGS_DISPLAY]: settingsDisplayReducer,
  [SETTINGS_EDIT]: settingsEditReducer,
});
