import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { SPACER } from '../../constants/spacer';
import { FONTS } from '../../constants/fonts';
import { COLORS } from '../../constants/colors';
import { scaledValue } from '../../utils/scaled-value/scaled-value';

const styles = StyleSheet.create({
  container: {
    flex: 0,
    // paddingHorizontal: SPACER / 2,
    // paddingVertical: SPACER / 4,
  },
  text: {
    color: COLORS.WHITE,
    // fontFamily: FONTS.SCRIPT.BOLD,
    fontFamily: FONTS.SANS_SERIF.BOLD,
    fontSize: scaledValue(20),
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export function Label(props) {
  const { backgroundColor, style, value } = props;

  if (!value) return null;
  const containerStyle = [styles.container, style];
  // const containerStyle = [styles.container, style, { backgroundColor }];

  return (
    <View style={containerStyle}>
      <Text style={styles.text}>{value}</Text>
    </View>
  );
}

Label.propTypes = {
  backgroundColor: PropTypes.string,
  value: PropTypes.string,
  style: PropTypes.object,
};

Label.defaultProps = {
  backgroundColor: COLORS.BLACK_TYPE,
  value: undefined,
  style: undefined,
};
