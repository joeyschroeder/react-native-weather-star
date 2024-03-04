import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../constants/colors';
import { FLEX_GAP } from '../../constants/flex-gap';
import { scaledValue } from '../../utils/scaled-value/scaled-value';
import { BORDER_RADIUS } from '../../constants/border-radius';
import { SPACER } from '../../constants/spacer';
import PropTypes from 'prop-types';

const styles = StyleSheet.create({
  container: {
    gap: FLEX_GAP,
    justifyContent: 'flex-end',
  },
  seg: {
    backgroundColor: COLORS.BLACK_TYPE,
    borderRadius: BORDER_RADIUS,
    height: scaledValue(10),
    marginTop: SPACER / 4,
  },
  segLast: {
    marginTop: 0,
  },
});

export function DigitalLevel(props) {
  const { maxLevels, style, value, color, thresholdColor } = props;

  const containerStyle = [styles.container, style];
  const activeSegStyle = { backgroundColor: color };
  const thresholdSegStyle = { backgroundColor: thresholdColor };

  const segments = [...Array(maxLevels)].map((_, index) => {
    const key = `segment-${index}`;

    const isLast = index === maxLevels - 1;
    let segStyle = isLast ? [styles.seg, styles.segLast] : styles.seg;

    const active = index < value;
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

DigitalLevel.propTypes = {
  color: PropTypes.string,
  maxLevels: PropTypes.number,
  style: PropTypes.object,
  thresholdColor: PropTypes.string,
  value: PropTypes.number,
};

DigitalLevel.defaultProps = {
  color: COLORS.WHITE,
  maxLevels: 20,
  style: undefined,
  thresholdColor: COLORS.DANGER,
  value: 0,
};
