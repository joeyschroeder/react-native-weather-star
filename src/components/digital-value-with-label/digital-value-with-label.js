import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { SPACER } from '../../constants/spacer';
import { DigitalValue } from '../digital-value/digital-value';
import { Label } from '../label/label';
import { FONTS } from '../../constants/fonts';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { withTheme } from '../with-theme/with-theme';

function createStyleSheet(theme) {
  return StyleSheet.create({
    append: {
      color: theme.colors.text,
      fontFamily: FONTS.SANS_SERIF.BOLD,
      fontSize: scaledValue(30),
      marginLeft: SPACER / 2,
    },
    container: {
      alignItems: 'center',
    },
    horizontal: {
      flexDirection: 'row',
      gap: SPACER,
    },
    valueContainer: {
      flexDirection: 'row',
    },
  });
}

function DigitalValueWithLabelBase(props) {
  const { append, color, label, size, style, value, horizontal, minChars, theme } = props;

  const styles = createStyleSheet(theme);
  const appendExists = Boolean(append);
  const containerStyle = [styles.container, horizontal && styles.horizontal, style];

  const labelStyle = { marginBottom: horizontal ? undefined : SPACER };

  return (
    <View style={containerStyle}>
      <Label style={labelStyle} value={label} />
      <View style={styles.valueContainer}>
        <DigitalValue color={color} size={size} value={value} minChars={minChars} />
        {appendExists && <Text style={styles.append}>{append}</Text>}
      </View>
    </View>
  );
}

DigitalValueWithLabelBase.propTypes = {
  append: PropTypes.string,
  color: PropTypes.string,
  horizontal: PropTypes.bool,
  label: PropTypes.string,
  minChars: PropTypes.number,
  size: PropTypes.number,
  style: PropTypes.object,
  theme: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DigitalValueWithLabelBase.defaultProps = {
  append: undefined,
  color: undefined,
  horizontal: false,
  label: undefined,
  minChars: undefined,
  size: undefined,
  style: undefined,
  theme: undefined,
  value: undefined,
};

export const DigitalValueWithLabel = withTheme(DigitalValueWithLabelBase);
