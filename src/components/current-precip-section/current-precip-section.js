import React from 'react';
import { Section } from '../section/section';
import { View } from 'react-native';
import { DigitalValueWithLabel } from '../digital-value-with-label/digital-value-with-label';
import { SPACER } from '../../constants/spacer';
import PropTypes from 'prop-types';
import { COLORS } from '../../constants/colors';

export function CurrentPrecipSection(props) {
  const { style, precipProbability, relativeHumidity } = props;

  const precipProbabilityColor = precipProbability > 25 ? COLORS.DANGER : COLORS.WHITE;
  const relativeHumidityColor = relativeHumidity > 50 ? COLORS.DANGER : COLORS.WHITE;

  return (
    <Section style={style}>
      <View style={{ gap: SPACER }}>
        <DigitalValueWithLabel label="Rain" value={precipProbability} append="%" color={precipProbabilityColor} />
        <DigitalValueWithLabel label="Humidity" append="%" value={relativeHumidity} color={relativeHumidityColor} />
      </View>
    </Section>
  );
}

CurrentPrecipSection.propTypes = {
  precipProbability: PropTypes.number,
  relativeHumidity: PropTypes.number,
  style: PropTypes.object,
};

CurrentPrecipSection.defaultProps = {
  style: undefined,
  precipProbability: undefined,
  relativeHumidity: undefined,
};
