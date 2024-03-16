import { useSelector } from 'react-redux';
import React from 'react';
import { selectTheme } from 'selectors/select-theme/select-theme';

function withThemeBase(WrappedComponent) {
  function WithTheme(props) {
    const theme = useSelector(selectTheme);
    return <WrappedComponent {...props} theme={theme} />;
  }

  WithTheme.displayName = `${WrappedComponent.displayName || WrappedComponent.name}WithTheme`;

  return WithTheme;
}

export function withTheme(WrappedComponent) {
  return withThemeBase(WrappedComponent);
}
