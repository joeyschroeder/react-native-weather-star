import { connect } from 'react-redux';
import { Header } from './header';
import {
  selectWeatherMetadataCity,
  selectWeatherMetadataRadarStation,
  selectWeatherMetadataState,
} from '../../store/weather-metadata/weather-metadata';
import {
  selectWeatherForecastShortForecast,
  selectWeatherForecastUpdateTime,
} from '../../store/weather-forecast/weather-forecast';

const mapStateToProps = (state) => {
  return {
    city: selectWeatherMetadataCity(state),
    lastUpdate: selectWeatherForecastUpdateTime(state),
    radarStation: selectWeatherMetadataRadarStation(state),
    shortForecast: selectWeatherForecastShortForecast(state),
    state: selectWeatherMetadataState(state),
  };
};

export const HeaderConnected = connect(mapStateToProps)(Header);
