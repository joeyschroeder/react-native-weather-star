import { locationDuck } from 'store/location/location';
import { weatherAlertsDuck } from 'store/weather/weather-alerts/weather-alerts';
import { weatherForecastDuck } from 'store/weather/weather-forecast/weather-forecast';
import { weatherMetadataDuck } from 'store/weather/weather-metadata/weather-metadata';

export const requestWeatherByLocation = () => async (dispatch, getState) => {
  await dispatch(locationDuck.request());
  const latitude = locationDuck.select.latitude(getState());
  const longitude = locationDuck.select.longitude(getState());

  await dispatch(weatherMetadataDuck.request({ latitude, longitude }));
  await dispatch(weatherAlertsDuck.request({ latitude, longitude }));

  const weatherMetadataForecastHourly = weatherMetadataDuck.select.forecastHourly(getState());
  await dispatch(weatherForecastDuck.request(weatherMetadataForecastHourly));
};
