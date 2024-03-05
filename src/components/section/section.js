import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet } from 'react-native';
import { Label } from '../label/label';
import { SPACER } from '../../constants/spacer';
import { withTheme } from '../with-theme/with-theme';

function createStyleSheet(theme) {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: theme.grey,
      justifyContent: 'center',
      padding: SPACER,
    },
    label: {
      marginTop: SPACER * 1.5,
    },
  });
}

function SectionBase(props) {
  const { children, label, style, theme } = props;

  const styles = createStyleSheet(theme);
  const containerStyle = [styles.container, style];

  return (
    <View style={containerStyle}>
      {children}
      <Label style={styles.label} value={label} />
    </View>
  );
}

SectionBase.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  style: PropTypes.object,
  theme: PropTypes.object,
};

SectionBase.defaultProps = {
  children: null,
  theme: undefined,
  label: undefined,
  style: undefined,
};

export const Section = withTheme(SectionBase);
