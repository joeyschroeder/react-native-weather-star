import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';
import { COLORS } from 'constants/colors';
import { SPACER } from 'constants/spacer';
import { FONTS } from 'constants/fonts';
import { scaledValue } from 'utils/scaled-value/scaled-value';
import { withTheme } from 'components/with-theme/with-theme';
import { THEME_DEFAULT_PROP_TYPE } from 'constants/theme-default-prop-type';

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
  const { activeColor: activeColorProp, isActive, onPress, textColor: textColorProp, theme, value } = props;

  const activeColor = activeColorProp || theme.colors.danger;
  const textColor = textColorProp || theme.colors.text;

  const color = isActive ? textColor : activeColor;
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
  activeColor: PropTypes.string,
  isActive: PropTypes.bool,
  onPress: PropTypes.func,
  textColor: PropTypes.string,
  theme: PropTypes.object,
  value: PropTypes.string,
};

RadioSelectorOptionBase.defaultProps = {
  activeColor: COLORS.DANGER,
  isActive: false,
  onPress: undefined,
  textColor: undefined,
  theme: THEME_DEFAULT_PROP_TYPE,
  value: '',
};

export const RadioSelectorOption = withTheme(RadioSelectorOptionBase);
