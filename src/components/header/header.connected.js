import { connect } from 'react-redux';
import { Header } from './header';
import {
  selectWeatherMetadataCity,
  selectWeatherMetadataRadarStation,
  selectWeatherMetadataState,
} from '../../store/weather-metadata/weather-metadata';
import { selectWeatherForecastUpdateTime } from '../../store/weather-forecast/weather-forecast';

const mapStateToProps = (state) => {
  return {
    city: selectWeatherMetadataCity(state),
    lastUpdate: selectWeatherForecastUpdateTime(state),
    state: selectWeatherMetadataState(state),
    radarStation: selectWeatherMetadataRadarStation(state),
  };
};

export const HeaderConnected = connect(mapStateToProps)(Header);
