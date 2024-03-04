import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { FONTS } from '../../constants/fonts';
import { COLORS } from '../../constants/colors';
import { Section } from '../section/section';
import { WeatherIcon } from '../weather-icon/weather-icon';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { EMPTY_VALUE_LABEL } from '../../constants/empty-value-label';
import { FLEX_GAP } from '../../constants/flex-gap';
import { DigitalValueWithLabel } from '../digital-value-with-label/digital-value-with-label';
import moment from 'moment';
import { Label } from '../label/label';
import { DigitalValue } from '../digital-value/digital-value';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: FLEX_GAP,
  },
  primary: {
    alignItems: 'flex-start',
  },
  secondary: {
    alignItems: 'flex-start',
    flex: 1,
  },
  text: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SANS_SERIF.BOLD,
    textTransform: 'uppercase',
  },
});

export function Header(props) {
  const { city, lastUpdate, state, radarStation, style, shortForecast } = props;
  const containerStyles = { ...styles.container, ...style };

  const cityState = city && state ? `${city}, ${state}` : undefined;
  const cityStateExists = Boolean(cityState);

  const lastUpdateFormatted = lastUpdate ? moment(lastUpdate).format('hh:mmA') : EMPTY_VALUE_LABEL;

  return (
    <View style={containerStyles}>
      <Section>
        <WeatherIcon name="radar" size={scaledValue(36)} />
      </Section>
      <Section style={styles.secondary}>
        <Label value={`Radar Station: ${radarStation || EMPTY_VALUE_LABEL}`} />
        {cityStateExists && <Text style={styles.text}>{cityState}</Text>}
      </Section>
      <Section style={styles.primary}>
        <DigitalValue value={shortForecast || EMPTY_VALUE_LABEL} size={scaledValue(25)} minChars={22} />
      </Section>
      <Section>
        <DigitalValueWithLabel
          horizontal
          label="Last Update"
          minChars={6}
          size={scaledValue(25)}
          value={lastUpdateFormatted}
        />
      </Section>
    </View>
  );
}

Header.propTypes = {
  city: PropTypes.string,
  lastUpdate: PropTypes.string,
  radarStation: PropTypes.string,
  shortForecast: PropTypes.string,
  state: PropTypes.string,
  style: PropTypes.object,
};

Header.defaultProps = {
  city: undefined,
  lastUpdate: undefined,
  radarStation: undefined,
  shortForecast: undefined,
  state: undefined,
  style: undefined,
};
