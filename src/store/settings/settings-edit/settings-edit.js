import { SETTINGS_INITIAL_STATE } from '../../../constants/settings-initial-state';
import { createDuck } from 'utils/create-duck/create-duck';

export const settingsEditDuck = createDuck({
  name: 'edit',
  initialState: SETTINGS_INITIAL_STATE,
  parentNames: ['settings'],
});
