import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { FONTS } from '../../constants/fonts';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { SPACER } from '../../constants/spacer';
import { BORDER_RADIUS } from '../../constants/border-radius';
import { EMPTY_VALUE_LABEL } from '../../constants/empty-value-label';
import { withTheme } from '../with-theme/with-theme';
import { useCountUp } from 'use-count-up';

const NUMBER_FONT = FONTS.MONO.NUMBER.ITALIC;
const LETTER_FONT = FONTS.MONO.LETTER.ITALIC;

const LETTER_EMPTY_CHAR = '~';
const NUMBER_EMPTY_CHAR = '8';
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
      opacity: 0.1,
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
  const { color: colorProp, countUp, maxChars, minChars, size, style, theme, value, valueType } = props;

  const styles = createStyleSheet(props);

  const color = colorProp || theme.colors.text;
  const containerStyle = [styles.container, style];
  // eslint-disable-next-line no-restricted-globals
  const isNumber = valueType === 'number' || !isNaN(value);

  const fontFamily = isNumber ? NUMBER_FONT : LETTER_FONT;
  const shadowChar = isNumber ? NUMBER_EMPTY_CHAR : LETTER_EMPTY_CHAR;
  const commonTextStyles = { color, fontFamily, fontSize: size };

  const textStyle = [styles.text, commonTextStyles];

  let normalizedValue = value;
  if (isNumber && countUp) {
    const { value: countUpValue } = useCountUp({
      isCounting: true,
      end: value,
      duration: 1,
    });

    normalizedValue = countUpValue.toString();
  } else if (isNumber) {
    normalizedValue = value.toString();
  }

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

DigitalValueBase.propTypes = {
  color: PropTypes.string,
  countUp: PropTypes.bool,
  maxChars: PropTypes.number,
  minChars: PropTypes.number,
  size: PropTypes.number,
  style: PropTypes.object,
  theme: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  valueType: PropTypes.oneOf(['letter', 'number']),
};

DigitalValueBase.defaultProps = {
  color: undefined,
  countUp: false,
  maxChars: undefined,
  minChars: 2,
  size: scaledValue(110),
  style: undefined,
  theme: undefined,
  value: EMPTY_VALUE_LABEL,
  valueType: undefined,
};

export const DigitalValue = withTheme(DigitalValueBase);
