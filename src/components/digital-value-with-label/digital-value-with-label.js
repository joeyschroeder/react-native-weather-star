import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { SPACER } from '../../constants/spacer';
import { COLORS } from '../../constants/colors';
import { DigitalValue } from '../digital-value/digital-value';
import { Label } from '../label/label';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  label: {
    marginBottom: SPACER,
  },
});

export function DigitalValueWithLabel(props) {
  const { color, label, style, value } = props;

  if (!value) return null;
  const containerStyle = [styles.container, style];

  return (
    <View style={containerStyle}>
      <Label
        backgroundColor={COLORS.DANGER}
        style={styles.label}
        value={label}
      />
      <DigitalValue color={color} value={value} />
    </View>
  );
}

DigitalValueWithLabel.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  style: PropTypes.object,
  value: PropTypes.string,
};

DigitalValueWithLabel.defaultProps = {
  color: undefined,
  label: undefined,
  style: undefined,
  value: undefined,
};
