import React from 'react';
import { Section } from 'components/section/section';
import { View } from 'react-native';
import { DigitalValueWithLabel } from 'components/digital-value-with-label/digital-value-with-label';
import { SPACER } from 'constants/spacer';
import PropTypes from 'prop-types';
import { scaledValue } from 'utils/scaled-value/scaled-value';
import { DigitalLevel } from 'components/digital-level/digital-level';
import { withTheme } from 'components/with-theme/with-theme';
import { THEME_DEFAULT_PROP_TYPE } from 'constants/theme-default-prop-type';

const MAX_MPH = 30;

function CurrentWindSectionBase(props) {
  const { direction, speed, style, theme } = props;

  const dangerMph = MAX_MPH / 2;
  const speedColor = speed > dangerMph ? theme.colors.danger : theme.colors.text;

  const maxLevels = 24;
  const levelValue = (speed / MAX_MPH) * maxLevels;

  return (
    <Section style={style}>
      <View style={{ gap: SPACER }}>
        <DigitalLevel maxLevels={maxLevels} value={levelValue} />
        <DigitalValueWithLabel
          color={speedColor}
          isCountingUp
          isNumber
          label="Wind MPH"
          minChars={2}
          size={scaledValue(54)}
          value={speed}
        />
        <DigitalValueWithLabel label="Wind Dir." minChars={3} size={scaledValue(37)} value={direction} />
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
  theme: THEME_DEFAULT_PROP_TYPE,
};

export const CurrentWindSection = withTheme(CurrentWindSectionBase);
