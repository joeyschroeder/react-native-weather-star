import { combineReducers } from '@reduxjs/toolkit';
import { settingsDisplaySlice } from 'store/settings/settings-display/settings-display';
import { settingsEditSaveSlice } from 'store/settings/settings-edit-save/settings-edit-save';
import { settingsEditSlice } from 'store/settings/settings-edit/settings-edit';

export const NAME = 'settings';

export const settingsReducer = combineReducers({
  [settingsDisplaySlice.name]: settingsDisplaySlice.reducer,
  [settingsEditSlice.name]: settingsEditSlice.reducer,
  [settingsEditSaveSlice.name]: settingsEditSaveSlice.reducer,
});
