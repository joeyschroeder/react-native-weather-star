import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { dimensionsOrientationDuck } from 'store/dimensions-orientation/dimensions-orientation';
import { Dimensions } from 'react-native';
import { getOrientationFromWindow } from 'utils/get-orientation-from-window/get-orientation-from-window';

function withDimensionsOrientationChangeListenerBase(WrappedComponent) {
  function WithDimensionsOrientationChangeListener(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      const initialWindow = Dimensions.get('window');
      const orientation = getOrientationFromWindow(initialWindow);

      dispatch(
        dimensionsOrientationDuck.actions.update({
          width: initialWindow.width,
          height: initialWindow.height,
          orientation,
        }),
      );

      Dimensions.addEventListener('change', ({ window }) => {
        dispatch(
          dimensionsOrientationDuck.actions.update({
            height: window.width,
            orientation: getOrientationFromWindow(window),
            width: window.width,
          }),
        );
      });
    }, []);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...props} />;
  }

  WithDimensionsOrientationChangeListener.displayName = `${WrappedComponent.displayName || WrappedComponent.name}WithDimensionsOrientationChangeListener`;

  return WithDimensionsOrientationChangeListener;
}

export function withDimensionsOrientationChangeListener(WrappedComponent) {
  return withDimensionsOrientationChangeListenerBase(WrappedComponent);
}
