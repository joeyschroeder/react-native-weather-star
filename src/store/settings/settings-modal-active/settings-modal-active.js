import { createDuck } from 'utils/create-duck/create-duck';

export const settingsModalActiveDuck = createDuck({
  name: 'modal-active',
  initialState: false,
  parentNames: ['settings'],
});

// thunks
export const closeSettingsModal = () => (dispatch) => {
  dispatch(settingsModalActiveDuck.actions.update(false));
};

export const openSettingsModal = () => (dispatch) => {
  dispatch(settingsModalActiveDuck.actions.update(true));
};
