import { configureStore } from '@reduxjs/toolkit';
import { locationReducer, NAME as LOCATION } from './location/location';
import { colorSchemeReducer, NAME as COLOR_SCHEME } from './color-scheme/color-scheme';
import { settingsReducer, NAME as SETTINGS } from './settings/settings';
import { weatherReducer, NAME as WEATHER } from './weather/weather';

export const STORE = configureStore({
  reducer: {
    [COLOR_SCHEME]: colorSchemeReducer,
    [LOCATION]: locationReducer,
    [SETTINGS]: settingsReducer,
    [WEATHER]: weatherReducer,
  },
});
