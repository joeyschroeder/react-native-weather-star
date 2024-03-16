/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';
import { get } from 'lodash';

function isInitialStateSingleValue(initialState) {
  return Array.isArray(initialState) || typeof initialState !== 'object';
}

function createPath(...names) {
  const pathValues = names.flat();
  return pathValues.filter((value) => Boolean(value)).join('.');
}

function createReducers(initialState) {
  let reducers;

  // If initialState is a single value, then we only need a single update reducer, else if
  // initialState is an object, then we need an update reducer for each key in the object.
  if (isInitialStateSingleValue(initialState)) {
    reducers = {
      update: (state, { payload }) => {
        return payload;
      },
    };
  } else {
    reducers = Object.keys(initialState).reduce((accumulator, key) => {
      const actionName = `update${key[0].toUpperCase()}${key.slice(1)}`;
      accumulator[actionName] = (state, action) => {
        state[key] = action.payload;
      };

      return accumulator;
    }, {});
  }

  return reducers;
}

function createSelectState(path, initialState) {
  return (state) => get(state, path, initialState);
}

function createSelectors(selectState, initialState) {
  let selectors;

  // If initialState is a single value, then the selectState function is all we need, else if
  // initialState is an object, then we need a selector for each key in the object.
  if (!isInitialStateSingleValue(initialState)) {
    selectors = Object.keys(initialState).reduce((accumulator, key) => {
      accumulator[key] = (state) => selectState(state)?.[key];
      return accumulator;
    }, {});
  }

  return selectors;
}

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
