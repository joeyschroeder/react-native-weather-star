import { Pressable, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { WeatherIcon } from '../weather-icon/weather-icon';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { AnimationSpin } from '../animation-spin/animation-spin';
import { withTheme } from '../with-theme/with-theme';
import { MaterialIcons } from '@expo/vector-icons';

function HeaderRefreshButtonBase(props) {
  const { isLoading, onPress, style, theme, hasError } = props;
  const iconSize = scaledValue(36);

  const icon = hasError ? (
    <MaterialIcons name="error" size={iconSize} color={theme.colors.danger} />
  ) : (
    <WeatherIcon name="radar" size={iconSize} />
  );

  return (
    <View style={style}>
      <Pressable onPress={onPress}>
        <AnimationSpin animate={isLoading} loop>
          {icon}
        </AnimationSpin>
      </Pressable>
    </View>
  );
}

HeaderRefreshButtonBase.propTypes = {
  hasError: PropTypes.bool,
  isLoading: PropTypes.bool,
  onPress: PropTypes.func,
  style: PropTypes.object,
  theme: PropTypes.object,
};

HeaderRefreshButtonBase.defaultProps = {
  hasError: false,
  isLoading: false,
  onPress: undefined,
  style: undefined,
  theme: undefined,
};

export const HeaderRefreshButton = withTheme(HeaderRefreshButtonBase);
