import { Pressable, View } from 'react-native';
import PropTypes from 'prop-types';
import React from 'react';
import { WeatherIcon } from 'components/weather-icon/weather-icon';
import { scaledValue } from 'utils/scaled-value/scaled-value';
import { AnimationSpin } from 'components/animation-spin/animation-spin';
import { withTheme } from 'components/with-theme/with-theme';
import { MaterialIcons } from '@expo/vector-icons';
import { THEME_DEFAULT_PROP_TYPE } from 'constants/theme-default-prop-type';
import { useDispatch, useSelector } from 'react-redux';
import { selectAnyRequestRejected } from 'selectors/select-any-request-rejected/select-any-request-rejected';
import { selectAnyRequestPending } from 'selectors/select-any-request-pending/select-any-request-pending';
import { selectLocationStatus } from 'store/location/location';
import { selectWeatherAlertsStatus } from 'store/weather/weather-alerts/weather-alerts';
import { selectWeatherForecastStatus } from 'store/weather/weather-forecast/weather-forecast';
import { selectWeatherMetadataStatus } from 'store/weather/weather-metadata/weather-metadata';
import { requestWeatherByLocation } from 'thunks/request-weather-by-location/request-weather-by-location';

const REQUEST_SELECTORS = [
  selectLocationStatus,
  selectWeatherAlertsStatus,
  selectWeatherForecastStatus,
  selectWeatherMetadataStatus,
];

function HeaderRefreshButtonBase(props) {
  const { style, theme } = props;

  const dispatch = useDispatch();
  const onPress = () => dispatch(requestWeatherByLocation());

  const hasError = useSelector((state) => selectAnyRequestRejected(state, REQUEST_SELECTORS));
  const isLoading = useSelector((state) => selectAnyRequestPending(state, REQUEST_SELECTORS));
  const iconSize = scaledValue(36);

  const icon =
    hasError && !isLoading ? (
      <MaterialIcons color={theme.colors.danger} name="error" size={iconSize} />
    ) : (
      <WeatherIcon name="radar" size={iconSize} />
    );

  return (
    <View style={style}>
      <Pressable onPress={onPress}>
        <AnimationSpin isAnimating={isLoading} isLooping>
          {icon}
        </AnimationSpin>
      </Pressable>
    </View>
  );
}

HeaderRefreshButtonBase.propTypes = {
  style: PropTypes.object,
  theme: PropTypes.object,
};

HeaderRefreshButtonBase.defaultProps = {
  style: undefined,
  theme: THEME_DEFAULT_PROP_TYPE,
};

export const HeaderRefreshButton = withTheme(HeaderRefreshButtonBase);
