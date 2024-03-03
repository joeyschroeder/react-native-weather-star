import { getWeatherByForecastUrl } from '../../services/weather/weather';
import { createAsyncReducer } from '../../utils/create-async-reducer/create-async-reducer';

export const NAME = 'weather-forecast';

const { reducer, requestThunk, selectData } = createAsyncReducer({
  name: NAME,
  requestFunc: (forecastUrl) => {
    return getWeatherByForecastUrl(forecastUrl);
  },
});

export { reducer as weatherForecastReducer };
export { requestThunk as requestWeatherForecast };

export const selectWeatherForecast = selectData;
