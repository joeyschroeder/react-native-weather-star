import { getWeatherMetadataByLatitudeLongitude } from '../../services/weather/weather';
import { createAsyncReducer } from '../../utils/create-async-reducer/create-async-reducer';

export const NAME = 'weather-metadata';

const { reducer, requestThunk, selectData } = createAsyncReducer({
  name: NAME,
  requestFunc: ({ latitude, longitude }) => {
    return getWeatherMetadataByLatitudeLongitude({ latitude, longitude });
  },
});

export { reducer as weatherMetadataReducer };
export { requestThunk as requestWeatherMetadata };

export const selectWeatherMetadata = selectData;
export const selectWeatherMetadataForecast = (state) => selectWeatherMetadata(state)?.forecast;
export const selectWeatherMetadataForecastHourly = (state) => selectWeatherMetadata(state)?.forecastHourly;
export const selectWeatherMetadataRadarStation = (state) => selectWeatherMetadata(state)?.radarStation;
