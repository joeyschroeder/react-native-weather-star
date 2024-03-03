import { connect } from 'react-redux';
import {
  selectWeatherForecastWindDirection,
  selectWeatherForecastWindSpeedMph,
} from '../../store/weather-forecast/weather-forecast';
import { CurrentWindSection } from './current-wind-section';

const mapStateToProps = (state) => {
  return {
    speed: selectWeatherForecastWindSpeedMph(state),
    direction: selectWeatherForecastWindDirection(state),
  };
};

export const CurrentWindSectionConnected = connect(mapStateToProps)(CurrentWindSection);
