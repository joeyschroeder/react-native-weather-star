import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { SPACER } from '../../constants/spacer';
import { DigitalValue } from '../digital-value/digital-value';
import { Label } from '../label/label';
import { FONTS } from '../../constants/fonts';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { withTheme } from '../with-theme/with-theme';

function createStyleSheet({ theme }) {
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
  const { append, horizontal, label, style, ...other } = props;

  const styles = createStyleSheet(props);
  const appendExists = Boolean(append);
  const containerStyle = [styles.container, horizontal && styles.horizontal, style];

  const labelStyle = { marginBottom: horizontal ? undefined : SPACER / 2 };

  return (
    <View style={containerStyle}>
      <Label style={labelStyle} value={label} />
      <View style={styles.valueContainer}>
        {/* eslint-disable-next-line react/jsx-props-no-spreading */}
        <DigitalValue {...other} />
        {appendExists && <Text style={styles.append}>{append}</Text>}
      </View>
    </View>
  );
}

DigitalValueWithLabelBase.propTypes = {
  append: PropTypes.string,
  horizontal: PropTypes.bool,
  label: PropTypes.string,
  style: PropTypes.object,
};

DigitalValueWithLabelBase.defaultProps = {
  append: undefined,
  horizontal: false,
  label: undefined,
  style: undefined,
};

export const DigitalValueWithLabel = withTheme(DigitalValueWithLabelBase);
