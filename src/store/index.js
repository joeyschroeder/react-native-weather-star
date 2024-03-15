import { configureStore } from '@reduxjs/toolkit';
import { locationSlice } from './location/location';
import { colorSchemeSlice } from './color-scheme/color-scheme';
import { NAME as SETTINGS, settingsReducer } from './settings/settings';
import { NAME as WEATHER, weatherReducer } from './weather/weather';
import { dimensionsOrientationSlice } from './dimensions-orientation/dimensions-orientation';

export const STORE = configureStore({
  reducer: {
    [SETTINGS]: settingsReducer,
    [WEATHER]: weatherReducer,
    [colorSchemeSlice.name]: colorSchemeSlice.reducer,
    [dimensionsOrientationSlice.name]: dimensionsOrientationSlice.reducer,
    [locationSlice.name]: locationSlice.reducer,
  },
});
