import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { SPACER } from 'constants/spacer';
import { Date } from 'components/date/date';
import { Time } from 'components/time/time';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: SPACER,
  },
});

export function DateTime(props) {
  const { color, isBlinking, size, style, value } = props;

  if (!value) return null;
  const containerStyle = [styles.container, style];

  return (
    <View style={containerStyle}>
      <Date color={color} size={size} value={value} />
      <Time color={color} isBlinking={isBlinking} size={size} value={value} />
    </View>
  );
}

DateTime.propTypes = {
  color: PropTypes.string,
  isBlinking: PropTypes.bool,
  size: PropTypes.number,
  style: PropTypes.object,
  value: PropTypes.string,
};

DateTime.defaultProps = {
  color: undefined,
  isBlinking: undefined,
  size: undefined,
  style: undefined,
  value: undefined,
};
