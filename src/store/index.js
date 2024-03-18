import { configureStore } from '@reduxjs/toolkit';
import { locationDuck } from './location/location';
import { colorSchemeDuck } from './color-scheme/color-scheme';
import { NAME as SETTINGS, settingsReducer } from './settings/settings';
import { NAME as WEATHER, weatherReducer } from './weather/weather';
import { dimensionsOrientationDuck } from './dimensions-orientation/dimensions-orientation';

export const REDUCER = {
  [SETTINGS]: settingsReducer,
  [WEATHER]: weatherReducer,
  [colorSchemeDuck.name]: colorSchemeDuck.reducer,
  [dimensionsOrientationDuck.name]: dimensionsOrientationDuck.reducer,
  [locationDuck.name]: locationDuck.reducer,
};

export const STORE = configureStore({
  reducer: REDUCER,
});
