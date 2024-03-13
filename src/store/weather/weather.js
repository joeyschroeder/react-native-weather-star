import { combineSlices } from '@reduxjs/toolkit';
import { weatherAlertsSlice } from 'store/weather/weather-alerts/weather-alerts';
import { weatherForecastSlice } from 'store/weather/weather-forecast/weather-forecast';
import { weatherMetadataSlice } from 'store/weather/weather-metadata/weather-metadata';

export const NAME = 'weather';

export const weatherSlice = combineSlices(weatherAlertsSlice, weatherForecastSlice, weatherMetadataSlice);
