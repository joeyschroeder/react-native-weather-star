import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Label } from '../label/label';
import { COLORS } from '../../constants/colors';
import { SPACER } from '../../constants/spacer';

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: COLORS.GREY,
    justifyContent: 'center',
    padding: SPACER,
  },
  label: {
    marginTop: SPACER * 1.5,
  },
});

export function Section(props) {
  const { children, label, style } = props;

  const containerStyle = [styles.container, style];

  return (
    <View style={containerStyle}>
      {children}
      <Label style={styles.label} value={label} />
    </View>
  );
}

Section.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  style: PropTypes.object,
};

Section.defaultProps = {
  children: null,
  label: undefined,
  style: undefined,
};
