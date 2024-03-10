import { StyleSheet, View, Modal } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { BORDER_RADIUS } from '../../constants/border-radius';
import { SPACER } from '../../constants/spacer';
import { BlockButton } from '../block-button/block-button';
import { RadioSelector } from '../radio-selector/radio-selector';
import { DIMENSIONS } from '../../constants/dimensions';
import { SettingsSection } from '../settings-section/settings-section';
import Color from 'color';
import { withTheme } from '../with-theme/with-theme';

function createStyleSheet({ theme }) {
  return StyleSheet.create({
    action: {
      flex: 1,
    },
    actions: {
      flexDirection: 'row',
      gap: SPACER,
    },
    container: {
      alignItems: 'center',
      backgroundColor: Color(theme.colors.background).alpha(0.5).string(),
      flex: 1,
      justifyContent: 'center',
      padding: SPACER,
    },
    primary: {
      backgroundColor: theme.colors.section,
      borderRadius: BORDER_RADIUS,
      maxWidth: DIMENSIONS.WIDTH / 2,
      padding: SPACER,
      width: '100%',
    },
    radioSelector: {
      marginBottom: SPACER / 2,
    },
  });
}

function SettingsBase(props) {
  const { onDismiss, visible } = props;
  const styles = createStyleSheet(props);

  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.container}>
        <View style={styles.primary}>
          <SettingsSection label="Theme">
            <RadioSelector options={['auto', 'light', 'dark']} style={styles.radioSelector} value="dark" />
            <RadioSelector options={['Red', 'Yellow', 'Green', 'Blue', 'White']} value="Red" />
          </SettingsSection>
          <SettingsSection label="Clock">
            <RadioSelector options={['12-hour', '24-hour']} value="12-hour" />
          </SettingsSection>
          <View style={styles.actions}>
            <BlockButton label="Save" style={styles.action} />
            <BlockButton label="Cancel" onPress={onDismiss} style={styles.action} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

SettingsBase.propTypes = {
  onDismiss: PropTypes.func,
  visible: PropTypes.bool,
};

SettingsBase.defaultProps = {
  onDismiss: undefined,
  visible: false,
};

export const Settings = withTheme(SettingsBase);
