import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { FONTS } from '../../constants/fonts';
import { Section } from '../section/section';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { EMPTY_VALUE_LABEL } from '../../constants/empty-value-label';
import { FLEX_GAP } from '../../constants/flex-gap';
import { DigitalValueWithLabel } from '../digital-value-with-label/digital-value-with-label';
import moment from 'moment';
import { Label } from '../label/label';
import { withTheme } from '../with-theme/with-theme';
import { HeaderRefreshButtonConnected } from '../header-refresh-button/header-refresh-button.connected';
import { WeatherIcon } from '../weather-icon/weather-icon';
import { BORDER_RADIUS } from '../../constants/border-radius';
import { SPACER } from '../../constants/spacer';

const CURRENT_CHARS = 12;

function createStyleSheet({ theme }) {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: FLEX_GAP,
    },
    icon: {
      backgroundColor: theme.colors.valueBackground,
      borderRadius: BORDER_RADIUS,
      flexDirection: 'row',
      marginLeft: SPACER / 2,
      padding: SPACER / 2,
    },
    primary: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    secondary: {
      alignItems: 'flex-start',
    },
    text: {
      color: theme.colors.text,
      fontFamily: FONTS.SANS_SERIF.BOLD,
      textTransform: 'uppercase',
    },
  });
}

function HeaderBase(props) {
  const { city, lastUpdate, radarStation, shortForecast, state, style, theme, icon } = props;

  const styles = createStyleSheet(props);
  const containerStyles = [styles.container, style];

  const cityState = city && state ? `${city}, ${state}` : undefined;
  const cityStateExists = Boolean(cityState);

  const lastUpdateFormatted = lastUpdate ? moment(lastUpdate).format('hh:mmA') : undefined;
  const isMarquee = shortForecast && shortForecast.length > CURRENT_CHARS;
  const showIcon = Boolean(icon);

  return (
    <View style={containerStyles}>
      <Section>
        <HeaderRefreshButtonConnected />
      </Section>
      <Section style={styles.secondary}>
        <Label value={`Station: ${radarStation || EMPTY_VALUE_LABEL}`} />
        {cityStateExists ? <Text style={styles.text}>{cityState}</Text> : null}
      </Section>
      <Section style={styles.primary}>
        <DigitalValueWithLabel
          isHorizontal
          isMarquee={isMarquee}
          label="Current"
          maxChars={11}
          minChars={11}
          size={scaledValue(40)}
          value={shortForecast}
        />
        <View style={styles.icon}>
          {showIcon ? <WeatherIcon color={theme.colors.text} name={icon} size={scaledValue(39)} /> : null}
        </View>
      </Section>
      <Section>
        <DigitalValueWithLabel
          isHorizontal
          label="Last Update"
          minChars={6}
          size={scaledValue(40)}
          value={lastUpdateFormatted}
        />
      </Section>
    </View>
  );
}

HeaderBase.propTypes = {
  city: PropTypes.string,
  icon: PropTypes.string,
  lastUpdate: PropTypes.string,
  radarStation: PropTypes.string,
  shortForecast: PropTypes.string,
  state: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.object,
};

HeaderBase.defaultProps = {
  city: undefined,
  icon: undefined,
  lastUpdate: undefined,
  radarStation: undefined,
  shortForecast: undefined,
  state: undefined,
  style: undefined,
  theme: undefined,
};

export const Header = withTheme(HeaderBase);
