import { combineReducers } from '@reduxjs/toolkit';
import { settingsDisplayDuck } from './settings-display/settings-display';
import { settingsEditSaveDuck } from './settings-edit-save/settings-edit-save';
import { settingsEditDuck } from './settings-edit/settings-edit';
import { closeSettingsModal, settingsModalActiveDuck } from './settings-modal-active/settings-modal-active';

export const NAME = 'settings';

export const settingsReducer = combineReducers({
  [settingsDisplayDuck.name]: settingsDisplayDuck.reducer,
  [settingsEditSaveDuck.name]: settingsEditSaveDuck.reducer,
  [settingsEditDuck.name]: settingsEditDuck.reducer,
  [settingsModalActiveDuck.name]: settingsModalActiveDuck.reducer,
});

export const cancelEditSettings = () => async (dispatch, getState) => {
  const displaySettings = settingsDisplayDuck.select.data(getState());

  await dispatch(closeSettingsModal());
  dispatch(settingsEditDuck.actions.update(displaySettings));
};

export const requestSaveSettings = () => async (dispatch, getState) => {
  const newSettings = settingsEditDuck.select.state(getState());

  await dispatch(settingsEditSaveDuck.request(newSettings));
  await dispatch(settingsDisplayDuck.request());
  await dispatch(closeSettingsModal());
};
