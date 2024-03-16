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
import { useSelector } from 'react-redux';
import {
  selectWeatherForecastWindDirection,
  selectWeatherForecastWindSpeedMph,
} from 'store/weather/weather-forecast/weather-forecast';

const MAX_MPH = 30;

function CurrentWindSectionBase(props) {
  const { style, theme } = props;

  const speed = useSelector(selectWeatherForecastWindSpeedMph);
  const direction = useSelector(selectWeatherForecastWindDirection);

  const dangerMph = MAX_MPH / 2;
  const speedColor = speed > dangerMph ? theme.colors.primary : theme.colors.text;

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
  style: PropTypes.object,
  theme: PropTypes.object,
};

CurrentWindSectionBase.defaultProps = {
  style: undefined,
  theme: THEME_DEFAULT_PROP_TYPE,
};

export const CurrentWindSection = withTheme(CurrentWindSectionBase);
