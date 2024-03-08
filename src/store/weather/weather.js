import { combineReducers } from '@reduxjs/toolkit';
import { weatherAlertsReducer, NAME as WEATHER_ALERTS } from './weather-alerts/weather-alerts';
import { weatherForecastReducer, NAME as WEATHER_FORECAST } from './weather-forecast/weather-forecast';
import { weatherMetadataReducer, NAME as WEATHER_METADATA } from './weather-metadata/weather-metadata';

export const NAME = 'weather';

export const weatherReducer = combineReducers({
  [WEATHER_ALERTS]: weatherAlertsReducer,
  [WEATHER_FORECAST]: weatherForecastReducer,
  [WEATHER_METADATA]: weatherMetadataReducer,
});
