import { ASYNC_THUNK_LOADING_STATES } from '../../constants/async-thunk-loading-states';

export const selectAllRequestFulfilled = (state, selectors) => {
  return selectors.every((selector) => selector(state) === ASYNC_THUNK_LOADING_STATES.FULFILLED);
};
