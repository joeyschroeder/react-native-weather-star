import { Pressable, StyleSheet, Text, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { Section } from '../section/section';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { FontAwesome } from '@expo/vector-icons';
import { FLEX_GAP } from '../../constants/flex-gap';
import { COLORS } from '../../constants/colors';
import { FONTS } from '../../constants/fonts';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    gap: FLEX_GAP,
  },
  primary: {
    alignItems: 'flex-start',
    flex: 1,
    justifyContent: 'center',
  },
  settings: {
    flex: 0,
  },
  text: {
    color: COLORS.WHITE,
    fontFamily: FONTS.SANS_SERIF.BOLD,
    textTransform: 'uppercase',
  },
});

export function Footer(props) {
  const { onSettingsPress, style } = props;
  const containerStyle = [styles.container, style];

  return (
    <View style={containerStyle}>
      {/* <Section style={styles.settings}>
        <Pressable onPress={onSettingsPress}>
          <FontAwesome
            color={COLORS.WHITE}
            name="gear"
            size={scaledValue(36)}
          />
        </Pressable>
      </Section> */}
      <Section style={styles.primary}>
        <Text style={styles.text}>
          Increasing clouds, with a high near 49. South wind around 15 mph.
        </Text>
      </Section>
    </View>
  );
}

Footer.propTypes = {
  onSettingsPress: PropTypes.func,
  style: PropTypes.object,
};

Footer.defaultProps = {
  onSettingsPress: undefined,
  style: undefined,
};
