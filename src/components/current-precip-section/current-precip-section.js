import React from 'react';
import { Section } from 'components/section/section';
import { View } from 'react-native';
import { DigitalValueWithLabel } from 'components/digital-value-with-label/digital-value-with-label';
import { SPACER } from 'constants/spacer';
import PropTypes from 'prop-types';
import { withTheme } from 'components/with-theme/with-theme';
import { useSelector } from 'react-redux';
import {
  selectWeatherForecastProbabilityOfPrecipitation,
  selectWeatherForecastRelativeHumidity,
} from 'store/weather/weather-forecast/weather-forecast';

function CurrentPrecipSectionBase(props) {
  const { style } = props;

  const precipProbability = useSelector(selectWeatherForecastProbabilityOfPrecipitation);
  const relativeHumidity = useSelector(selectWeatherForecastRelativeHumidity);

  return (
    <Section style={style}>
      <View style={{ gap: SPACER }}>
        <DigitalValueWithLabel
          append="%"
          isCountingUp
          isNumber
          label="Rain Chance"
          minChars={3}
          value={precipProbability}
        />
        <DigitalValueWithLabel
          append="%"
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
};

CurrentPrecipSectionBase.defaultProps = {
  style: undefined,
};

export const CurrentPrecipSection = withTheme(CurrentPrecipSectionBase);
