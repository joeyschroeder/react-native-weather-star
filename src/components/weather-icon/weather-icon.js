import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  icon: {
    color: COLORS.WHITE,
  },
});

export function WeatherIcon(props) {
  const { name, style, size } = props;
  const nameExists = Boolean(name);

  if (!nameExists) return null;

  return (
    <View style={style}>
      <MaterialCommunityIcons name={name} size={size} style={styles.icon} />
    </View>
  );
}

WeatherIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
};

WeatherIcon.defaultProps = {
  name: undefined,
  size: scaledValue(16),
  style: undefined,
};
