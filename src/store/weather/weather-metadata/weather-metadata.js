import { getWeatherMetadataByLatitudeLongitude } from 'services/weather/weather';
import { createAsyncDuck } from 'utils/create-duck/create-async-duck/create-async-duck';

export const weatherMetadataDuck = createAsyncDuck({
  initialState: {
    forecastHourly: '',
    radarStation: '',
    relativeLocation: {
      properties: {},
    },
  },
  name: 'metadata',
  parentNames: ['weather'],
  requestOnce: true,
  requestFunc: ({ latitude, longitude }) => {
    return getWeatherMetadataByLatitudeLongitude({ latitude, longitude });
  },
});

export const selectWeatherMetadataCity = (state) => weatherMetadataDuck.select.relativeLocation(state).properties?.city;
export const selectWeatherMetadataState = (state) =>
  weatherMetadataDuck.select.relativeLocation(state).properties?.state;
