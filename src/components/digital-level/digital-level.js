import React from 'react';
import { StyleSheet, View } from 'react-native';
import { FLEX_GAP } from 'constants/flex-gap';
import { scaledValue } from 'utils/scaled-value/scaled-value';
import { BORDER_RADIUS } from 'constants/border-radius';
import { SPACER } from 'constants/spacer';
import PropTypes from 'prop-types';
import { withTheme } from 'components/with-theme/with-theme';
import { useCountUp } from 'use-count-up';
import { THEME_DEFAULT_PROP_TYPE } from 'constants/theme-default-prop-type';

function createStyleSheet({ theme = THEME_DEFAULT_PROP_TYPE }) {
  return StyleSheet.create({
    container: {
      gap: FLEX_GAP,
      justifyContent: 'flex-end',
    },
    seg: {
      backgroundColor: theme.colors.valueBackground,
      borderRadius: BORDER_RADIUS,
      height: scaledValue(10),
      marginTop: SPACER / 4,
    },
    segLast: {
      marginTop: 0,
    },
  });
}

function DigitalLevelBase(props) {
  const { maxLevels, style, theme, value } = props;
  const styles = createStyleSheet(props);

  const containerStyle = [styles.container, style];
  const activeSegStyle = { backgroundColor: theme.colors.text };
  const thresholdSegStyle = { backgroundColor: theme.colors.danger };

  const { value: countUpValue } = useCountUp({
    duration: 1,
    end: value,
    isCounting: true,
  });

  const segments = [...Array(maxLevels)].map((_, index) => {
    const key = `segment-${index}`;

    const isLast = index === maxLevels - 1;
    let segStyle = isLast ? [styles.seg, styles.segLast] : styles.seg;

    const active = index < countUpValue;
    const overThreshold = active && index > maxLevels / 2;

    if (overThreshold) {
      segStyle = [segStyle, thresholdSegStyle];
    } else if (active) {
      segStyle = [segStyle, activeSegStyle];
    }

    return <View key={key} style={segStyle} />;
  });

  return <View style={containerStyle}>{segments.reverse()}</View>;
}

DigitalLevelBase.propTypes = {
  maxLevels: PropTypes.number,
  style: PropTypes.object,
  theme: PropTypes.object,
  value: PropTypes.number,
};

DigitalLevelBase.defaultProps = {
  maxLevels: 20,
  style: undefined,
  theme: THEME_DEFAULT_PROP_TYPE,
  value: 0,
};

export const DigitalLevel = withTheme(DigitalLevelBase);
