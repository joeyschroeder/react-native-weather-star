import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { FONTS } from '../../constants/fonts';
import { COLORS } from '../../constants/colors';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { SPACER } from '../../constants/spacer';
import { BORDER_RADIUS } from '../../constants/border-radius';
import { EMPTY_VALUE_LABEL } from '../../constants/emtpy-value-label';

const NUMBER_FONT = FONTS.MONO.NUMBER.ITALIC;
const LETTER_FONT = FONTS.MONO.LETTER.ITALIC;

const LETTER_EMPTY_CHAR = '~';
const NUMBER_EMPTY_CHAR = '8';
const PADDING_CHAR = '_';
const ZERO_SPACE_CHARS = ['.', ':'];

const SPACE_CHAR = PADDING_CHAR;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK_TYPE,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    padding: SPACER / 2,
  },
  padding: {
    opacity: 0,
  },
  shadow: {
    opacity: 0.1,
    position: 'absolute',
  },
  text: {
    color: COLORS.WHITE,
    textTransform: 'uppercase',
    zIndex: 1,
  },
});

export function DigitalValue(props) {
  const { color, maxChars, minChars, size, style, value, valueType } = props;

  const containerStyle = [styles.container, style];
  // eslint-disable-next-line no-restricted-globals
  const isNumber = valueType === 'number' || !isNaN(value);

  const fontFamily = isNumber ? NUMBER_FONT : LETTER_FONT;
  const shadowChar = isNumber ? NUMBER_EMPTY_CHAR : LETTER_EMPTY_CHAR;
  const commonTextStyles = { color, fontFamily, fontSize: size };

  const textStyle = [styles.text, commonTextStyles];

  let normalizedValue = isNumber ? value.toString() : value;
  normalizedValue = normalizedValue.replace(/\s/g, SPACE_CHAR);
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

DigitalValue.propTypes = {
  color: PropTypes.string,
  maxChars: PropTypes.number,
  minChars: PropTypes.number,
  size: PropTypes.number,
  style: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  valueType: PropTypes.oneOf(['number', 'letter']),
};

DigitalValue.defaultProps = {
  color: COLORS.WHITE,
  maxChars: undefined,
  minChars: 2,
  size: scaledValue(88),
  style: undefined,
  value: EMPTY_VALUE_LABEL,
  valueType: undefined,
};
