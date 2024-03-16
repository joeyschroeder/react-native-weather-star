import { combineReducers } from '@reduxjs/toolkit';
import { weatherAlertsSlice } from './weather-alerts/weather-alerts';
import { weatherForecastSlice } from './weather-forecast/weather-forecast';
import { weatherMetadataSlice } from './weather-metadata/weather-metadata';

export const NAME = 'weather';

export const weatherReducer = combineReducers({
  [weatherAlertsSlice.name]: weatherAlertsSlice.reducer,
  [weatherForecastSlice.name]: weatherForecastSlice.reducer,
  [weatherMetadataSlice.name]: weatherMetadataSlice.reducer,
});
