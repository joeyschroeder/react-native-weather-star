import { Pressable, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { FONTS } from '../../constants/fonts';
import { Section } from '../section/section';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { FLEX_GAP } from '../../constants/flex-gap';
import { DigitalValueWithLabel } from '../digital-value-with-label/digital-value-with-label';
import { withTheme } from '../with-theme/with-theme';
import { FontAwesome } from '@expo/vector-icons';

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
    text: {
      color: theme.colors.text,
      fontFamily: FONTS.SANS_SERIF.BOLD,
      textTransform: 'uppercase',
    },
  });
}

function FooterBase(props) {
  const { alert, style, onSettingsPress, theme, severity } = props;

  const styles = createStyleSheet(props);
  const containerStyles = [styles.container, style];

  const isSevere = severity === 'severe' || severity === 'extreme';
  const severityColor = isSevere ? theme.colors.danger : theme.colors.text;

  return (
    <View style={containerStyles}>
      <Section>
        <Pressable onPress={onSettingsPress}>
          <FontAwesome name="gear" size={scaledValue(36)} color={theme.colors.text} />
        </Pressable>
      </Section>
      <Section style={styles.primary}>
        <DigitalValueWithLabel
          horizontal
          label="Alert"
          minChars={20}
          maxChars={20}
          size={scaledValue(40)}
          value={alert}
        />
      </Section>
      <Section>
        <DigitalValueWithLabel
          color={severityColor}
          horizontal
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
  alert: PropTypes.string,
  onSettingsPress: PropTypes.func,
  severity: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.object,
};

FooterBase.defaultProps = {
  alert: undefined,
  theme: undefined,
  severity: undefined,
  onSettingsPress: undefined,
  style: undefined,
};

export const Footer = withTheme(FooterBase);
