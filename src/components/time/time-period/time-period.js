import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { SPACER } from '../../../constants/spacer';
import { Light } from '../../light/light';
import { Label } from '../../label/label';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  label: {
    marginBottom: SPACER / 4,
  },
  light: {
    marginBottom: SPACER / 2,
  },
});

export function TimePeriod(props) {
  const { color, style, value } = props;

  if (!value) return null;
  const containerStyle = [styles.container, style];
  const amActive = value === 'AM';

  return (
    <View style={containerStyle}>
      <Label style={styles.label} value="AM" />
      <Light color={color} isActive={amActive} style={styles.light} />
      <Label style={styles.label} value="PM" />
      <Light color={color} isActive={!amActive} style={styles.light} />
    </View>
  );
}

TimePeriod.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
};

TimePeriod.defaultProps = {
  color: undefined,
  style: undefined,
  value: undefined,
};
