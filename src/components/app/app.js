import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect } from 'react';
import { FLEX_GAP } from '../../constants/flex-gap';
import { useKeepAwake } from 'expo-keep-awake';
import { HeaderConnected } from '../header/header.connected';
import { CurrentWeatherSectionConnected } from '../current-weather-section/current-weather-section.connected';
import { CurrentPrecipSectionConnected } from '../current-precip-section/current-precip-section.connected';
import { CurrentWindSectionConnected } from '../current-wind-section/current-wind-section.connected';
import { withTheme } from '../with-theme/with-theme';
import { withAppearanceChangeListener } from '../with-appearance-change-listener/with-appearance-change-listener';
import { Settings } from '../settings/settings';
import { FooterConnected } from '../footer/footer.connected';
import { withDimensionsOrientationChangeListener } from '../with-dimensions-orientation-change-listener/with-dimensions-orientation-change-listener';
import { compose } from '../../utils/compose/compose';
import { CurrentDateTimeSection } from '../current-date-time-section/current-date-time-section';
import Constants from 'expo-constants';

const { dataRequestIntervalMinutes } = Constants.expoConfig.extra || {};
const DATA_REQUEST_INTERVAL = 1000 * 60 * (dataRequestIntervalMinutes || 60);

function createStyleSheet({ theme }) {
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
  const { onLayout, requestData } = props;
  const styles = createStyleSheet(props);

  useKeepAwake();

  useEffect(() => {
    requestData();

    const dataRequestInterval = setInterval(() => {
      requestData();
    }, DATA_REQUEST_INTERVAL);

    return () => clearInterval(dataRequestInterval);
  }, []);

  return (
    <>
      <View onLayout={onLayout} style={styles.container}>
        <HeaderConnected />
        <View style={styles.primary}>
          <View style={styles.secondary}>
            <View style={styles.tertiary}>
              <CurrentWeatherSectionConnected style={styles.currentWeather} />
              <CurrentPrecipSectionConnected style={styles.precip} />
            </View>
            <CurrentDateTimeSection style={styles.dateTime} />
          </View>
          <CurrentWindSectionConnected />
        </View>
        <FooterConnected />
      </View>
      <Settings visible={false} />
    </>
  );
}

AppBase.propTypes = {
  onLayout: PropTypes.func,
  requestData: PropTypes.func,
};

AppBase.defaultProps = {
  onLayout: undefined,
  requestData: () => {},
};

export const App = compose(withAppearanceChangeListener, withDimensionsOrientationChangeListener, withTheme)(AppBase);
