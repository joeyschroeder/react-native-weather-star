import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { FONTS } from '../../constants/fonts';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { withTheme } from '../with-theme/with-theme';

function createStyleSheet({ theme }) {
  return StyleSheet.create({
    text: {
      color: theme.colors.text,
      fontFamily: FONTS.SANS_SERIF.BOLD,
      fontSize: scaledValue(20),
      textAlign: 'center',
      textTransform: 'uppercase',
    },
  });
}

function LabelBase(props) {
  const { style, value } = props;

  if (!value) return null;
  const styles = createStyleSheet(props);

  return (
    <View style={style}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

LabelBase.propTypes = {
  style: PropTypes.object,
  value: PropTypes.string,
};

LabelBase.defaultProps = {
  style: undefined,
  value: undefined,
};

export const Label = withTheme(LabelBase);
