import { Appearance } from 'react-native';
import { connect } from 'react-redux';
import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { updateColorScheme } from 'store/color-scheme/color-scheme';

const mapDispatchToProps = (dispatch) => {
  return {
    onAppearanceChange: (colorScheme) => dispatch(updateColorScheme(colorScheme)),
  };
};

function withAppearanceChangeListenerBase(WrappedComponent) {
  function WithAppearanceChangeListener(props) {
    const { onAppearanceChange, ...other } = props;

    useEffect(() => {
      const initialValue = Appearance.getColorScheme();
      onAppearanceChange(initialValue);

      Appearance.addChangeListener(({ colorScheme }) => {
        onAppearanceChange(colorScheme);
      });
    }, []);

    // eslint-disable-next-line react/jsx-props-no-spreading
    return <WrappedComponent {...other} />;
  }

  WithAppearanceChangeListener.displayName = `${WrappedComponent.displayName || WrappedComponent.name}WithAppearanceChangeListener`;
  WithAppearanceChangeListener.propTypes = {
    onAppearanceChange: PropTypes.func,
  };

  WithAppearanceChangeListener.defaultProps = {
    onAppearanceChange: () => {},
  };

  return WithAppearanceChangeListener;
}

export function withAppearanceChangeListener(WrappedComponent) {
  return connect(undefined, mapDispatchToProps)(withAppearanceChangeListenerBase(WrappedComponent));
}
