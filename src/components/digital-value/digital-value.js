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

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.BLACK_TYPE,
    borderRadius: BORDER_RADIUS,
    flexDirection: 'row',
    padding: SPACER / 2,
  },
  shadow: {
    opacity: 0.1,
    position: 'absolute',
  },
  text: {
    color: COLORS.WHITE,
    fontFamily: FONTS.MONO.NUMBER.ITALIC,
    textTransform: 'uppercase',
    zIndex: 1,
  },
});

export function DigitalValue(props) {
  const { color, size, style, value, minChars } = props;

  // eslint-disable-next-line no-restricted-globals
  const isNumber = !isNaN(value);
  const valueFormatted = isNumber ? value.toString() : value;

  const fontFamily = isNumber ? NUMBER_FONT : LETTER_FONT;
  const shadowCharacter = isNumber ? '8' : '~';

  const containerStyle = [styles.container, style];
  const commonTextStyles = { color, fontFamily, fontSize: size };

  const textStyles = [styles.text, commonTextStyles];
  const shadowStyles = [styles.text, commonTextStyles, styles.shadow];

  const valueLength = valueFormatted.length;
  const padding = minChars && valueLength < minChars ? minChars - valueLength : 0;
  const paddingString = '0'.repeat(padding);

  return (
    <View style={containerStyle}>
      {[...paddingString].map((character, index) => {
        const key = `${index}`;
        const padTextStyle = [shadowStyles, { position: 'relative' }];

        return (
          <View key={key}>
            <Text style={padTextStyle}>{shadowCharacter}</Text>
          </View>
        );
      })}
      {[...valueFormatted].map((character, index) => {
        const key = `${character}-${index}`;

        return (
          <View key={key}>
            <Text style={textStyles}>{character}</Text>
            <Text style={shadowStyles}>{shadowCharacter}</Text>
          </View>
        );
      })}
    </View>
  );
}

DigitalValue.propTypes = {
  color: PropTypes.string,
  minChars: PropTypes.number,
  size: PropTypes.number,
  style: PropTypes.object,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

DigitalValue.defaultProps = {
  color: COLORS.WHITE,
  minChars: undefined,
  size: scaledValue(88),
  style: undefined,
  value: EMPTY_VALUE_LABEL,
};
