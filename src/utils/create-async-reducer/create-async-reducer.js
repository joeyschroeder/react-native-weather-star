/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ASYNC_THUNK_LOADING_STATES } from '../../constants/async-thunk-loading-states';
import { ASYNC_THUNK_TYPES } from '../../constants/async-thunk-types';

export const createAsyncReducer = ({ initialState = {}, name, requestFunc: requestFuncParam, requestOnce = false }) => {
  if (!name) throw new Error('name is required');
  if (!requestFuncParam) throw new Error('requestFunc is required');

  const selectLoading = (state) => state[name]?.loading || ASYNC_THUNK_LOADING_STATES.IDLE;

  function requestFunc(args, thunkAPI) {
    const { getState } = thunkAPI;
    if (requestOnce && selectLoading(getState()) === ASYNC_THUNK_LOADING_STATES.FULFILLED) return;

    return requestFuncParam(args, thunkAPI);
  }

  const request = createAsyncThunk(`${name}/request`, requestFunc);

  const slice = createSlice({
    name,
    initialState: {
      data: initialState,
      loading: ASYNC_THUNK_LOADING_STATES.IDLE,
    },
    extraReducers: (builder) => {
      builder.addCase(request[ASYNC_THUNK_TYPES.PENDING], (state) => {
        state.loading = ASYNC_THUNK_LOADING_STATES.PENDING;
      });
      builder.addCase(request[ASYNC_THUNK_TYPES.FULFILLED], (state, action) => {
        state.loading = ASYNC_THUNK_LOADING_STATES.FULFILLED;
        state.data = action.payload;
      });
      builder.addCase(request[ASYNC_THUNK_TYPES.REJECTED], (state) => {
        state.loading = ASYNC_THUNK_LOADING_STATES.REJECTED;
        state.data = initialState.data;
      });
    },
  });

  const { reducer } = slice;

  return {
    reducer,
    requestThunk: request,
    selectData: (state) => state[name]?.data || initialState,
    selectLoading: (state) => state[name]?.loading || ASYNC_THUNK_LOADING_STATES.IDLE,
  };
};
