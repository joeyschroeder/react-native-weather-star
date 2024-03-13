import { configureStore } from '@reduxjs/toolkit';
import { NAME as LOCATION, locationSlice } from './location/location';
import { NAME as COLOR_SCHEME, colorSchemeSlice } from './color-scheme/color-scheme';
import { NAME as SETTINGS, settingsSlice } from './settings/settings';
import { NAME as WEATHER, weatherSlice } from './weather/weather';
import {
  NAME as DIMENSIONS_ORIENTATION,
  dimensionsOrientationSlice,
} from './dimensions-orientation/dimensions-orientation';

export const STORE = configureStore({
  reducer: {
    [COLOR_SCHEME]: colorSchemeSlice.reducer,
    [DIMENSIONS_ORIENTATION]: dimensionsOrientationSlice.reducer,
    [LOCATION]: locationSlice.reducer,
    [SETTINGS]: settingsSlice,
    [WEATHER]: weatherSlice,
  },
});
