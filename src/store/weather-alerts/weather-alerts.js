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

const selectWeatherAlerts = selectData;
export const selectWeatherAlertsLoading = selectStatus;

const selectWeatherAlertsDescription = (state) => selectWeatherAlerts(state)?.description || '';
const selectWeatherAlertsHeadline = (state) => selectWeatherAlerts(state)?.headline || '';
const selectWeatherAlertsInstruction = (state) => selectWeatherAlerts(state)?.instruction || '';
export const selectWeatherAlertsSeverity = (state) => selectWeatherAlerts(state)?.severity;

export const selectWeatherAlertsConcat = (state) => {
  const headline = selectWeatherAlertsHeadline(state);
  const description = selectWeatherAlertsDescription(state);
  const instruction = selectWeatherAlertsInstruction(state);

  const concat = [headline, description, instruction].join(' ').trim();
  if (!concat) return;

  return concat.replace(/\\n/g, ' ');
};
