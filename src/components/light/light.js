import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { withTheme } from '../with-theme/with-theme';

const styles = StyleSheet.create({
  light: {
    borderRadius: '50%',
  },
});

function LightBase(props) {
  const { active, color: colorProp, style, size, theme } = props;

  const color = colorProp || theme.text;
  const backgroundColor = active ? color : theme.black_type;
  const lightStyles = [styles.light, { backgroundColor, width: size, height: size }];

  return (
    <View style={style}>
      <View style={lightStyles} />
    </View>
  );
}

LightBase.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  theme: PropTypes.object,
};

LightBase.defaultProps = {
  active: true,
  color: undefined,
  size: scaledValue(14),
  style: undefined,
  theme: undefined,
};

export const Light = withTheme(LightBase);
