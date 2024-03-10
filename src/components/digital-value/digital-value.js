import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { SPACER } from '../../constants/spacer';
import { BORDER_RADIUS } from '../../constants/border-radius';
import { EMPTY_VALUE_LABEL } from '../../constants/empty-value-label';
import { withTheme } from '../with-theme/with-theme';
import { FONTS } from '../../constants/fonts';

const PADDING_CHAR = '_';
const ZERO_SPACE_CHARS = ['.', ':'];

const SPACE_CHAR = PADDING_CHAR;

function createStyleSheet({ theme }) {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.valueBackground,
      borderRadius: BORDER_RADIUS,
      flexDirection: 'row',
      padding: SPACER / 2,
    },
    padding: {
      opacity: 0,
    },
    shadow: {
      opacity: 0.07,
      position: 'absolute',
    },
    text: {
      color: theme.colors.text,
      textTransform: 'uppercase',
      zIndex: 1,
    },
  });
}

function DigitalValueBase(props) {
  const { color: colorProp, fontFamily, maxChars, minChars, shadowChar, size, style, theme, value } = props;

  const styles = createStyleSheet(props);

  const color = colorProp || theme.colors.text;
  const containerStyle = [styles.container, style];

  const commonTextStyles = { color, fontFamily, fontSize: size };
  const textStyle = [styles.text, commonTextStyles];

  let normalizedValue = value.replace(/\s/g, SPACE_CHAR);

  const valueLength = normalizedValue.length;
  if (maxChars && valueLength > maxChars) normalizedValue = normalizedValue.substring(0, maxChars);
  if (minChars && valueLength < minChars) normalizedValue = normalizedValue.padStart(minChars, PADDING_CHAR);

  return (
    <View style={containerStyle}>
      {[...normalizedValue].map((char, index) => {
        const key = `${char}-${index}`;

        const shadowStyle = [styles.shadow, textStyle];
        const shadow = ZERO_SPACE_CHARS.includes(char) ? ' ' : shadowChar;

        const isPadding = char === PADDING_CHAR;
        const primaryStyle = isPadding ? [styles.padding, textStyle] : textStyle;

        return (
          <View key={key}>
            <Text style={primaryStyle}>{char}</Text>
            <Text style={shadowStyle}>{shadow}</Text>
          </View>
        );
      })}
    </View>
  );
}

DigitalValueBase.propTypes = {
  color: PropTypes.string,
  fontFamily: PropTypes.string,
  maxChars: PropTypes.number,
  minChars: PropTypes.number,
  shadowChar: PropTypes.string,
  size: PropTypes.number,
  style: PropTypes.object,
  theme: PropTypes.object,
  value: PropTypes.string,
};

DigitalValueBase.defaultProps = {
  color: undefined,
  fontFamily: FONTS.MONO.LETTER.ITALIC,
  maxChars: undefined,
  minChars: 2,
  shadowChar: '~',
  size: scaledValue(110),
  style: undefined,
  theme: undefined,
  value: EMPTY_VALUE_LABEL,
};

export const DigitalValue = withTheme(DigitalValueBase);
