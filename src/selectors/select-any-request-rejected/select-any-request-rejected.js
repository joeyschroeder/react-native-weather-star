import { ASYNC_THUNK_LOADING_STATES } from '../../constants/async-thunk-loading-states';

export const selectAnyRequestRejected = (state, selectors) => {
  return selectors.some((selector) => selector(state) === ASYNC_THUNK_LOADING_STATES.REJECTED);
};
