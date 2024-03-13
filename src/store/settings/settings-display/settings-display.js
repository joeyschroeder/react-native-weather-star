import { SETTINGS_ASYNC_STORAGE_KEY } from 'constants/settings-async-storage-key';
import { SETTINGS_INITIAL_STATE } from 'constants/settings-initial-state';
import { getAsyncStorageItem } from 'services/async-storage/async-storage';
import { createAsyncReducer } from 'utils/create-async-reducer/create-async-reducer';

export const NAME = 'display';

// eslint-disable-next-line import/no-unused-modules
export const {
  reducer: settingsDisplayReducer,
  requestThunk: requestSettingsDisplay,
  selectData: selectSettingsDisplay,
  selectStatus: selectSettingsDisplayStatus,
} = createAsyncReducer({
  name: NAME,
  parentName: 'settings',
  initialState: SETTINGS_INITIAL_STATE,
  requestFunc: () => {
    return getAsyncStorageItem(SETTINGS_ASYNC_STORAGE_KEY);
  },
});

export const selectSettingsDisplayColorScheme = (state) => selectSettingsDisplay(state).colorScheme;
export const selectSettingsDisplayColor = (state) => selectSettingsDisplay(state).color;
