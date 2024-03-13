import { connect } from 'react-redux';
import { Footer } from './footer';
import { selectWeatherAlertsConcat, selectWeatherAlertsSeverity } from 'store/weather/weather-alerts/weather-alerts';

const mapStateToProps = (state) => {
  return {
    alert: selectWeatherAlertsConcat(state),
    severity: selectWeatherAlertsSeverity(state),
  };
};

export const FooterConnected = connect(mapStateToProps)(Footer);
