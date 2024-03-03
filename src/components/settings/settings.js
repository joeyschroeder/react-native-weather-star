import { StyleSheet, View, Modal } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { COLORS } from '../../constants/colors';
import { BORDER_RADIUS } from '../../constants/border-radius';
import { SPACER } from '../../constants/spacer';
import { BlockButton } from '../block-button/block-button';
import { RadioSelector } from '../radio-selector/radio-selector';
import { DIMENSIONS } from '../../constants/dimensions';
import { SettingsSection } from '../settings-section/settings-section';
import Color from 'color';
import { TimePicker } from '../time-picker/time-picker';

const styles = StyleSheet.create({
  action: {
    flex: 1,
  },
  actions: {
    flexDirection: 'row',
    gap: SPACER / 2,
    marginTop: SPACER,
  },
  container: {
    alignItems: 'center',
    backgroundColor: Color(COLORS.BLACK).alpha(0.5).string(),
    flex: 1,
    justifyContent: 'center',
    padding: SPACER,
  },
  primary: {
    backgroundColor: COLORS.GREY,
    borderRadius: BORDER_RADIUS,
    maxWidth: DIMENSIONS.WIDTH / 2,
    padding: SPACER,
    width: '100%',
  },
});

export function Settings(props) {
  const { onDismiss, visible } = props;

  return (
    <Modal animationType="fade" transparent visible={visible}>
      <View style={styles.container}>
        <View style={styles.primary}>
          {/* <Label value="Settings" /> */}
          <SettingsSection label="Destination">
            <TimePicker value={new Date()} />
            <RadioSelector value="Red" options={['Red', 'Yellow', 'Green', 'Blue', 'White']} />
          </SettingsSection>
          <SettingsSection label="Present">
            <RadioSelector value="Red" options={['Red', 'Yellow', 'Green', 'Blue', 'White']} />
          </SettingsSection>
          <SettingsSection label="Last Departed">
            <TimePicker value={new Date()} />
            <RadioSelector value="Red" options={['Red', 'Yellow', 'Green', 'Blue', 'White']} />
          </SettingsSection>
          <View style={styles.actions}>
            <BlockButton style={styles.action} label="Save" color={COLORS.SUCCESS} />
            <BlockButton style={styles.action} label="Cancel" onPress={onDismiss} color={COLORS.DANGER} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

Settings.propTypes = {
  onDismiss: PropTypes.func,
  visible: PropTypes.bool,
};

Settings.defaultProps = {
  onDismiss: undefined,
  visible: false,
};
