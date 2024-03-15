import { Pressable, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { FONTS } from 'constants/fonts';
import { Section } from 'components/section/section';
import { scaledValue } from 'utils/scaled-value/scaled-value';
import { FLEX_GAP } from 'constants/flex-gap';
import { DigitalValueWithLabel } from 'components/digital-value-with-label/digital-value-with-label';
import { withTheme } from 'components/with-theme/with-theme';
import { FontAwesome } from '@expo/vector-icons';
import { THEME_DEFAULT_PROP_TYPE } from 'constants/theme-default-prop-type';
import { useDispatch, useSelector } from 'react-redux';
import { selectWeatherAlertsConcat, selectWeatherAlertsSeverity } from 'store/weather/weather-alerts/weather-alerts';
import { openSettingsModal } from 'store/settings/settings-modal-active/settings-modal-active';

function createStyleSheet({ theme = THEME_DEFAULT_PROP_TYPE }) {
  return StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: FLEX_GAP,
    },
    primary: {
      alignItems: 'flex-end',
      flex: 1,
    },
    text: {
      color: theme.colors.text,
      fontFamily: FONTS.SANS_SERIF.BOLD,
      textTransform: 'uppercase',
    },
  });
}

function FooterBase(props) {
  const { style, theme } = props;

  const dispatch = useDispatch();
  const onSettingsPress = () => dispatch(openSettingsModal());

  const alert = useSelector(selectWeatherAlertsConcat);
  const severity = useSelector(selectWeatherAlertsSeverity);

  const styles = createStyleSheet(props);
  const containerStyles = [styles.container, style];

  const isSevere = severity === 'severe' || severity === 'extreme';
  const severityColor = isSevere ? theme.colors.danger : theme.colors.text;

  return (
    <View style={containerStyles}>
      <Section>
        <Pressable onPress={onSettingsPress}>
          <FontAwesome color={theme.colors.text} name="gear" size={scaledValue(36)} />
        </Pressable>
      </Section>
      <Section style={styles.primary}>
        <DigitalValueWithLabel
          isHorizontal
          isMarquee
          label="Alert"
          maxChars={20}
          minChars={20}
          size={scaledValue(40)}
          value={alert}
        />
      </Section>
      <Section>
        <DigitalValueWithLabel
          color={severityColor}
          isHorizontal
          label="Severity"
          minChars={8}
          size={scaledValue(40)}
          value={severity}
        />
      </Section>
    </View>
  );
}

FooterBase.propTypes = {
  style: PropTypes.object,
  theme: PropTypes.object,
};

FooterBase.defaultProps = {
  style: undefined,
  theme: THEME_DEFAULT_PROP_TYPE,
};

export const Footer = withTheme(FooterBase);
