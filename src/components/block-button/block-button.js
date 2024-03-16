import { StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native';

import PropTypes from 'prop-types';
import React from 'react';
import { BORDER_RADIUS } from 'constants/border-radius';
import { SPACER } from 'constants/spacer';
import { FONTS } from 'constants/fonts';
import { scaledValue } from 'utils/scaled-value/scaled-value';
import { withTheme } from 'components/with-theme/with-theme';
import { THEME_DEFAULT_PROP_TYPE } from 'constants/theme-default-prop-type';

function createStyleSheet({ theme = THEME_DEFAULT_PROP_TYPE }) {
  return StyleSheet.create({
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
      color: theme.dark ? theme.colors.text : theme.colors.section,
      fontFamily: FONTS.SANS_SERIF.BOLD,
      fontSize: scaledValue(18),
      textAlign: 'center',
    },
  });
}

function BlockButtonBase(props) {
  const { color, label, onPress, style, theme } = props;

  const styles = createStyleSheet({ theme });
  const backgroundColor = color || theme.colors.primary;

  const containerStyles = [styles.container, style];
  const buttonStyle = [styles.button, { backgroundColor }];

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

BlockButtonBase.propTypes = {
  color: PropTypes.string,
  label: PropTypes.string,
  onPress: PropTypes.func,
  style: PropTypes.object,
  theme: PropTypes.object,
};

BlockButtonBase.defaultProps = {
  color: undefined,
  label: 'Submit',
  onPress: undefined,
  style: undefined,
  theme: THEME_DEFAULT_PROP_TYPE,
};

export const BlockButton = withTheme(BlockButtonBase);
