import { combineReducers } from '@reduxjs/toolkit';
import { weatherAlertsDuck } from './weather-alerts/weather-alerts';
import { weatherForecastDuck } from './weather-forecast/weather-forecast';
import { weatherMetadataDuck } from './weather-metadata/weather-metadata';

export const NAME = 'weather';

export const weatherReducer = combineReducers({
  [weatherAlertsDuck.name]: weatherAlertsDuck.reducer,
  [weatherForecastDuck.name]: weatherForecastDuck.reducer,
  [weatherMetadataDuck.name]: weatherMetadataDuck.reducer,
});
