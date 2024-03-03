import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { scaledValue } from '../../utils/scaled-value/scaled-value';

const styles = StyleSheet.create({
  light: {
    borderRadius: '50%',
  },
});

export function Light(props) {
  const { active, color, style, size } = props;

  const backgroundColor = active ? color : COLORS.BLACK_TYPE;
  const lightStyles = [styles.light, { backgroundColor, width: size, height: size }];

  return (
    <View style={style}>
      <View style={lightStyles} />
    </View>
  );
}

Light.propTypes = {
  active: PropTypes.bool,
  color: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
};

Light.defaultProps = {
  active: true,
  color: COLORS.WHITE,
  size: scaledValue(14),
  style: undefined,
};
