import { combineReducers } from '@reduxjs/toolkit';
import { NAME as WEATHER_ALERTS, weatherAlertsReducer } from './weather-alerts/weather-alerts';
import { NAME as WEATHER_FORECAST, weatherForecastReducer } from './weather-forecast/weather-forecast';
import { NAME as WEATHER_METADATA, weatherMetadataReducer } from './weather-metadata/weather-metadata';

export const NAME = 'weather';

export const weatherReducer = combineReducers({
  [WEATHER_ALERTS]: weatherAlertsReducer,
  [WEATHER_FORECAST]: weatherForecastReducer,
  [WEATHER_METADATA]: weatherMetadataReducer,
});
