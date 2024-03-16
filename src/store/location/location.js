import { getLocation, getLocationForegroundPermissions } from 'services/location/location';
import { createAsyncDuck } from 'utils/create-duck/create-async-duck/create-async-duck';

export const locationDuck = createAsyncDuck({
  initialState: {
    latitude: null,
    longitude: null,
  },
  name: 'location',
  requestOnce: true,
  requestFunc: async () => {
    await getLocationForegroundPermissions();
    return getLocation();
  },
});
