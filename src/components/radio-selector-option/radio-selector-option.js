import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';
import { COLORS } from '../../constants/colors';
import { SPACER } from '../../constants/spacer';
import { FONTS } from '../../constants/fonts';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { withTheme } from '../with-theme/with-theme';

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLORS.TRANSPARENT,
    flexBasis: 0,
    flexGrow: 1,
    paddingVertical: SPACER / 2,
    zIndex: 1,
  },
  text: {
    fontFamily: FONTS.SANS_SERIF.BOLD,
    fontSize: scaledValue(12),
    textAlign: 'center',
    textTransform: 'uppercase',
  },
});

function RadioSelectorOptionBase(props) {
  const { active, activeColor: activeColorProp, onPress, textColor: textColorProp, value, theme } = props;

  const activeColor = activeColorProp || theme.colors.danger;
  const textColor = textColorProp || theme.colors.text;

  const color = active ? textColor : activeColor;
  const textStyles = [styles.text, { color }];

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.button}>
        <Text ellipsisMode="tail" numberOfLines={1} style={textStyles}>
          {value}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
}

RadioSelectorOptionBase.propTypes = {
  active: PropTypes.bool,
  activeColor: PropTypes.string,
  onPress: PropTypes.func,
  textColor: PropTypes.string,
  theme: PropTypes.object,
  value: PropTypes.string,
};

RadioSelectorOptionBase.defaultProps = {
  active: false,
  activeColor: COLORS.DANGER,
  onPress: undefined,
  textColor: COLORS.WHITE,
  theme: undefined,
  value: '',
};

export const RadioSelectorOption = withTheme(RadioSelectorOptionBase);
