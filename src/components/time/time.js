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
  const { color, isBlinking, size, style, value } = props;

  if (!value) return null;
  const containerStyle = [styles.container, style];

  const hours = moment(value).format('hh');
  const minutes = moment(value).format('mm');
  const period = moment(value).format('A');

  let active = true;

  if (isBlinking) {
    // eslint-disable-next-line react/hook-use-state
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
      <DigitalValueWithLabel color={color} label="Hour" size={size} value={hours} />
      <View style={styles.colon}>
        <Light color={color} isActive={active} style={styles.topLight} />
        <Light color={color} isActive={active} />
      </View>
      <DigitalValueWithLabel color={color} label="Min" size={size} value={minutes} />
    </View>
  );
}

Time.propTypes = {
  color: PropTypes.string,
  isBlinking: PropTypes.bool,
  size: PropTypes.number,
  style: PropTypes.object,
  value: PropTypes.string,
};

Time.defaultProps = {
  color: undefined,
  isBlinking: false,
  size: undefined,
  style: undefined,
  value: undefined,
};
