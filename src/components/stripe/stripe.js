import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { COLORS } from '../../constants/colors';
import { SPACER } from '../../constants/spacer';
import { BORDER_RADIUS } from '../../constants/border-radius';

const styles = StyleSheet.create({
  container: {
    borderRadius: BORDER_RADIUS,
    flex: 0,
    height: SPACER / 10,
  },
});

export function Stripe(props) {
  const { style, color } = props;

  const containerStyles = [styles.container, { backgroundColor: color }, style];
  return <View style={containerStyles} />;
}

Stripe.propTypes = {
  color: PropTypes.string,
  style: PropTypes.object,
};

Stripe.defaultProps = {
  color: COLORS.DANGER,
  style: undefined,
};
