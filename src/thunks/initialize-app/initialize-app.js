import { settingsDisplayDuck } from 'store/settings/settings-display/settings-display';
import { requestWeatherByLocation } from 'thunks/request-weather-by-location/request-weather-by-location';

export const initializeApp = () => async (dispatch) => {
  await dispatch(settingsDisplayDuck.request());
  await dispatch(requestWeatherByLocation());
};
