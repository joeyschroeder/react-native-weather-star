import { SETTINGS_ASYNC_STORAGE_KEY } from '../../../constants/settings-async-storage-key';
import { SETTINGS_INITIAL_STATE } from '../../../constants/settings-initial-state';
import { setAsyncStorageItem } from '../../../services/async-storage/async-storage';
import { createAsyncReducer } from '../../../utils/create-async-reducer/create-async-reducer';

export const NAME = 'edit';

// eslint-disable-next-line import/no-unused-modules
export const {
  reducer: settingsEditReducer,
  requestThunk: requestSettingsEdit,
  selectData: selectSettingsEdit,
  selectStatus: selectSettingsEditStatus,
} = createAsyncReducer({
  name: NAME,
  parentName: 'settings',
  initialState: SETTINGS_INITIAL_STATE,
  requestFunc: (settings) => {
    return setAsyncStorageItem(SETTINGS_ASYNC_STORAGE_KEY, settings);
  },
});
