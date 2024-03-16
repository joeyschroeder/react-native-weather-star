import { SETTINGS_ASYNC_STORAGE_KEY } from 'constants/settings-async-storage-key';
import { setAsyncStorageItem } from 'services/async-storage/async-storage';
import { createAsyncDuck } from 'utils/create-duck/create-async-duck/create-async-duck';

export const settingsEditSaveDuck = createAsyncDuck({
  name: 'edit-save',
  parentNames: ['settings'],
  requestFunc: (settings) => {
    return setAsyncStorageItem(SETTINGS_ASYNC_STORAGE_KEY, settings);
  },
});
