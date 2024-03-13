import React from 'react';
import { Section } from 'components/section/section';
import { View } from 'react-native';
import { DigitalValueWithLabel } from 'components/digital-value-with-label/digital-value-with-label';
import { SPACER } from 'constants/spacer';
import PropTypes from 'prop-types';
import { withTheme } from 'components/with-theme/with-theme';
import { THEME_DEFAULT_PROP_TYPE } from 'constants/theme-default-prop-type';

function CurrentPrecipSectionBase(props) {
  const { precipProbability, relativeHumidity, style, theme } = props;

  const precipProbabilityColor = precipProbability > 25 ? theme.colors.danger : theme.colors.text;

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
  precipProbability: PropTypes.number,
  relativeHumidity: PropTypes.number,
  style: PropTypes.object,
  theme: PropTypes.object,
};

CurrentPrecipSectionBase.defaultProps = {
  precipProbability: undefined,
  relativeHumidity: undefined,
  style: undefined,
  theme: THEME_DEFAULT_PROP_TYPE,
};

export const CurrentPrecipSection = withTheme(CurrentPrecipSectionBase);
