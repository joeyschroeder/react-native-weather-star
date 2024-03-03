import { configureStore } from '@reduxjs/toolkit';
import { weatherMetadataReducer, NAME as WEATHER_METADATA } from './weather-metadata/weather-metadata';
import { locationReducer, NAME as LOCATION } from './location/location';
import { weatherForecastReducer, NAME as WEATHER_FORECAST } from './weather-forecast/weather-forecast';

export const STORE = configureStore({
  reducer: {
    [LOCATION]: locationReducer,
    [WEATHER_FORECAST]: weatherForecastReducer,
    [WEATHER_METADATA]: weatherMetadataReducer,
  },
});
