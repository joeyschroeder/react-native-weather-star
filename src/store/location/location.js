import { getLocation, getLocationForegroundPermissions } from '../../services/location/location';
import { createAsyncReducer } from '../../utils/create-async-reducer/create-async-reducer';

export const NAME = 'location';

const { reducer, requestThunk, selectData, selectLoading } = createAsyncReducer({
  name: NAME,
  requestOnce: true,
  requestFunc: async () => {
    await getLocationForegroundPermissions();
    return getLocation();
  },
});

export { reducer as locationReducer };
export { requestThunk as requestLocation };

export const selectLocation = selectData;
export const selectLocationLoading = selectLoading;

export const selectLocationLatitude = (state) => selectLocation(state)?.latitude;
export const selectLocationLongitude = (state) => selectLocation(state)?.longitude;
