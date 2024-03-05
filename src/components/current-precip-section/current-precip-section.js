import React from 'react';
import { Section } from '../section/section';
import { View } from 'react-native';
import { DigitalValueWithLabel } from '../digital-value-with-label/digital-value-with-label';
import { SPACER } from '../../constants/spacer';
import PropTypes from 'prop-types';
import { withTheme } from '../with-theme/with-theme';

function CurrentPrecipSectionBase(props) {
  const { precipProbability, relativeHumidity, style, theme } = props;

  const precipProbabilityColor = precipProbability > 25 ? theme.colors.danger : theme.colors.text;
  const relativeHumidityColor = relativeHumidity > 50 ? theme.colors.danger : theme.colors.text;

  return (
    <Section style={style}>
      <View style={{ gap: SPACER }}>
        <DigitalValueWithLabel label="Rain" value={precipProbability} append="%" color={precipProbabilityColor} />
        <DigitalValueWithLabel label="Humidity" append="%" value={relativeHumidity} color={relativeHumidityColor} />
      </View>
    </Section>
  );
}

CurrentPrecipSectionBase.propTypes = {
  precipProbability: PropTypes.number,
  relativeHumidity: PropTypes.number,
  style: PropTypes.object,
  theme: PropTypes.object,
};

CurrentPrecipSectionBase.defaultProps = {
  precipProbability: undefined,
  relativeHumidity: undefined,
  style: undefined,
  theme: undefined,
};

export const CurrentPrecipSection = withTheme(CurrentPrecipSectionBase);
