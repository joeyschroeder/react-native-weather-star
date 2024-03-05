import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
// import { SPACER } from '../../constants/spacer';
import { FONTS } from '../../constants/fonts';
import { COLORS } from '../../constants/colors';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { withTheme } from '../with-theme/with-theme';

function createStyleSheet(theme) {
  return StyleSheet.create({
    container: {
      flex: 0,
      // paddingHorizontal: SPACER / 2,
      // paddingVertical: SPACER / 4,
    },
    text: {
      color: theme.text,
      // fontFamily: FONTS.SCRIPT.BOLD,
      fontFamily: FONTS.SANS_SERIF.BOLD,
      fontSize: scaledValue(20),
      textAlign: 'center',
      textTransform: 'uppercase',
    },
  });
}

function LabelBase(props) {
  const { backgroundColor, style, value, theme } = props;

  if (!value) return null;

  const styles = createStyleSheet(theme);
  const containerStyle = [styles.container, style];
  // const containerStyle = [styles.container, style, { backgroundColor }];

  return (
    <View style={containerStyle}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

LabelBase.propTypes = {
  backgroundColor: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.object,
  value: PropTypes.string,
};

LabelBase.defaultProps = {
  backgroundColor: COLORS.BLACK_TYPE,
  style: undefined,
  theme: undefined,
  value: undefined,
};

export const Label = withTheme(LabelBase);
