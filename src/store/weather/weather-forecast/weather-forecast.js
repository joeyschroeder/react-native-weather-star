import moment from 'moment';
import { getWeatherByForecastUrl } from '../../../services/weather/weather';
import { createAsyncReducer } from '../../../utils/create-async-reducer/create-async-reducer';
import { formatHourlyForecastObject } from '../../../utils/format-hourly-forecast-object/format-hourly-forecast-object';
import { max, min } from 'lodash';
import { EXPO_MATERIAL_COMMUNITY_WEATHER_ICON_KEYS } from '../../../constants/expo-material-community-weather-icon-keys';
import { closestMatch } from 'closest-match';

export const NAME = 'forecast';

const { reducer, requestThunk, selectData, selectStatus } = createAsyncReducer({
  name: NAME,
  parentName: 'weather',
  requestFunc: (forecastUrl) => {
    return getWeatherByForecastUrl(forecastUrl);
  },
});

export { reducer as weatherForecastReducer };
export { requestThunk as requestWeatherForecast };

const selectWeatherForecast = selectData;
export const selectWeatherForecastLoading = selectStatus;

export const selectWeatherForecastUpdateTime = (state) => selectWeatherForecast(state)?.updateTime;

const selectPeriods = (state) => {
  const periods = selectWeatherForecast(state)?.periods || [];
  return periods.map((period) => formatHourlyForecastObject(period));
};

const selectPeriodLatest = (state) => {
  const now = moment();
  const periods = selectPeriods(state);

  const first = periods.find((period) => {
    const endTime = moment(period.endTime);
    return moment(endTime).isSameOrAfter(now);
  });

  return first;
};

const selectPeriodsSameDay = (state) => {
  const now = moment();
  const periods = selectPeriods(state);

  return periods.filter((period) => {
    const endTime = moment(period.endTime);
    return moment(endTime).isSame(now, 'day');
  });
};

// export const selectWeatherForecastDewpoint = (state) => selectPeriodLatest(state)?.dewpoint;
export const selectWeatherForecastProbabilityOfPrecipitation = (state) =>
  selectPeriodLatest(state)?.probabilityOfPrecipitation;
export const selectWeatherForecastRelativeHumidity = (state) => selectPeriodLatest(state)?.relativeHumidity;
export const selectWeatherForecastShortForecast = (state) => selectPeriodLatest(state)?.shortForecast;
export const selectWeatherForecastTemperature = (state) => selectPeriodLatest(state)?.temperature;
export const selectWeatherForecastTemperatureUnit = (state) => selectPeriodLatest(state)?.temperatureUnit;
export const selectWeatherForecastWindDirection = (state) => selectPeriodLatest(state)?.windDirection;
export const selectWeatherForecastWindSpeedMph = (state) => selectPeriodLatest(state)?.windSpeedMph;
export const selectWeatherForecastIsDaytime = (state) => selectPeriodLatest(state)?.isDaytime;

export const selectWeatherForecastIcon = (state) => {
  const shortForecast = selectWeatherForecastShortForecast(state);

  if (!shortForecast) return undefined;
  const isDaytime = selectWeatherForecastIsDaytime(state);

  const normalizeShortForcast = shortForecast.toLowerCase().replace(/ /g, '-');
  const query = `weather-${!isDaytime ? 'night-' : ''}${normalizeShortForcast}`;

  return closestMatch(query, EXPO_MATERIAL_COMMUNITY_WEATHER_ICON_KEYS);
};

export const selectWeatherForecastTemperatureHigh = (state) => {
  const periods = selectPeriodsSameDay(state);
  const temperatures = periods.map((period) => period.temperature);

  return max(temperatures);
};

export const selectWeatherForecastTemperatureLow = (state) => {
  const periods = selectPeriodsSameDay(state);
  const temperatures = periods.map((period) => period.temperature);

  return min(temperatures);
};
