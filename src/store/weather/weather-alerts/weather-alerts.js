import { getWeatherAlertsByLatitudeLongitude } from 'services/weather/weather';
import { createAsyncDuck } from 'utils/create-duck/create-async-duck/create-async-duck';

export const weatherAlertsDuck = createAsyncDuck({
  initialState: {
    description: '',
    headline: '',
    instruction: '',
    severity: '',
  },
  name: 'alerts',
  parentNames: ['weather'],
  requestFunc: ({ latitude, longitude }) => {
    return getWeatherAlertsByLatitudeLongitude({ latitude, longitude });
  },
});

export const selectWeatherAlertsConcat = (state) => {
  const headline = weatherAlertsDuck.select.headline(state);
  const description = weatherAlertsDuck.select.description(state);
  const instruction = weatherAlertsDuck.select.instruction(state);

  const concat = [headline, description, instruction].join(' ').trim();
  if (!concat) return;

  return concat.replace(/\\n/g, ' ');
};
