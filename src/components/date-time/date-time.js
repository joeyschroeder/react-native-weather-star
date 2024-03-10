import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { SPACER } from '../../constants/spacer';
import { Date } from '../date/date';
import { Time } from '../time/time';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    flexDirection: 'row',
    gap: SPACER,
  },
});

export function DateTime(props) {
  const { blink, color, style, value, size } = props;

  if (!value) return null;
  const containerStyle = [styles.container, style];

  return (
    <View style={containerStyle}>
      <Date color={color} size={size} value={value} />
      <Time blink={blink} color={color} size={size} value={value} />
    </View>
  );
}

DateTime.propTypes = {
  blink: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  value: PropTypes.string,
};

DateTime.defaultProps = {
  blink: undefined,
  color: undefined,
  size: undefined,
  style: undefined,
  value: undefined,
};
