import { connect } from 'react-redux';
import { Header } from './header';
import {
  selectWeatherMetadataCity,
  selectWeatherMetadataRadarStation,
  selectWeatherMetadataState,
} from '../../store/weather-metadata/weather-metadata';
import {
  selectWeatherForecastLoading,
  selectWeatherForecastShortForecast,
  selectWeatherForecastUpdateTime,
} from '../../store/weather-forecast/weather-forecast';
import { selectLocationLoading } from '../../store/location/location';
import { requestWeatherByLocation } from '../../thunks/request-weather-by-location/request-weather-by-location';

const mapStateToProps = (state) => {
  return {
    city: selectWeatherMetadataCity(state),
    isLoading: selectLocationLoading(state) || selectWeatherForecastLoading(state),
    lastUpdate: selectWeatherForecastUpdateTime(state),
    radarStation: selectWeatherMetadataRadarStation(state),
    shortForecast: selectWeatherForecastShortForecast(state),
    state: selectWeatherMetadataState(state),
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIconPress: () => dispatch(requestWeatherByLocation()),
  };
};

export const HeaderConnected = connect(mapStateToProps, mapDispatchToProps)(Header);
