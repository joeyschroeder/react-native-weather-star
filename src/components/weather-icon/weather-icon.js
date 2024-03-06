import { View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { withTheme } from '../with-theme/with-theme';

function WeatherIconBase(props) {
  const { name, style, size, theme } = props;
  const nameExists = Boolean(name);

  if (!nameExists) return null;

  return (
    <View style={style}>
      <MaterialCommunityIcons name={name} size={size} color={theme.colors.text} />
    </View>
  );
}

WeatherIconBase.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
};

WeatherIconBase.defaultProps = {
  name: undefined,
  size: scaledValue(16),
  style: undefined,
};

export const WeatherIcon = withTheme(WeatherIconBase);
