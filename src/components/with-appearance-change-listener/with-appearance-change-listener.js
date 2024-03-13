import { Appearance } from 'react-native';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react';
import { updateColorScheme } from 'store/color-scheme/color-scheme';

function withAppearanceChangeListenerBase(WrappedComponent) {
  function WithAppearanceChangeListener(props) {
    const dispatch = useDispatch();

    useEffect(() => {
      const initialValue = Appearance.getColorScheme();
      dispatch(updateColorScheme(initialValue));

      Appearance.addChangeListener(({ colorScheme }) => {
        dispatch(updateColorScheme(colorScheme));
      });
    }, []);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...props} />;
  }

  WithAppearanceChangeListener.displayName = `${WrappedComponent.displayName || WrappedComponent.name}WithAppearanceChangeListener`;

  return WithAppearanceChangeListener;
}

export function withAppearanceChangeListener(WrappedComponent) {
  return withAppearanceChangeListenerBase(WrappedComponent);
}
