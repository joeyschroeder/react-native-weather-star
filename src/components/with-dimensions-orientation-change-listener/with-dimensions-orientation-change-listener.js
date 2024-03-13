import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { updateDimensionsOrientation } from 'store/dimensions-orientation/dimensions-orientation';
import { Dimensions } from 'react-native';
import { getOrientationFromWindow } from 'utils/get-orientation-from-window/get-orientation-from-window';

const mapDispatchToProps = (dispatch) => {
  return {
    onDimensionsOrientationChange: (colorScheme) => dispatch(updateDimensionsOrientation(colorScheme)),
  };
};

function withDimensionsOrientationChangeListenerBase(WrappedComponent) {
  function WithDimensionsOrientationChangeListener(props) {
    const { onDimensionsOrientationChange, ...other } = props;

    useEffect(() => {
      const initialWindow = Dimensions.get('window');
      const orientation = getOrientationFromWindow(initialWindow);

      onDimensionsOrientationChange({ width: initialWindow.width, height: initialWindow.height, orientation });

      Dimensions.addEventListener('change', ({ window }) => {
        onDimensionsOrientationChange({
          height: window.width,
          orientation: getOrientationFromWindow(window),
          width: window.width,
        });
      });
    }, []);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...other} />;
  }

  WithDimensionsOrientationChangeListener.displayName = `${WrappedComponent.displayName || WrappedComponent.name}WithDimensionsOrientationChangeListener`;
  WithDimensionsOrientationChangeListener.propTypes = {
    onDimensionsOrientationChange: PropTypes.func,
  };

  WithDimensionsOrientationChangeListener.defaultProps = {
    onDimensionsOrientationChange: () => {},
  };

  return WithDimensionsOrientationChangeListener;
}

export function withDimensionsOrientationChangeListener(WrappedComponent) {
  return connect(undefined, mapDispatchToProps)(withDimensionsOrientationChangeListenerBase(WrappedComponent));
}
