import { Pressable, StyleSheet, Text, View } from 'react-native';
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
import { AnimationSpin } from '../animation-spin/animation-spin';

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
  const { city, isLoading, lastUpdate, onIconPress, radarStation, shortForecast, state, style } = props;
  const containerStyles = { ...styles.container, ...style };

  const cityState = city && state ? `${city}, ${state}` : undefined;
  const cityStateExists = Boolean(cityState);

  const lastUpdateFormatted = lastUpdate ? moment(lastUpdate).format('hh:mmA') : EMPTY_VALUE_LABEL;

  return (
    <View style={containerStyles}>
      <Section>
        <Pressable onPress={onIconPress}>
          <AnimationSpin animate={isLoading} loop>
            <WeatherIcon name="radar" size={scaledValue(36)} />
          </AnimationSpin>
        </Pressable>
      </Section>
      <Section style={styles.secondary}>
        <Label value={`Radar Station: ${radarStation || EMPTY_VALUE_LABEL}`} />
        {cityStateExists ? <Text style={styles.text}>{cityState}</Text> : null}
      </Section>
      <Section style={styles.primary}>
        <DigitalValueWithLabel
          horizontal
          label="Current"
          minChars={16}
          size={scaledValue(25)}
          value={shortForecast || EMPTY_VALUE_LABEL}
        />
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
  isLoading: PropTypes.bool,
  lastUpdate: PropTypes.string,
  onIconPress: PropTypes.func,
  radarStation: PropTypes.string,
  shortForecast: PropTypes.string,
  state: PropTypes.string,
  style: PropTypes.object,
};

Header.defaultProps = {
  city: undefined,
  isLoading: false,
  lastUpdate: undefined,
  onIconPress: undefined,
  radarStation: undefined,
  shortForecast: undefined,
  state: undefined,
  style: undefined,
};
