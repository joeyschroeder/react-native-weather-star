import { configureStore } from '@reduxjs/toolkit';
import { NAME as LOCATION, locationReducer } from './location/location';
import { NAME as COLOR_SCHEME, colorSchemeReducer } from './color-scheme/color-scheme';
import { NAME as SETTINGS, settingsReducer } from './settings/settings';
import { NAME as WEATHER, weatherReducer } from './weather/weather';
import {
  NAME as DIMENSIONS_ORIENTATION,
  dimensionsOrientationReducer,
} from './dimensions-orientation/dimensions-orientation';

export const STORE = configureStore({
  reducer: {
    [COLOR_SCHEME]: colorSchemeReducer,
    [DIMENSIONS_ORIENTATION]: dimensionsOrientationReducer,
    [LOCATION]: locationReducer,
    [SETTINGS]: settingsReducer,
    [WEATHER]: weatherReducer,
  },
});
