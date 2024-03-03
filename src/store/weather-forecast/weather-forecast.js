import { getWeatherByForecastUrl } from '../../services/weather/weather';
import { createAsyncReducer } from '../../utils/create-async-reducer/create-async-reducer';
import { formatHourlyForecastObject } from '../../utils/format-hourly-forecast-object/format-hourly-forecast-object';
import { max, min } from 'lodash';

export const NAME = 'weather-forecast';

const { reducer, requestThunk, selectData, selectLoading } = createAsyncReducer({
  name: NAME,
  requestFunc: (forecastUrl) => {
    return getWeatherByForecastUrl(forecastUrl);
  },
});

export { reducer as weatherForecastReducer };
export { requestThunk as requestWeatherForecast };

export const selectWeatherForecast = selectData;
export const selectWeatherForecastLoading = selectLoading;

export const selectWeatherForecastUpdateTime = (state) => selectWeatherForecast(state)?.updateTime;

const selectPeriods = (state) => {
  const periods = selectWeatherForecast(state)?.periods || [];
  return periods.map((period) => formatHourlyForecastObject(period));
};

// TODO: update this to use current time and not just the first period
const selectPeriodLatest = (state) => {
  const periods = selectPeriods(state);
  return periods[0];
};

export const selectWeatherForecastDewpoint = (state) => selectPeriodLatest(state)?.dewpoint;
export const selectWeatherForecastProbabilityOfPrecipitation = (state) =>
  selectPeriodLatest(state)?.probabilityOfPrecipitation;
export const selectWeatherForecastRelativeHumidity = (state) => selectPeriodLatest(state)?.relativeHumidity;
export const selectWeatherForecastShortForecast = (state) => selectPeriodLatest(state)?.shortForecast;
export const selectWeatherForecastTemperature = (state) => selectPeriodLatest(state)?.temperature;
export const selectWeatherForecastTemperatureUnit = (state) => selectPeriodLatest(state)?.temperatureUnit;
export const selectWeatherForecastWindDirection = (state) => selectPeriodLatest(state)?.windDirection;
export const selectWeatherForecastWindSpeedMph = (state) => selectPeriodLatest(state)?.windSpeedMph;

export const selectWeatherForecastTemperatureHigh = (state) => {
  const temperatures = selectPeriods(state).map((period) => period.temperature);
  return max(temperatures);
};

export const selectWeatherForecastTemperatureLow = (state) => {
  const temperatures = selectPeriods(state).map((period) => period.temperature);
  return min(temperatures);
};
