import React from 'react';
import { Section } from '../section/section';
import { View } from 'react-native';
import { DigitalValueWithLabel } from '../digital-value-with-label/digital-value-with-label';
import { SPACER } from '../../constants/spacer';
import PropTypes from 'prop-types';
import { COLORS } from '../../constants/colors';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { DigitalLevel } from '../digital-level/digital-level';

const MAX_MPH = 30;

export function CurrentWindSection(props) {
  const { style, speed, direction } = props;

  const dangerMph = MAX_MPH / 2;
  const speedColor = speed > dangerMph ? COLORS.DANGER : COLORS.WHITE;

  const maxLevels = 25;
  const levelValue = (speed / MAX_MPH) * maxLevels;

  return (
    <Section style={style}>
      <View style={{ gap: SPACER }}>
        <DigitalLevel value={levelValue} maxLevels={maxLevels} />
        <DigitalValueWithLabel label="Wind MPH" value={speed} minChars={2} color={speedColor} size={scaledValue(54)} />
        <DigitalValueWithLabel label="Wind Dir." minChars={3} value={direction} size={scaledValue(37)} />
      </View>
    </Section>
  );
}

CurrentWindSection.propTypes = {
  direction: PropTypes.string,
  speed: PropTypes.number,
  style: PropTypes.object,
};

CurrentWindSection.defaultProps = {
  style: undefined,
  speed: undefined,
  direction: undefined,
};
