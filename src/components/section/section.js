import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, View } from 'react-native';
import { Label } from 'components/label/label';
import { SPACER } from 'constants/spacer';
import { withTheme } from 'components/with-theme/with-theme';
import { THEME_DEFAULT_PROP_TYPE } from 'constants/theme-default-prop-type';

function createStyleSheet({ theme = THEME_DEFAULT_PROP_TYPE }) {
  return StyleSheet.create({
    container: {
      alignItems: 'center',
      backgroundColor: theme.colors.section,
      justifyContent: 'center',
      padding: SPACER,
    },
    label: {
      marginTop: SPACER * 1.5,
    },
  });
}

function SectionBase(props) {
  const { children, label, style } = props;

  const styles = createStyleSheet(props);
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
};

SectionBase.defaultProps = {
  children: null,
  label: undefined,
  style: undefined,
};

export const Section = withTheme(SectionBase);
