import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { FLEX_GAP } from '../../constants/flex-gap';
import { DateTimeSection } from '../date-time-section/date-time-section';
import moment from 'moment';
import { useKeepAwake } from 'expo-keep-awake';
import { HeaderConnected } from '../header/header.connected';
import { CurrentWeatherSectionConnected } from '../current-weather-section/current-weather-section.connected';
import { CurrentPrecipSectionConnected } from '../current-precip-section/current-precip-section.connected';
import { CurrentWindSectionConnected } from '../current-wind-section/current-wind-section.connected';
import { withTheme } from '../with-theme/with-theme';
import { withAppearanceChangeListener } from '../with-appearance-change-listener/with-appearance-change-listener';
import { Settings } from '../settings/settings';
import { FooterConnected } from '../footer/footer.connected';

const TIMER_INTERVAL = 1000 * 60;
const DATA_REQUEST_INTERVAL = 1000 * 60 * 60;

function createStyleSheet({ theme }) {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
      gap: FLEX_GAP,
      justifyContent: 'center',
    },
    currentWeather: {
      flex: 5,
    },
    dateTime: {
      flex: 2,
    },
    precip: {
      flex: 3,
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
      flex: 5,
      gap: FLEX_GAP,
    },
  });
}

function AppBase(props) {
  const { onLayout, requestData } = props;
  const styles = createStyleSheet(props);

  useKeepAwake();
  const [now, setNow] = useState(moment().format());

  useEffect(() => {
    requestData();

    const dataRequestInterval = setInterval(() => {
      requestData();
    }, DATA_REQUEST_INTERVAL);

    const timerInterval = setInterval(() => {
      setNow(moment().format());
    }, TIMER_INTERVAL);

    return () => {
      clearInterval(dataRequestInterval);
      clearInterval(timerInterval);
    };
  }, []);

  return (
    <>
      <View style={styles.container} onLayout={onLayout}>
        <HeaderConnected />
        <View style={styles.primary}>
          <View style={styles.secondary}>
            <View style={styles.tertiary}>
              <CurrentWeatherSectionConnected style={styles.currentWeather} />
              <CurrentPrecipSectionConnected style={styles.precip} />
            </View>
            <DateTimeSection blink style={styles.dateTime} value={now} />
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

export const App = withAppearanceChangeListener(withTheme(AppBase));
