import { getWeatherMetadataByLatitudeLongitude } from '../../services/weather/weather';
import { createAsyncReducer } from '../../utils/create-async-reducer/create-async-reducer';

export const NAME = 'weather-metadata';

const { reducer, requestThunk, selectData, selectStatus } = createAsyncReducer({
  name: NAME,
  requestOnce: true,
  requestFunc: ({ latitude, longitude }) => {
    return getWeatherMetadataByLatitudeLongitude({ latitude, longitude });
  },
});

export { reducer as weatherMetadataReducer };
export { requestThunk as requestWeatherMetadata };

export const selectWeatherMetadata = selectData;
export const selectWeatherMetadataLoading = selectStatus;

export const selectWeatherMetadataForecast = (state) => selectWeatherMetadata(state)?.forecast;
export const selectWeatherMetadataForecastHourly = (state) => selectWeatherMetadata(state)?.forecastHourly;
export const selectWeatherMetadataRadarStation = (state) => selectWeatherMetadata(state)?.radarStation;
export const selectWeatherMetadataRelativeLocation = (state) => selectWeatherMetadata(state)?.relativeLocation;

export const selectWeatherMetadataCity = (state) => selectWeatherMetadataRelativeLocation(state)?.properties?.city;
export const selectWeatherMetadataState = (state) => selectWeatherMetadataRelativeLocation(state)?.properties?.state;
