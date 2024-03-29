import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, Text, View } from 'react-native';
import { SPACER } from 'constants/spacer';
import { DigitalValue } from 'components/digital-value/digital-value';
import { Label } from 'components/label/label';
import { FONTS } from 'constants/fonts';
import { scaledValue } from 'utils/scaled-value/scaled-value';
import { withTheme } from 'components/with-theme/with-theme';
import { DigitalValueNumeric } from 'components/digital-value-numeric/digital-value-numeric';
import { DigitalValueMarquee } from 'components/digital-value-marquee/digital-value-marquee';
import { THEME_DEFAULT_PROP_TYPE } from 'constants/theme-default-prop-type';

function createStyleSheet({ theme = THEME_DEFAULT_PROP_TYPE }) {
  return StyleSheet.create({
    append: {
      color: theme.colors.text,
      fontFamily: FONTS.SANS_SERIF.BOLD,
      fontSize: scaledValue(30),
      marginLeft: SPACER / 2,
    },
    container: {
      alignItems: 'center',
    },
    isHorizontal: {
      flexDirection: 'row',
      gap: SPACER,
    },
    valueContainer: {
      flexDirection: 'row',
    },
  });
}

function DigitalValueWithLabelBase(props) {
  const { append, isHorizontal, isMarquee, isNumber, label, style, ...other } = props;

  const styles = createStyleSheet(props);
  const appendExists = Boolean(append);
  const containerStyle = [styles.container, isHorizontal && styles.isHorizontal, style];

  const labelStyle = { marginBottom: isHorizontal ? undefined : SPACER / 2 };

  return (
    <View style={containerStyle}>
      <Label style={labelStyle} value={label} />
      <View style={styles.valueContainer}>
        {isMarquee ? <DigitalValueMarquee {...other} /> : null}
        {isNumber ? <DigitalValueNumeric {...other} /> : null}
        {!isMarquee && !isNumber ? <DigitalValue {...other} /> : null}
        {appendExists ? <Text style={styles.append}>{append}</Text> : null}
      </View>
    </View>
  );
}

DigitalValueWithLabelBase.propTypes = {
  append: PropTypes.string,
  isHorizontal: PropTypes.bool,
  isMarquee: PropTypes.bool,
  isNumber: PropTypes.bool,
  label: PropTypes.string,
  style: PropTypes.object,
};

DigitalValueWithLabelBase.defaultProps = {
  append: undefined,
  isHorizontal: false,
  isMarquee: false,
  isNumber: false,
  label: undefined,
  style: undefined,
};

export const DigitalValueWithLabel = withTheme(DigitalValueWithLabelBase);
