import { Modal, StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { BORDER_RADIUS } from 'constants/border-radius';
import { SPACER } from 'constants/spacer';
import { BlockButton } from 'components/block-button/block-button';
import { RadioSelector } from 'components/radio-selector/radio-selector';
import { DIMENSIONS } from 'constants/dimensions';
import { SettingsSection } from 'components/settings-section/settings-section';
import Color from 'color';
import { withTheme } from 'components/with-theme/with-theme';
import { THEME_DEFAULT_PROP_TYPE } from 'constants/theme-default-prop-type';
import { useDispatch, useSelector } from 'react-redux';
import { COLOR_SCHEMES } from 'constants/color-schemes';
import {
  closeSettingsModal,
  settingsModalActiveDuck,
} from 'store/settings/settings-modal-active/settings-modal-active';
import { settingsEditDuck } from 'store/settings/settings-edit/settings-edit';

const COLOR_SCHEME_OPTIONS = Object.values(COLOR_SCHEMES);

function createStyleSheet({ theme = THEME_DEFAULT_PROP_TYPE }) {
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
  const { theme } = props;

  const dispatch = useDispatch();

  const onCancelPress = () => dispatch(closeSettingsModal());

  const styles = createStyleSheet(props);

  const color = useSelector(settingsEditDuck.select.color);
  const colorScheme = useSelector(settingsEditDuck.select.colorScheme);
  const isVisible = useSelector(settingsModalActiveDuck.select.state);

  return (
    <Modal animationType="fade" transparent visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.primary}>
          <SettingsSection label="Theme">
            <RadioSelector options={COLOR_SCHEME_OPTIONS} style={styles.radioSelector} value={colorScheme} />
            <RadioSelector options={['Red', 'Yellow', 'Green', 'Blue', 'White']} value={color} />
          </SettingsSection>
          <View style={styles.actions}>
            <BlockButton color={theme.colors.success} label="Save" style={styles.action} />
            <BlockButton color={theme.colors.danger} label="Cancel" onPress={onCancelPress} style={styles.action} />
          </View>
        </View>
      </View>
    </Modal>
  );
}

SettingsBase.propTypes = {
  theme: PropTypes.object,
};

SettingsBase.defaultProps = {
  theme: THEME_DEFAULT_PROP_TYPE,
};

export const Settings = withTheme(SettingsBase);
