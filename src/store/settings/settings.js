import { combineReducers } from '@reduxjs/toolkit';
import { settingsDisplayDuck } from './settings-display/settings-display';
import { settingsEditSaveDuck } from './settings-edit-save/settings-edit-save';
import { settingsEditDuck } from './settings-edit/settings-edit';
import { settingsModalActiveDuck } from './settings-modal-active/settings-modal-active';

export const NAME = 'settings';

export const settingsReducer = combineReducers({
  [settingsDisplayDuck.name]: settingsDisplayDuck.reducer,
  [settingsEditSaveDuck.name]: settingsEditSaveDuck.reducer,
  [settingsEditDuck.name]: settingsEditDuck.reducer,
  [settingsModalActiveDuck.name]: settingsModalActiveDuck.reducer,
});
