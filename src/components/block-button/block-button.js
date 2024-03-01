import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';
import { BORDER_RADIUS } from '../../constants/border-radius';
import { SPACER } from '../../constants/spacer';
import { FONTS } from '../../constants/fonts';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { COLORS } from '../../constants/colors';

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    alignSelf: 'stretch',
    borderRadius: BORDER_RADIUS,
    padding: SPACER,
  },
  container: {
    alignSelf: 'stretch',
  },
  text: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SCRIPT.BOLD,
    fontSize: scaledValue(18),
    textAlign: 'center',
  },
});

export function BlockButton(props) {
  const { style, label, onPress, color } = props;

  const containerStyles = [styles.container, style];
  const buttonStyle = [styles.button, { backgroundColor: color }];

  return (
    <View style={containerStyles}>
      <TouchableWithoutFeedback onPress={onPress}>
        <View style={buttonStyle}>
          <Text style={styles.text}>{label.toUpperCase()}</Text>
        </View>
      </TouchableWithoutFeedback>
    </View>
  );
}

BlockButton.propTypes = {
  label: PropTypes.string,
  color: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object,
};

BlockButton.defaultProps = {
  label: 'Submit',
  color: COLORS.BLACK,
  onPress: undefined,
  style: undefined,
};
