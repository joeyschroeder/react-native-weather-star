import React from 'react';
import { Section } from '../section/section';
import { View, StyleSheet } from 'react-native';
import { DigitalValueWithLabel } from '../digital-value-with-label/digital-value-with-label';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { SPACER } from '../../constants/spacer';
import PropTypes from 'prop-types';
import { convertTempToColor } from '../../utils/convert-temp-to-color/convert-temp-to-color';
import { withTheme } from '../with-theme/with-theme';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: SPACER,
  },
  highLowContainer: {
    gap: SPACER,
  },
});

export const CurrentWeatherSection = withTheme(function Base(props) {
  const { style, tempCurrent, tempHigh, tempLow, tempUnit, theme } = props;

  const tempUnitFormatted = tempUnit === 'F' ? '°F' : '°C';

  const tempCurrentColor = convertTempToColor(theme, tempCurrent);
  const tempHighColor = convertTempToColor(theme, tempHigh);
  const tempLowColor = convertTempToColor(theme, tempLow);

  return (
    <Section style={style}>
      <View style={styles.container}>
        <DigitalValueWithLabel
          countUp
          append={tempUnitFormatted}
          color={tempCurrentColor}
          label="Current"
          size={scaledValue(251)}
          value={tempCurrent}
        />
        <View style={styles.highLowContainer}>
          <DigitalValueWithLabel countUp append="°" label="High" value={tempHigh} color={tempHighColor} />
          <DigitalValueWithLabel countUp append="°" label="Low" value={tempLow} color={tempLowColor} />
        </View>
      </View>
    </Section>
  );
});

CurrentWeatherSection.propTypes = {
  style: PropTypes.object,
  tempCurrent: PropTypes.number,
  tempHigh: PropTypes.number,
  tempLow: PropTypes.number,
  tempUnit: PropTypes.string,
  theme: PropTypes.object,
};

CurrentWeatherSection.defaultProps = {
  style: undefined,
  tempCurrent: undefined,
  tempHigh: undefined,
  tempLow: undefined,
  tempUnit: undefined,
  theme: undefined,
};
