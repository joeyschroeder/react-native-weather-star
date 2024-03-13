import { connect } from 'react-redux';
import { selectLocationStatus } from '../../../store/location/location';
import { selectWeatherForecastStatus } from '../../../store/weather/weather-forecast/weather-forecast';
import { selectWeatherMetadataStatus } from '../../../store/weather/weather-metadata/weather-metadata';
import { requestWeatherByLocation } from '../../../thunks/request-weather-by-location/request-weather-by-location';
import { HeaderRefreshButton } from './header-refresh-button';
import { selectAnyRequestPending } from '../../../selectors/select-any-request-pending/select-any-request-pending';
import { selectAnyRequestRejected } from '../../../selectors/select-any-request-rejected/select-any-request-rejected';
import { selectWeatherAlertsStatus } from '../../../store/weather/weather-alerts/weather-alerts';

const REQUEST_SELECTORS = [
  selectLocationStatus,
  selectWeatherAlertsStatus,
  selectWeatherForecastStatus,
  selectWeatherMetadataStatus,
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
