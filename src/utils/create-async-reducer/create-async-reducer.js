/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ASYNC_THUNK_LOADING_STATES } from '../../constants/async-thunk-loading-states';
import { ASYNC_THUNK_TYPES } from '../../constants/async-thunk-types';

export const createAsyncReducer = ({ initialState = {}, name, requestFunc }) => {
  if (!name) throw new Error('name is required');
  if (!requestFunc) throw new Error('requestFunc is required');

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
