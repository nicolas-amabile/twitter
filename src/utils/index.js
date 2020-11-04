import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import moment from 'moment';
import rootReducer from '../reducers';

export function renderWithRedux(
  ui,
  { initialState, store = createStore(rootReducer, initialState) } = {},
) {
  return {
    ...render(<Provider store={store}>{ui}</Provider>),
    // adding `store` to the returned utilities to allow us
    // to reference it in our tests (just try to avoid using
    // this to test implementation details).
    store,
  };
}

export const isEmpty = obj => Object.keys(obj).length === 0;

export const formatDate = (date) => {
  const momentDate = new moment(new Date(date));
  const today = new moment();

  if (today.isSame(momentDate, 'day')) {
    return 'Today';
  }

  if (today.subtract(1, 'day').isSame(momentDate, 'day')) {
    return 'Yesteday';
  }

  return momentDate.format('DD MMM YYYY');
}
