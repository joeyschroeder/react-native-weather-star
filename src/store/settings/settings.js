import { combineReducers } from '@reduxjs/toolkit';
import { settingsDisplaySlice } from 'store/settings/settings-display/settings-display';
import { settingsEditSaveSlice } from 'store/settings/settings-edit-save/settings-edit-save';
import { settingsEditSlice } from 'store/settings/settings-edit/settings-edit';
import { settingsModalActiveSlice } from './settings-modal-active/settings-modal-active';

export const NAME = 'settings';

export const settingsReducer = combineReducers({
  [settingsDisplaySlice.name]: settingsDisplaySlice.reducer,
  [settingsEditSaveSlice.name]: settingsEditSaveSlice.reducer,
  [settingsEditSlice.name]: settingsEditSlice.reducer,
  [settingsModalActiveSlice.name]: settingsModalActiveSlice.reducer,
});
