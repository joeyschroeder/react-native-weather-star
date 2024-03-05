import React from 'react';
import { Section } from '../section/section';
import { View } from 'react-native';
import { DigitalValueWithLabel } from '../digital-value-with-label/digital-value-with-label';
import { SPACER } from '../../constants/spacer';
import PropTypes from 'prop-types';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { DigitalLevel } from '../digital-level/digital-level';
import { withTheme } from '../with-theme/with-theme';

const MAX_MPH = 30;

function CurrentWindSectionBase(props) {
  const { style, speed, direction, theme } = props;

  const dangerMph = MAX_MPH / 2;
  const speedColor = speed > dangerMph ? theme.colors.danger : theme.colors.text;

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

CurrentWindSectionBase.propTypes = {
  direction: PropTypes.string,
  speed: PropTypes.number,
  style: PropTypes.object,
  theme: PropTypes.object,
};

CurrentWindSectionBase.defaultProps = {
  direction: undefined,
  speed: undefined,
  style: undefined,
  theme: undefined,
};

export const CurrentWindSection = withTheme(CurrentWindSectionBase);
