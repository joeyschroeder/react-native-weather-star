import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { DigitalValueWithLabel } from '../digital-value-with-label/digital-value-with-label';
import moment from 'moment';
import { SPACER } from '../../constants/spacer';
import { Light } from '../light/light';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { TimePeriod } from '../time-period/time-period';

const BLINK_INTERVAL = 650;

const styles = StyleSheet.create({
  colon: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: scaledValue(48),
  },
  container: {
    flexDirection: 'row',
    gap: SPACER,
  },
  topLight: {
    marginBottom: SPACER,
  },
});

export function Time(props) {
  const { blink, color, size, style, value } = props;

  if (!value) return null;
  const containerStyle = [styles.container, style];

  const hours = moment(value).format('hh');
  const minutes = moment(value).format('mm');
  const period = moment(value).format('A');

  let active = true;

  if (blink) {
    const activeState = useState(true);
    [active] = activeState;

    const setActive = activeState[1];
    const toggleActive = () => setActive(!active);

    useEffect(() => {
      const interval = setInterval(toggleActive, BLINK_INTERVAL);
      return () => clearInterval(interval);
    }, [active]);
  }

  return (
    <View style={containerStyle}>
      <TimePeriod color={color} value={period} />
      <DigitalValueWithLabel value={hours} label="Hour" color={color} size={size} />
      <View style={styles.colon}>
        <Light style={styles.topLight} active={active} color={color} />
        <Light color={color} active={active} />
      </View>
      <DigitalValueWithLabel value={minutes} label="Min" color={color} size={size} />
    </View>
  );
}

Time.propTypes = {
  blink: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  value: PropTypes.string,
};

Time.defaultProps = {
  blink: false,
  color: undefined,
  size: undefined,
  style: undefined,
  value: undefined,
};
