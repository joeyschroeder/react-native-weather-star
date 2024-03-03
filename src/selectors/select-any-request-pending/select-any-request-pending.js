import { ASYNC_THUNK_LOADING_STATES } from '../../constants/async-thunk-loading-states';

export const selectAnyRequestPending = (state, selectors) => {
  return selectors.some((selector) => selector(state) === ASYNC_THUNK_LOADING_STATES.PENDING);
};
