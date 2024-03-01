import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { SPACER } from '../../constants/spacer';
import { COLORS } from '../../constants/colors';
import { DigitalValue } from '../digital-value/digital-value';
import { Label } from '../label/label';
import { FONTS } from '../../constants/fonts';
import { scaledValue } from '../../utils/scaled-value/scaled-value';

const styles = StyleSheet.create({
  append: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SANS_SERIF.BOLD,
    fontSize: scaledValue(30),
    marginLeft: SPACER / 2,
  },
  container: {
    alignItems: 'center',
  },
  label: {
    marginBottom: SPACER,
  },
  valueContainer: {
    flexDirection: 'row',
  },
});

export function DigitalValueWithLabel(props) {
  const { append, color, label, size, style, value } = props;

  if (!value) return null;

  const appendExists = Boolean(append);
  const containerStyle = [styles.container, style];

  return (
    <View style={containerStyle}>
      <Label
        backgroundColor={COLORS.DANGER}
        style={styles.label}
        value={label}
      />
      <View style={styles.valueContainer}>
        <DigitalValue color={color} size={size} value={value} />
        {appendExists && <Text style={styles.append}>{append}</Text>}
      </View>
    </View>
  );
}

DigitalValueWithLabel.propTypes = {
  append: PropTypes.string,
  color: PropTypes.string,
  label: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  value: PropTypes.string,
};

DigitalValueWithLabel.defaultProps = {
  append: undefined,
  color: undefined,
  label: undefined,
  size: undefined,
  style: undefined,
  value: undefined,
};
