import React from 'react';
import { Section } from '../section/section';
import { View, StyleSheet } from 'react-native';
import { DigitalValueWithLabel } from '../digital-value-with-label/digital-value-with-label';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { SPACER } from '../../constants/spacer';
import PropTypes from 'prop-types';
import { convertTempToColor } from '../../utils/convert-temp-to-color/convert-temp-to-color';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: SPACER,
  },
  highLowContainer: {
    gap: SPACER,
  },
});

export function CurrentWeatherSection(props) {
  const { style, tempCurrent, tempHigh, tempLow, tempUnit } = props;

  const tempUnitFormatted = tempUnit === 'F' ? '°F' : '°C';

  const tempCurrentColor = convertTempToColor(tempCurrent);
  const tempHighColor = convertTempToColor(tempHigh);
  const tempLowColor = convertTempToColor(tempLow);

  return (
    <Section style={style}>
      <View style={styles.container}>
        <DigitalValueWithLabel
          append={tempUnitFormatted}
          color={tempCurrentColor}
          label="Current"
          size={scaledValue(240)}
          value={tempCurrent}
        />
        <View style={styles.highLowContainer}>
          <DigitalValueWithLabel append="°" label="High" value={tempHigh} color={tempHighColor} />
          <DigitalValueWithLabel append="°" label="Low" value={tempLow} color={tempLowColor} />
        </View>
      </View>
    </Section>
  );
}

CurrentWeatherSection.propTypes = {
  style: PropTypes.object,
  tempCurrent: PropTypes.number,
  tempHigh: PropTypes.number,
  tempLow: PropTypes.number,
  tempUnit: PropTypes.string,
};

CurrentWeatherSection.defaultProps = {
  style: undefined,
  tempCurrent: undefined,
  tempHigh: undefined,
  tempLow: undefined,
  tempUnit: undefined,
};
