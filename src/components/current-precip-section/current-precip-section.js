import React from 'react';
import { Section } from 'components/section/section';
import { View } from 'react-native';
import { DigitalValueWithLabel } from 'components/digital-value-with-label/digital-value-with-label';
import { SPACER } from 'constants/spacer';
import PropTypes from 'prop-types';
import { withTheme } from 'components/with-theme/with-theme';
import { THEME_DEFAULT_PROP_TYPE } from 'constants/theme-default-prop-type';
import { useSelector } from 'react-redux';
import {
  selectWeatherForecastProbabilityOfPrecipitation,
  selectWeatherForecastRelativeHumidity,
} from 'store/weather/weather-forecast/weather-forecast';

function CurrentPrecipSectionBase(props) {
  const { style, theme } = props;

  const precipProbability = useSelector(selectWeatherForecastProbabilityOfPrecipitation);
  const relativeHumidity = useSelector(selectWeatherForecastRelativeHumidity);

  const precipProbabilityColor = precipProbability > 25 ? theme.colors.primary : theme.colors.text;

  return (
    <Section style={style}>
      <View style={{ gap: SPACER }}>
        <DigitalValueWithLabel
          append="%"
          color={precipProbabilityColor}
          isCountingUp
          isNumber
          label="Rain Chance"
          minChars={3}
          value={precipProbability}
        />
        <DigitalValueWithLabel
          append="%"
          color={theme.colors.text}
          isCountingUp
          isNumber
          label="Rel. Humidity"
          minChars={3}
          value={relativeHumidity}
        />
      </View>
    </Section>
  );
}

CurrentPrecipSectionBase.propTypes = {
  style: PropTypes.object,
  theme: PropTypes.object,
};

CurrentPrecipSectionBase.defaultProps = {
  style: undefined,
  theme: THEME_DEFAULT_PROP_TYPE,
};

export const CurrentPrecipSection = withTheme(CurrentPrecipSectionBase);
