import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { COLORS } from 'constants/colors';
import { BORDER_RADIUS } from 'constants/border-radius';
import { SPACER } from 'constants/spacer';
import { Label } from 'components/label/label';
// import { BORDER_WIDTH } from 'constants/border-width';
import { withTheme } from 'components/with-theme/with-theme';

function createStyleSheet({ theme }) {
  return StyleSheet.create({
    container: {
      alignItems: 'flex-start',
      borderColor: theme.colors.background,
      borderRadius: BORDER_RADIUS,
      // borderWidth: BORDER_WIDTH,
      marginBottom: SPACER * 2,
      // padding: SPACER,
    },
    label: {
      marginBottom: SPACER / 2,
    },
  });
}

function SettingsSectionBase(props) {
  const { children, label, style } = props;

  const styles = createStyleSheet(props);
  const containerStyle = [styles.container, style];

  return (
    <View style={containerStyle}>
      <Label backgroundColor={COLORS.BLACK_TYPE} style={styles.label} value={label} />
      {children}
    </View>
  );
}

SettingsSectionBase.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  style: PropTypes.object,
};

SettingsSectionBase.defaultProps = {
  children: null,
  label: undefined,
  style: undefined,
};

export const SettingsSection = withTheme(SettingsSectionBase);
