import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../../constants/colors';
import { FLEX_GAP } from '../../constants/flex-gap';
import { DateTimeSection } from '../date-time-section/date-time-section';
import moment from 'moment';
import { useKeepAwake } from 'expo-keep-awake';
import { HeaderConnected } from '../header/header.connected';
import { CurrentWeatherSectionConnected } from '../current-weather-section/current-weather-section.connected';
import { CurrentPrecipSectionConnected } from '../current-precip-section/current-precip-section.connected';
import { CurrentWindSectionConnected } from '../current-wind-section/current-wind-section.connected';

const TIMER_INTERVAL = 1000 * 60;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK,
    flex: 1,
    gap: FLEX_GAP,
    justifyContent: 'center',
  },
});

export function App(props) {
  const { onLayout, requestData } = props;

  useKeepAwake();
  const [now, setNow] = useState(moment().format());

  useEffect(() => {
    requestData();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setNow(moment().format());
    }, TIMER_INTERVAL);

    return () => clearInterval(interval);
  }, []);

  return (
    <View style={styles.container} onLayout={onLayout}>
      <HeaderConnected />
      <View style={{ flexDirection: 'row', flex: 4, gap: FLEX_GAP }}>
        <CurrentWeatherSectionConnected style={{ flex: 3 }} />
        <CurrentPrecipSectionConnected style={{ flex: 1 }} />
        <CurrentWindSectionConnected style={{ flex: 1 }} />
      </View>
      <DateTimeSection blink style={{ flex: 2 }} value={now} />
    </View>
  );
}

App.propTypes = {
  onLayout: PropTypes.func,
  requestData: PropTypes.func,
};

App.defaultProps = {
  onLayout: undefined,
  requestData: () => {},
};
