import { SETTINGS_ASYNC_STORAGE_KEY } from 'constants/settings-async-storage-key';
import { SETTINGS_INITIAL_STATE } from 'constants/settings-initial-state';
import { getAsyncStorageItem } from 'services/async-storage/async-storage';
import { createAsyncDuck } from 'utils/create-duck/create-async-duck/create-async-duck';

export const settingsDisplayDuck = createAsyncDuck({
  initialState: SETTINGS_INITIAL_STATE,
  name: 'display',
  parentNames: ['settings'],
  requestOnce: true,
  requestFunc: () => {
    return getAsyncStorageItem(SETTINGS_ASYNC_STORAGE_KEY);
  },
});
