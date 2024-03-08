import { connect } from 'react-redux';
import { CurrentPrecipSection } from './current-precip-section';
import {
  selectWeatherForecastProbabilityOfPrecipitation,
  selectWeatherForecastRelativeHumidity,
} from '../../store/weather/weather-forecast/weather-forecast';

const mapStateToProps = (state) => {
  return {
    precipProbability: selectWeatherForecastProbabilityOfPrecipitation(state),
    relativeHumidity: selectWeatherForecastRelativeHumidity(state),
  };
};

export const CurrentPrecipSectionConnected = connect(mapStateToProps)(CurrentPrecipSection);
