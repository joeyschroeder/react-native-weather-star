import { getWeatherAlertsByLatitudeLongitude } from '../../../services/weather/weather';
import { createAsyncReducer } from '../../../utils/create-async-reducer/create-async-reducer';

export const NAME = 'alerts';

// eslint-disable-next-line import/no-unused-modules
export const {
  reducer: weatherAlertsReducer,
  requestThunk: requestWeatherAlerts,
  selectData: selectWeatherAlerts,
  selectStatus: selectWeatherAlertsLoading,
} = createAsyncReducer({
  name: NAME,
  parentName: 'weather',
  requestFunc: ({ latitude, longitude }) => {
    return getWeatherAlertsByLatitudeLongitude({ latitude, longitude });
  },
});

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
