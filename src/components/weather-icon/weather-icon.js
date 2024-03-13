import { View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { scaledValue } from 'utils/scaled-value/scaled-value';
import { withTheme } from 'components/with-theme/with-theme';
import { THEME_DEFAULT_PROP_TYPE } from 'constants/theme-default-prop-type';

function WeatherIconBase(props) {
  const { name, size, style, theme } = props;
  const nameExists = Boolean(name);

  if (!nameExists) return null;

  return (
    <View style={style}>
      <MaterialCommunityIcons color={theme.colors.text} name={name} size={size} />
    </View>
  );
}

WeatherIconBase.propTypes = {
  name: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  theme: PropTypes.object,
};

WeatherIconBase.defaultProps = {
  name: undefined,
  size: scaledValue(16),
  style: undefined,
  theme: THEME_DEFAULT_PROP_TYPE,
};

export const WeatherIcon = withTheme(WeatherIconBase);
