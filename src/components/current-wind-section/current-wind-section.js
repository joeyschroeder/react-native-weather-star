import React from 'react';
import { Section } from '../section/section';
import { View } from 'react-native';
import { DigitalValueWithLabel } from '../digital-value-with-label/digital-value-with-label';
import { SPACER } from '../../constants/spacer';
import PropTypes from 'prop-types';
import { COLORS } from '../../constants/colors';
import { scaledValue } from '../../utils/scaled-value/scaled-value';

export function CurrentWindSection(props) {
  const { style, speed, direction } = props;

  const speedColor = speed > 25 ? COLORS.DANGER : COLORS.WHITE;

  return (
    <Section style={style}>
      <View style={{ gap: SPACER }}>
        <DigitalValueWithLabel label="Wind MPH" value={speed} minChars={2} color={speedColor} />
        <DigitalValueWithLabel label="Wind Dir." minChars={3} value={direction} size={scaledValue(60)} />
      </View>
    </Section>
  );
}

CurrentWindSection.propTypes = {
  style: PropTypes.object,
  speed: PropTypes.number,
  direction: PropTypes.string,
};

CurrentWindSection.defaultProps = {
  style: undefined,
  speed: undefined,
  direction: undefined,
};
