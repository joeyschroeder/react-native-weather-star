import React from 'react';
import { Section } from 'components/section/section';
import { StyleSheet, View } from 'react-native';
import { DigitalValueWithLabel } from 'components/digital-value-with-label/digital-value-with-label';
import { scaledValue } from 'utils/scaled-value/scaled-value';
import { SPACER } from 'constants/spacer';
import PropTypes from 'prop-types';
import { convertTempToColor } from 'utils/convert-temp-to-color/convert-temp-to-color';
import { withTheme } from 'components/with-theme/with-theme';
import { useSelector } from 'react-redux';
import {
  selectWeatherForecastTemperature,
  selectWeatherForecastTemperatureHigh,
  selectWeatherForecastTemperatureLow,
  selectWeatherForecastTemperatureUnit,
} from 'store/weather/weather-forecast/weather-forecast';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: SPACER,
  },
  highLowContainer: {
    flexDirection: 'row',
    gap: SPACER,
    justifyContent: 'center',
  },
});

export const CurrentWeatherSection = withTheme(function Base(props) {
  const { style, theme } = props;

  const tempCurrent = useSelector(selectWeatherForecastTemperature);
  const tempHigh = useSelector(selectWeatherForecastTemperatureHigh);
  const tempLow = useSelector(selectWeatherForecastTemperatureLow);
  const tempUnit = useSelector(selectWeatherForecastTemperatureUnit);

  const tempUnitFormatted = tempUnit === 'F' ? '°F' : '°C';

  const tempCurrentColor = convertTempToColor(theme, tempCurrent);
  const tempHighColor = convertTempToColor(theme, tempHigh);
  const tempLowColor = convertTempToColor(theme, tempLow);

  return (
    <Section style={style}>
      <View style={styles.container}>
        <DigitalValueWithLabel
          append={tempUnitFormatted}
          color={tempCurrentColor}
          isCountingUp
          isHorizontal
          isNumber
          minChars={3}
          size={scaledValue(220)}
          value={tempCurrent}
        />
        <View style={styles.highLowContainer}>
          <DigitalValueWithLabel
            append={tempUnitFormatted}
            color={tempHighColor}
            isCountingUp
            isHorizontal
            isNumber
            label="Hi"
            minChars={3}
            size={scaledValue(78)}
            value={tempHigh}
          />
          <DigitalValueWithLabel
            append={tempUnitFormatted}
            color={tempLowColor}
            isCountingUp
            isHorizontal
            isNumber
            label="Lo"
            minChars={3}
            size={scaledValue(78)}
            value={tempLow}
          />
        </View>
      </View>
    </Section>
  );
});

CurrentWeatherSection.propTypes = {
  style: PropTypes.object,
};

CurrentWeatherSection.defaultProps = {
  style: undefined,
};
