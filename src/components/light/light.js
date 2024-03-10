import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { withTheme } from '../with-theme/with-theme';

function LightBase(props) {
  const { isActive, color: colorProp, style, size, theme } = props;

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
  theme: undefined,
};

export const Light = withTheme(LightBase);
