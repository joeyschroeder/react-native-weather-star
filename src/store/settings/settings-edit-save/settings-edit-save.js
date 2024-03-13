import { SETTINGS_ASYNC_STORAGE_KEY } from 'constants/settings-async-storage-key';
import { setAsyncStorageItem } from 'services/async-storage/async-storage';
import { createAsyncReducer } from 'utils/create-async-reducer/create-async-reducer';

const NAME = 'edit-save';

// eslint-disable-next-line import/no-unused-modules
export const {
  requestThunk: requestSettingsEditSave,
  selectData: selectSettingsEditSave,
  selectStatus: selectSettingsEditSaveStatus,
  slice: settingsEditSaveSlice,
} = createAsyncReducer({
  name: NAME,
  parentName: 'settings',
  requestFunc: (settings) => {
    return setAsyncStorageItem(SETTINGS_ASYNC_STORAGE_KEY, settings);
  },
});
