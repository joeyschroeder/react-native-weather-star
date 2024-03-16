import { combineReducers } from '@reduxjs/toolkit';
import { settingsDisplaySlice } from './settings-display/settings-display';
import { settingsEditSaveSlice } from './settings-edit-save/settings-edit-save';
import { settingsEditDuck } from './settings-edit/settings-edit';
import { settingsModalActiveDuck } from './settings-modal-active/settings-modal-active';

export const NAME = 'settings';

export const settingsReducer = combineReducers({
  [settingsDisplaySlice.name]: settingsDisplaySlice.reducer,
  [settingsEditSaveSlice.name]: settingsEditSaveSlice.reducer,
  [settingsEditDuck.name]: settingsEditDuck.reducer,
  [settingsModalActiveDuck.name]: settingsModalActiveDuck.reducer,
});
