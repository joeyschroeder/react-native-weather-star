import { connect } from 'react-redux';
import { App } from './app';
import { requestWeatherByLocation } from 'thunks/request-weather-by-location/request-weather-by-location';

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    requestData: () => dispatch(requestWeatherByLocation()),
  };
};

export const AppConnected = connect(mapStateToProps, mapDispatchToProps)(App);
