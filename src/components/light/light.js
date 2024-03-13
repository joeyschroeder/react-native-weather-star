import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { scaledValue } from 'utils/scaled-value/scaled-value';
import { withTheme } from 'components/with-theme/with-theme';
import { THEME_DEFAULT_PROP_TYPE } from 'constants/theme-default-prop-type';

function LightBase(props) {
  const { color: colorProp, isActive, size, style, theme } = props;

  const color = colorProp || theme.colors.text;

  const backgroundColor = isActive ? color : theme.colors.valueBackground;
  const borderRadius = size / 2;

  const lightStyles = { backgroundColor, width: size, height: size, borderRadius };

  return (
    <View style={style}>
      <View style={lightStyles} />
    </View>
  );
}

LightBase.propTypes = {
  color: PropTypes.string,
  isActive: PropTypes.bool,
  size: PropTypes.number,
  style: PropTypes.object,
  theme: PropTypes.object,
};

LightBase.defaultProps = {
  color: undefined,
  isActive: true,
  size: scaledValue(14),
  style: undefined,
  theme: THEME_DEFAULT_PROP_TYPE,
};

export const Light = withTheme(LightBase);
