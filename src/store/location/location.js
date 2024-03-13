import { getLocation, getLocationForegroundPermissions } from 'services/location/location';
import { createAsyncReducer } from 'utils/create-async-reducer/create-async-reducer';

export const NAME = 'location';

// eslint-disable-next-line import/no-unused-modules
export const {
  reducer: locationReducer,
  requestThunk: requestLocation,
  selectData: selectLocation,
  selectStatus: selectLocationStatus,
} = createAsyncReducer({
  name: NAME,
  requestOnce: true,
  requestFunc: async () => {
    await getLocationForegroundPermissions();
    return getLocation();
  },
});

export const selectLocationLatitude = (state) => selectLocation(state)?.latitude;
export const selectLocationLongitude = (state) => selectLocation(state)?.longitude;
