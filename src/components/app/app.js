import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { FLEX_GAP } from 'constants/flex-gap';
import { useKeepAwake } from 'expo-keep-awake';
import { CurrentWeatherSection } from 'components/current-weather-section/current-weather-section';
import { withTheme } from 'components/with-theme/with-theme';
import { withAppearanceChangeListener } from 'components/with-appearance-change-listener/with-appearance-change-listener';
import { Settings } from 'components/settings/settings';
import { withDimensionsOrientationChangeListener } from 'components/with-dimensions-orientation-change-listener/with-dimensions-orientation-change-listener';
import { compose } from 'utils/compose/compose';
import { CurrentDateTimeSection } from 'components/current-date-time-section/current-date-time-section';
import Constants from 'expo-constants';
import { THEME_DEFAULT_PROP_TYPE } from 'constants/theme-default-prop-type';
import { useDispatch } from 'react-redux';
import { requestWeatherByLocation } from 'thunks/request-weather-by-location/request-weather-by-location';
import { CurrentPrecipSection } from 'components/current-precip-section/current-precip-section';
import { CurrentWindSection } from 'components/current-wind-section/current-wind-section';
import { Footer } from 'components/footer/footer';
import { Header } from 'components/header/header';

const { dataRequestIntervalMinutes } = Constants.expoConfig.extra || {};
const DATA_REQUEST_INTERVAL = 1000 * 60 * (dataRequestIntervalMinutes || 60);

function createStyleSheet({ theme = THEME_DEFAULT_PROP_TYPE }) {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      gap: FLEX_GAP,
      justifyContent: 'center',
    },
    currentWeather: {
      flex: 7,
    },
    dateTime: {
      flex: 4,
    },
    precip: {
      flex: 4,
    },
    primary: {
      flexDirection: 'row',
      flex: 4,
      gap: FLEX_GAP,
    },
    secondary: {
      flex: 1,
      gap: FLEX_GAP,
    },
    tertiary: {
      flexDirection: 'row',
      flex: 9,
      gap: FLEX_GAP,
    },
  });
}

function AppBase(props) {
  const { onLayout } = props;
  const styles = createStyleSheet(props);

  useKeepAwake();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(requestWeatherByLocation());

    const dataRequestInterval = setInterval(() => {
      dispatch(requestWeatherByLocation());
    }, DATA_REQUEST_INTERVAL);

    return () => clearInterval(dataRequestInterval);
  }, []);

  return (
    <>
      <View onLayout={onLayout} style={styles.container}>
        <Header />
        <View style={styles.primary}>
          <View style={styles.secondary}>
            <View style={styles.tertiary}>
              <CurrentWeatherSection style={styles.currentWeather} />
              <CurrentPrecipSection style={styles.precip} />
            </View>
            <CurrentDateTimeSection style={styles.dateTime} />
          </View>
          <CurrentWindSection />
        </View>
        <Footer />
      </View>
      <Settings isVisible />
    </>
  );
}

AppBase.propTypes = {
  onLayout: PropTypes.func,
};

AppBase.defaultProps = {
  onLayout: undefined,
};

// export const App = compose(withAppearanceChangeListener, withDimensionsOrientationChangeListener, withTheme)(AppBase);
export const App = AppBase;
