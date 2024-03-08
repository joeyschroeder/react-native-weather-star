import { getWeatherAlertsByLatitudeLongitude } from '../../services/weather/weather';
import { createAsyncReducer } from '../../utils/create-async-reducer/create-async-reducer';

export const NAME = 'weather-alerts';

const { reducer, requestThunk, selectData, selectStatus } = createAsyncReducer({
  name: NAME,
  requestFunc: ({ latitude, longitude }) => {
    return getWeatherAlertsByLatitudeLongitude({ latitude, longitude });
  },
});

export { reducer as weatherAlertsReducer };
export { requestThunk as requestWeatherAlerts };

export const selectWeatherAlerts = selectData;
export const selectWeatherAlertsLoading = selectStatus;
