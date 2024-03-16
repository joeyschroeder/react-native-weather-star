import { createSlice } from '@reduxjs/toolkit';
import { createPath } from './create-path/create-path';
import { createReducers } from './create-reducers/create-reducers';
import { createSelectors } from './create-selectors/create-selectors';
import { createSelectState } from './create-select-state/create-select-state';

export function createDuck(config) {
  if (typeof config !== 'object') throw new Error('config is not object');

  const { initialState, name, parentNames } = config;
  if (!name) throw new Error('name is undefined');

  const path = createPath(parentNames, name);
  const selectState = createSelectState(path, initialState);

  const selectors = createSelectors(selectState, initialState);

  const slice = createSlice({
    initialState,
    name,
    reducers: createReducers(initialState),
    selectors,
  });

  return {
    actions: slice.actions,
    initialState: slice.getInitialState(),
    name,
    path,
    reducer: slice.reducer,
    select: {
      ...slice.getSelectors(),
      state: selectState,
    },
  };
}
