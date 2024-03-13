import { getWeatherMetadataByLatitudeLongitude } from 'services/weather/weather';
import { createAsyncReducer } from 'utils/create-async-reducer/create-async-reducer';

export const NAME = 'metadata';

// eslint-disable-next-line import/no-unused-modules
export const {
  reducer: weatherMetadataReducer,
  requestThunk: requestWeatherMetadata,
  selectData: selectWeatherMetadata,
  selectStatus: selectWeatherMetadataStatus,
} = createAsyncReducer({
  name: NAME,
  parentName: 'weather',
  requestOnce: true,
  requestFunc: ({ latitude, longitude }) => {
    return getWeatherMetadataByLatitudeLongitude({ latitude, longitude });
  },
});

// const selectWeatherMetadataForecast = (state) => selectWeatherMetadata(state)?.forecast;
export const selectWeatherMetadataForecastHourly = (state) => selectWeatherMetadata(state)?.forecastHourly;
export const selectWeatherMetadataRadarStation = (state) => selectWeatherMetadata(state)?.radarStation;
const selectWeatherMetadataRelativeLocation = (state) => selectWeatherMetadata(state)?.relativeLocation;

export const selectWeatherMetadataCity = (state) => selectWeatherMetadataRelativeLocation(state)?.properties?.city;
export const selectWeatherMetadataState = (state) => selectWeatherMetadataRelativeLocation(state)?.properties?.state;
