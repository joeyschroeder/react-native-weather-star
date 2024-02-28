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
  const { color, style, value } = props;

  if (!value) return null;
  const containerStyle = [styles.container, style];

  return (
    <View style={containerStyle}>
      <Date value={value} color={color} />
      <Time value={value} color={color} />
    </View>
  );
}

DateTime.propTypes = {
  color: PropTypes.string,
  value: PropTypes.string,
  style: PropTypes.object,
};

DateTime.defaultProps = {
  color: undefined,
  value: undefined,
  style: undefined,
};
