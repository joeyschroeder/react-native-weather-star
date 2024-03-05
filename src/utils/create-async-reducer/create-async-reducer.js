/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { ASYNC_THUNK_STATUS_STATES } from '../../constants/async-thunk-status-states';
import { ASYNC_THUNK_TYPES } from '../../constants/async-thunk-types';

export const createAsyncReducer = ({
  initialState = {},
  name,
  requestFunc: requestFuncParam,
  requestOnce = false,
  resetOnReject = false,
}) => {
  if (!name) throw new Error('name is required');
  if (!requestFuncParam) throw new Error('requestFunc is required');

  const selectStatus = (state) => state[name]?.status || ASYNC_THUNK_STATUS_STATES.IDLE;

  function requestFunc(args, thunkAPI) {
    const { getState } = thunkAPI;
    if (requestOnce && selectStatus(getState()) === ASYNC_THUNK_STATUS_STATES.FULFILLED) return;

    return requestFuncParam(args, thunkAPI);
  }

  const request = createAsyncThunk(`${name}/request`, requestFunc);

  const slice = createSlice({
    name,
    initialState: {
      data: initialState,
      loading: ASYNC_THUNK_STATUS_STATES.IDLE,
    },
    extraReducers: (builder) => {
      builder.addCase(request[ASYNC_THUNK_TYPES.PENDING], (state) => {
        state.status = ASYNC_THUNK_STATUS_STATES.PENDING;
      });
      builder.addCase(request[ASYNC_THUNK_TYPES.FULFILLED], (state, action) => {
        state.status = ASYNC_THUNK_STATUS_STATES.FULFILLED;
        state.data = action.payload;
      });
      builder.addCase(request[ASYNC_THUNK_TYPES.REJECTED], (state) => {
        state.status = ASYNC_THUNK_STATUS_STATES.REJECTED;
        if (resetOnReject) state.data = initialState.data;
      });
    },
  });

  const { reducer } = slice;

  return {
    reducer,
    requestThunk: request,
    selectData: (state) => state[name]?.data || initialState,
    selectStatus: (state) => state[name]?.status,
  };
};
