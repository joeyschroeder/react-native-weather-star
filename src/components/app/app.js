import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { COLORS } from '../../constants/colors';
import { FLEX_GAP } from '../../constants/flex-gap';
import { DateTimeSection } from '../date-time-section/date-time-section';
import moment from 'moment';
import { useKeepAwake } from 'expo-keep-awake';
import { Footer } from '../footer/footer';
import { Section } from '../section/section';
import { DigitalValueWithLabel } from '../digital-value-with-label/digital-value-with-label';
import { SPACER } from '../../constants/spacer';
import { HeaderConnected } from '../header/header.connected';
import { CurrentWeatherSectionConnected } from '../current-weather-section/current-weather-section.connected';

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
        <Section style={{ flex: 1 }}>
          <View style={{ gap: SPACER }}>
            <DigitalValueWithLabel color={COLORS.INFO} label="Rain" value="15" append="%" />
            <DigitalValueWithLabel label="Humidity" append="%" value="18" color={COLORS.INFO} />
          </View>
        </Section>
        <Section style={{ flex: 1 }}>
          <View style={{ gap: SPACER }}>
            <DigitalValueWithLabel color={COLORS.DANGER} label="Wind MPH" value="15" />
            <DigitalValueWithLabel color={COLORS.DANGER} value="NE" label="Wind Dir." />
          </View>
        </Section>
      </View>
      <DateTimeSection blink style={{ flex: 2 }} color={COLORS.WHITE} value={now} />
      <Footer />
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
