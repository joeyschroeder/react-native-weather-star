import { requestLocation, selectLocationLatitude, selectLocationLongitude } from '../../store/location/location';
import { requestWeatherAlerts } from '../../store/weather-alerts/weather-alerts';
import { requestWeatherForecast } from '../../store/weather-forecast/weather-forecast';
import {
  requestWeatherMetadata,
  selectWeatherMetadataForecastHourly,
} from '../../store/weather-metadata/weather-metadata';

export const requestWeatherByLocation = () => async (dispatch, getState) => {
  await dispatch(requestLocation());
  const latitude = selectLocationLatitude(getState());
  const longitude = selectLocationLongitude(getState());

  await dispatch(requestWeatherMetadata({ latitude, longitude }));
  await dispatch(requestWeatherAlerts({ latitude, longitude }));

  const weatherMetadataForecastHourly = selectWeatherMetadataForecastHourly(getState());
  await dispatch(requestWeatherForecast(weatherMetadataForecastHourly));
};
