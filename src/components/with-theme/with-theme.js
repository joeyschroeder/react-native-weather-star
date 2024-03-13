import { connect } from 'react-redux';
import { selectTheme } from 'selectors/select-theme/select-theme';

const mapStateToProps = (state) => {
  return {
    theme: selectTheme(state),
  };
};

export const withTheme = (component) => connect(mapStateToProps)(component);
