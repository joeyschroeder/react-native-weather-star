import { connect } from 'react-redux';
import { selectLocationLoading } from '../../store/location/location';
import { selectWeatherForecastLoading } from '../../store/weather/weather-forecast/weather-forecast';
import { selectWeatherMetadataLoading } from '../../store/weather/weather-metadata/weather-metadata';
import { requestWeatherByLocation } from '../../thunks/request-weather-by-location/request-weather-by-location';
import { HeaderRefreshButton } from './header-refresh-button';
import { selectAnyRequestPending } from '../../selectors/select-any-request-pending/select-any-request-pending';
import { selectAnyRequestRejected } from '../../selectors/select-any-request-rejected/select-any-request-rejected';
import { selectWeatherAlertsLoading } from '../../store/weather/weather-alerts/weather-alerts';

const REQUEST_SELECTORS = [
  selectLocationLoading,
  selectWeatherAlertsLoading,
  selectWeatherForecastLoading,
  selectWeatherMetadataLoading,
];

const mapStateToProps = (state) => {
  return {
    hasError: selectAnyRequestRejected(state, REQUEST_SELECTORS),
    isLoading: selectAnyRequestPending(state, REQUEST_SELECTORS),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    onPress: () => dispatch(requestWeatherByLocation()),
  };
};

export const HeaderRefreshButtonConnected = connect(mapStateToProps, mapDispatchToProps)(HeaderRefreshButton);
