import { connect } from 'react-redux';
import { CurrentWeatherSection } from './current-weather-section';
import {
  selectWeatherForecastTemperature,
  selectWeatherForecastTemperatureHigh,
  selectWeatherForecastTemperatureLow,
  selectWeatherForecastTemperatureUnit,
} from '../../store/weather-forecast/weather-forecast';

const mapStateToProps = (state) => {
  return {
    tempCurrent: selectWeatherForecastTemperature(state),
    tempHigh: selectWeatherForecastTemperatureHigh(state),
    tempLow: selectWeatherForecastTemperatureLow(state),
    tempUnit: selectWeatherForecastTemperatureUnit(state),
  };
};

export const CurrentWeatherSectionConnected = connect(mapStateToProps)(CurrentWeatherSection);
