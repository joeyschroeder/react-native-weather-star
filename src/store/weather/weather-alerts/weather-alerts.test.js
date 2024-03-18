import { getWeatherAlertsByLatitudeLongitude } from 'services/weather/weather';
import { INITIAL_STATE, selectWeatherAlertsConcat, weatherAlertsDuck } from './weather-alerts';
import { setupStore } from 'utils/testing/setup-test-store/setup-test-store';
import { getAsyncDuckInitialState } from 'utils/testing/get-async-duck-initial-state/get-async-duck-initial-state';

jest.mock('services/weather/weather');

describe('weatherAlertsDuck', () => {
  it('should create a duck with the correct initial state', () => {
    expect(weatherAlertsDuck.initialState).toEqual(getAsyncDuckInitialState(INITIAL_STATE));
  });

  it('should call getWeatherAlertsByLatitudeLongitude when request is called', async () => {
    const store = setupStore();

    const latitude = 10;
    const longitude = 20;

    getWeatherAlertsByLatitudeLongitude.mockResolvedValue({ latitude, longitude });

    await store.dispatch(weatherAlertsDuck.request({ latitude, longitude }));

    expect(getWeatherAlertsByLatitudeLongitude).toHaveBeenCalledWith({ latitude, longitude });
  });
});

describe('selectWeatherAlertsConcat', () => {
  it('should return a concatenated string of headline, description, and instruction', () => {
    const state = {
      weather: {
        alerts: {
          data: {
            headline: 'Headline',
            description: 'Description',
            instruction: 'Instruction',
          },
        },
      },
    };

    const expected = 'Headline Description Instruction';

    expect(selectWeatherAlertsConcat(state)).toEqual(expected);
  });
});
