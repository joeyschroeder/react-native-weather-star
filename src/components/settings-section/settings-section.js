import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { COLORS } from '../../constants/colors';
import { BORDER_RADIUS } from '../../constants/border-radius';
import { SPACER } from '../../constants/spacer';
import { Label } from '../label/label';
import { BORDER_WIDTH } from '../../constants/border-width';

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    borderColor: COLORS.BLACK_TYPE,
    borderRadius: BORDER_RADIUS,
    borderWidth: BORDER_WIDTH,
    marginBottom: SPACER,
    marginTop: SPACER,
    paddingBottom: SPACER,
    paddingHorizontal: SPACER,
  },
  label: {
    marginTop: -SPACER * 0.8,
  },
});

export function SettingsSection(props) {
  const { style, children, label } = props;
  const containerStyle = [styles.container, style];

  return (
    <View style={containerStyle}>
      <Label backgroundColor={COLORS.BLACK_TYPE} style={styles.label} value={label} />
      {children}
    </View>
  );
}

SettingsSection.propTypes = {
  children: PropTypes.node,
  label: PropTypes.string,
  style: PropTypes.object,
};

SettingsSection.defaultProps = {
  label: undefined,
  style: undefined,
  children: null,
};
