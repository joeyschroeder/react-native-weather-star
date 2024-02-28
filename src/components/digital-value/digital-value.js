import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text } from 'react-native';
import { FONTS } from '../../constants/fonts';
import { COLORS } from '../../constants/colors';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { SPACER } from '../../constants/spacer';
import { BORDER_RADIUS } from '../../constants/border-radius';

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
    opacity: 0.2,
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
  const { color, size, style, value } = props;

  if (!value) return null;

  // eslint-disable-next-line no-restricted-globals
  const isNumber = !isNaN(value);

  const fontFamily = isNumber ? NUMBER_FONT : LETTER_FONT;
  const shadowCharacter = isNumber ? '8' : '~';

  const containerStyle = [styles.container, style];
  const commonTextStyles = { color, fontFamily, fontSize: size };

  const textStyles = [styles.text, commonTextStyles];
  const shadowStyles = [styles.text, commonTextStyles, styles.shadow];

  return (
    <View style={containerStyle}>
      {[...value].map((character, index) => {
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
  size: PropTypes.number,
  color: PropTypes.string,
  value: PropTypes.string,
  style: PropTypes.object,
};

DigitalValue.defaultProps = {
  size: scaledValue(88),
  color: COLORS.WHITE,
  value: undefined,
  style: undefined,
};
