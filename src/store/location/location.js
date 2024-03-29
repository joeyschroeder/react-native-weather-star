import { getLocation, getLocationForegroundPermissions } from 'services/location/location';
import { createAsyncDuck } from 'utils/create-duck/create-async-duck/create-async-duck';

export const INITIAL_STATE = {
  latitude: null,
  longitude: null,
};

export const locationDuck = createAsyncDuck({
  initialState: INITIAL_STATE,
  name: 'location',
  requestOnce: true,
  requestFunc: async () => {
    await getLocationForegroundPermissions();
    return getLocation();
  },
});
