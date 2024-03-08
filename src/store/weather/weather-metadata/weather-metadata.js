import { getWeatherMetadataByLatitudeLongitude } from '../../../services/weather/weather';
import { createAsyncReducer } from '../../../utils/create-async-reducer/create-async-reducer';

export const NAME = 'metadata';

const { reducer, requestThunk, selectData, selectStatus } = createAsyncReducer({
  name: NAME,
  parentName: 'weather',
  requestOnce: true,
  requestFunc: ({ latitude, longitude }) => {
    return getWeatherMetadataByLatitudeLongitude({ latitude, longitude });
  },
});

export { reducer as weatherMetadataReducer };
export { requestThunk as requestWeatherMetadata };

const selectWeatherMetadata = selectData;
export const selectWeatherMetadataLoading = selectStatus;

// const selectWeatherMetadataForecast = (state) => selectWeatherMetadata(state)?.forecast;
export const selectWeatherMetadataForecastHourly = (state) => selectWeatherMetadata(state)?.forecastHourly;
export const selectWeatherMetadataRadarStation = (state) => selectWeatherMetadata(state)?.radarStation;
const selectWeatherMetadataRelativeLocation = (state) => selectWeatherMetadata(state)?.relativeLocation;

export const selectWeatherMetadataCity = (state) => selectWeatherMetadataRelativeLocation(state)?.properties?.city;
export const selectWeatherMetadataState = (state) => selectWeatherMetadataRelativeLocation(state)?.properties?.state;
