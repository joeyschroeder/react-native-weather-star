import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';
import { COLORS } from '../../constants/colors';
import { SPACER } from '../../constants/spacer';
import { FONTS } from '../../constants/fonts';
import { scaledValue } from '../../utils/scaled-value/scaled-value';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.TRANSPARENT,
    flexBasis: 0,
    flexGrow: 1,
    paddingVertical: SPACER / 2,
    zIndex: 1,
  },
  text: {
    fontFamily: FONTS.SCRIPT.BOLD,
    fontSize: scaledValue(12),
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

export function RadioSelectorOption(props) {
  const { active, activeColor, onPress, textColor, value } = props;

  const color = active ? textColor : activeColor;
  const textStyles = [styles.text, { color }];

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text ellipsizeMode="tail" numberOfLines={1} style={textStyles}>
          {value}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

RadioSelectorOption.propTypes = {
  active: PropTypes.bool,
  activeColor: PropTypes.string,
  onPress: PropTypes.func,
  textColor: PropTypes.string,
  value: PropTypes.string,
};

RadioSelectorOption.defaultProps = {
  active: false,
  activeColor: COLORS.DANGER,
  onPress: undefined,
  textColor: COLORS.WHITE,
  value: '',
};
