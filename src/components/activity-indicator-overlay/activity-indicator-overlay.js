import { StyleSheet, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { withTheme } from 'components/with-theme/with-theme';
import { THEME_DEFAULT_PROP_TYPE } from 'constants/theme-default-prop-type';
import Color from 'color';
import { AntDesign } from '@expo/vector-icons';
import { AnimationSpin } from 'components/animation-spin/animation-spin';
import { scaledValue } from 'utils/scaled-value/scaled-value';

function createStyleSheet({ theme = THEME_DEFAULT_PROP_TYPE }) {
  return StyleSheet.create({
    container: {
      ...StyleSheet.absoluteFill,
      alignItems: 'center',
      backgroundColor: Color(theme.colors.background).alpha(0.5).string(),
      height: theme.dimensions.height,
      justifyContent: 'center',
      zIndex: 20,
    },
  });
}

function ActivityIndicatorOverlayBase(props) {
  const { isActive, theme } = props;

  if (!isActive) return null;

  const styles = createStyleSheet(props);

  return (
    <View style={styles.container}>
      <AnimationSpin isAnimating isLooping>
        <AntDesign color={theme.colors.primary} name="loading1" size={scaledValue(300)} />
      </AnimationSpin>
    </View>
  );
}

ActivityIndicatorOverlayBase.propTypes = {
  isActive: PropTypes.bool,
  theme: PropTypes.object,
};

ActivityIndicatorOverlayBase.defaultProps = {
  isActive: false,
  theme: THEME_DEFAULT_PROP_TYPE,
};

export const ActivityIndicatorOverlay = withTheme(ActivityIndicatorOverlayBase);
