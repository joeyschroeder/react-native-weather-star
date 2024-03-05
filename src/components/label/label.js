import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { FONTS } from '../../constants/fonts';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { withTheme } from '../with-theme/with-theme';

function createStyleSheet(theme) {
  return StyleSheet.create({
    text: {
      color: theme.text,
      fontFamily: FONTS.SANS_SERIF.BOLD,
      fontSize: scaledValue(20),
      textAlign: 'center',
      textTransform: 'uppercase',
    },
  });
}

function LabelBase(props) {
  const { style, value, theme } = props;

  if (!value) return null;
  const styles = createStyleSheet(theme);

  return (
    <View style={style}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

LabelBase.propTypes = {
  style: PropTypes.object,
  theme: PropTypes.object,
  value: PropTypes.string,
};

LabelBase.defaultProps = {
  style: undefined,
  theme: undefined,
  value: undefined,
};

export const Label = withTheme(LabelBase);
