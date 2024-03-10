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

function createStyleSheet({ theme }) {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: FLEX_GAP,
    },
    primary: {
      alignItems: 'flex-end',
      flex: 1,
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
  const { city, lastUpdate, radarStation, shortForecast, state, style } = props;

  const styles = createStyleSheet(props);
  const containerStyles = [styles.container, style];

  const cityState = city && state ? `${city}, ${state}` : undefined;
  const cityStateExists = Boolean(cityState);

  const lastUpdateFormatted = lastUpdate ? moment(lastUpdate).format('hh:mmA') : undefined;

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
          label="Current"
          maxChars={12}
          minChars={12}
          size={scaledValue(40)}
          value={shortForecast}
        />
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
  lastUpdate: PropTypes.string,
  radarStation: PropTypes.string,
  shortForecast: PropTypes.string,
  state: PropTypes.string,
  style: PropTypes.object,
};

HeaderBase.defaultProps = {
  city: undefined,
  lastUpdate: undefined,
  radarStation: undefined,
  shortForecast: undefined,
  state: undefined,
  style: undefined,
};

export const Header = withTheme(HeaderBase);
