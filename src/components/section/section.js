import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Label } from '../label/label';
import Color from 'color';
import { COLORS } from '../../constants/colors';
import { SPACER } from '../../constants/spacer';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: Color(COLORS.BLACK_TYPE).lighten(0.4).string(),
    flex: 1,
    justifyContent: 'center',
  },
  label: {
    marginTop: SPACER * 1.5,
  },
});

export function Section(props) {
  const { children, label } = props;

  return (
    <View style={styles.container}>
      {children}
      <Label style={styles.label} value={label} />
    </View>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
};

Section.defaultProps = {
  children: null,
  label: undefined,
};
