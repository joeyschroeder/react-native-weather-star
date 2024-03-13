import { StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { FONTS } from 'constants/fonts';
import { Section } from 'components/section/section';
import { scaledValue } from 'utils/scaled-value/scaled-value';
import { EMPTY_VALUE_LABEL } from 'constants/empty-value-label';
import { FLEX_GAP } from 'constants/flex-gap';
import { DigitalValueWithLabel } from 'components/digital-value-with-label/digital-value-with-label';
import moment from 'moment';
import { Label } from 'components/label/label';
import { withTheme } from 'components/with-theme/with-theme';
import { WeatherIcon } from 'components/weather-icon/weather-icon';
import { BORDER_RADIUS } from 'constants/border-radius';
import { SPACER } from 'constants/spacer';
import { THEME_DEFAULT_PROP_TYPE } from 'constants/theme-default-prop-type';
import { useSelector } from 'react-redux';
import {
  selectWeatherMetadataCity,
  selectWeatherMetadataRadarStation,
  selectWeatherMetadataState,
} from 'store/weather/weather-metadata/weather-metadata';
import {
  selectWeatherForecastIcon,
  selectWeatherForecastShortForecast,
  selectWeatherForecastUpdateTime,
} from 'store/weather/weather-forecast/weather-forecast';
import { HeaderRefreshButton } from './header-refresh-button/header-refresh-button';

const CURRENT_CHARS = 12;

function createStyleSheet({ theme = THEME_DEFAULT_PROP_TYPE }) {
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
  const { style, theme } = props;

  const city = useSelector(selectWeatherMetadataCity);
  const icon = useSelector(selectWeatherForecastIcon);
  const lastUpdate = useSelector(selectWeatherForecastUpdateTime);
  const radarStation = useSelector(selectWeatherMetadataRadarStation);
  const shortForecast = useSelector(selectWeatherForecastShortForecast);
  const state = useSelector(selectWeatherMetadataState);

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
        <HeaderRefreshButton />
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
          maxChars={CURRENT_CHARS}
          minChars={CURRENT_CHARS}
          size={scaledValue(40)}
          value={shortForecast}
        />
        {showIcon ? (
          <View style={styles.icon}>
            <WeatherIcon color={theme.colors.text} name={icon} size={scaledValue(39)} />
          </View>
        ) : null}
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
  style: PropTypes.object,
  theme: PropTypes.object,
};

HeaderBase.defaultProps = {
  style: undefined,
  theme: THEME_DEFAULT_PROP_TYPE,
};

export const Header = withTheme(HeaderBase);
