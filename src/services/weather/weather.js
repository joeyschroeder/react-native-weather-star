import axios from 'axios';

const API_URL = 'https://api.weather.gov/';

export const getWeatherMetadataByLatitudeLongitude = async ({ latitude, longitude }) => {
  if (!latitude) throw new Error('Invalid latitude.');
  if (!longitude) throw new Error('Invalid longitude.');

  const { data } = await axios({
    method: 'get',
    url: new URL(`points/${latitude},${longitude}`, API_URL).href,
  });

  return data.properties;
};

export const getWeatherByForecastUrl = async (forecastUrl) => {
  if (!forecastUrl) throw new Error('Invalid forecastUrl.');

  const { data } = await axios({
    method: 'get',
    url: forecastUrl,
  });

  return data.properties;
};

export const getWeatherAlertsByLatitudeLongitude = async ({ latitude, longitude }) => {
  if (!latitude) throw new Error('Invalid latitude.');
  if (!longitude) throw new Error('Invalid longitude.');

  const { data } = await axios({
    method: 'get',
    url: new URL('alerts/active', API_URL).href,
    params: {
      certainty: 'Observed,Likely',
      message_type: 'alert',
      point: `${latitude},${longitude}`,
      severity: 'Extreme,Severe,Moderate',
      status: 'actual',
      urgency: 'Immediate,Expected',
    },
  });

  return data.features?.properties;
};
