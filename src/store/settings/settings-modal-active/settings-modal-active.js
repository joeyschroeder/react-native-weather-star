import { createSlice } from '@reduxjs/toolkit';
import { buildStateSelector } from 'utils/build-state-selector/build-state-selector';

const NAME = 'modal-active';
const PARENT_NAME = 'settings';

const INITIAL_STATE = false;

export const settingsModalActiveSlice = createSlice({
  name: NAME,
  initialState: INITIAL_STATE,
  reducers: {
    update(state, { payload }) {
      return payload;
    },
  },
});

// actions
const { update: updateSettingsModalActive } = settingsModalActiveSlice.actions;

// selectors
export const selectSettingsEditModalActive = buildStateSelector([PARENT_NAME, NAME], INITIAL_STATE);
// thunks
export const closeSettingsModal = () => (dispatch) => {
  dispatch(updateSettingsModalActive(false));
};

export const openSettingsModal = () => (dispatch) => {
  dispatch(updateSettingsModalActive(true));
};
