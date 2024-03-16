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
import { settingsModalActiveDuck } from 'store/settings/settings-modal-active/settings-modal-active';
import { settingsEditDuck } from 'store/settings/settings-edit/settings-edit';
import { SETTINGS_COLOR_OPTIONS } from 'constants/settings-color-options';
import { cancelEditSettings, requestSaveSettings } from 'store/settings/settings';
import { ActivityIndicatorOverlay } from 'components/activity-indicator-overlay/activity-indicator-overlay';
import { selectAnyRequestPending } from 'selectors/select-any-request-pending/select-any-request-pending';
import { settingsEditSaveDuck } from 'store/settings/settings-edit-save/settings-edit-save';
import { settingsDisplayDuck } from 'store/settings/settings-display/settings-display';

const COLOR_SCHEME_OPTIONS = Object.values(COLOR_SCHEMES);
const COLOR_OPTIONS = Object.keys(SETTINGS_COLOR_OPTIONS);

function createStyleSheet({ theme = THEME_DEFAULT_PROP_TYPE }) {
  const backgroundColor = theme.dark ? theme.colors.white : theme.colors.black;

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
      backgroundColor: Color(backgroundColor).alpha(0.3).string(),
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

  const handleOnToggleColor = (color) => dispatch(settingsEditDuck.actions.updateColor(color));
  const handleOnToggleColorScheme = (colorScheme) => dispatch(settingsEditDuck.actions.updateColorScheme(colorScheme));
  const onCancelPress = () => dispatch(cancelEditSettings());
  const onSavePress = () => dispatch(requestSaveSettings());

  const color = useSelector(settingsEditDuck.select.color);
  const colorScheme = useSelector(settingsEditDuck.select.colorScheme);
  const isVisible = useSelector(settingsModalActiveDuck.select.state);

  const isLoading = useSelector((state) =>
    selectAnyRequestPending(state, [settingsEditSaveDuck.select.status, settingsDisplayDuck.select.status]),
  );

  const styles = createStyleSheet(props);

  return (
    <Modal animationType="fade" transparent visible={isVisible}>
      <View style={styles.container}>
        <View style={styles.primary}>
          <SettingsSection label="Theme">
            <RadioSelector
              activeColor={theme.colors.primary}
              onToggle={handleOnToggleColorScheme}
              options={COLOR_SCHEME_OPTIONS}
              style={styles.radioSelector}
              value={colorScheme}
            />
            <RadioSelector
              activeColor={theme.colors.primary}
              onToggle={handleOnToggleColor}
              options={COLOR_OPTIONS}
              value={color}
            />
          </SettingsSection>
          <View style={styles.actions}>
            <BlockButton color={theme.colors.primary} label="Save" onPress={onSavePress} style={styles.action} />
            <BlockButton color={theme.colors.primary} label="Cancel" onPress={onCancelPress} style={styles.action} />
          </View>
        </View>
      </View>
      <ActivityIndicatorOverlay isActive={isLoading} />
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
