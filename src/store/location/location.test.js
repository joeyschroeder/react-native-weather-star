import { INITIAL_STATE, locationDuck } from './location';
import { getLocation, getLocationForegroundPermissions } from 'services/location/location';
import { setupStore } from 'utils/testing/setup-test-store/setup-test-store';
import { getAsyncDuckInitialState } from 'utils/testing/get-async-duck-initial-state/get-async-duck-initial-state';

jest.mock('services/location/location');

describe('locationDuck', () => {
  it('should create a duck with the correct initial state', () => {
    const duck = locationDuck;
    expect(duck.initialState).toEqual(getAsyncDuckInitialState(INITIAL_STATE));
  });

  it('should call getLocationForegroundPermissions and getLocation when request is called', async () => {
    const store = setupStore();
    const duck = locationDuck;

    getLocationForegroundPermissions.mockResolvedValue();
    getLocation.mockResolvedValue({ latitude: 10, longitude: 20 });

    await store.dispatch(duck.request());

    expect(getLocationForegroundPermissions).toHaveBeenCalled();
    expect(getLocation).toHaveBeenCalled();
  });
});
