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

const TIMER_INTERVAL = 1000 * 60;
const DATA_REQUEST_INTERVAL = 1000 * 60 * 30;

function createStyleSheet(theme) {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.dark ? theme.black : theme.white,
      flex: 1,
      gap: FLEX_GAP,
      justifyContent: 'center',
    },
  });
}

function AppBase(props) {
  const { onLayout, requestData, theme } = props;
  const styles = createStyleSheet(theme);

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
    <View style={styles.container} onLayout={onLayout}>
      <HeaderConnected />
      <View style={{ flexDirection: 'row', flex: 4, gap: FLEX_GAP }}>
        <View style={{ gap: FLEX_GAP, flex: 1 }}>
          <View style={{ flexDirection: 'row', flex: 4, gap: FLEX_GAP }}>
            <CurrentWeatherSectionConnected style={{ flex: 3 }} />
            <CurrentPrecipSectionConnected style={{ flex: 1 }} />
          </View>
          <DateTimeSection blink style={{ flex: 2 }} value={now} />
        </View>
        <CurrentWindSectionConnected />
      </View>
    </View>
  );
}

AppBase.propTypes = {
  onLayout: PropTypes.func,
  requestData: PropTypes.func,
  theme: PropTypes.object,
};

AppBase.defaultProps = {
  theme: undefined,
  onLayout: undefined,
  requestData: () => {},
};

export const App = withTheme(AppBase);
