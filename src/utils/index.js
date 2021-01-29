import React from 'react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import rootReducer from '../reducers';
import {DESC_ORDER} from "../constants";

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

/**
 * Returns the array of tweets sorted by date
 * @param tweetsArr: Array of tweets
 * @param order: Order direction
 * @returns {Object}
 */

export function sortTweetsByDate(tweetsArr = [], order = DESC_ORDER) {
  let sortedTweets = [...tweetsArr]

  return sortedTweets.sort(function(a,b){
    return order === DESC_ORDER
      ? new Date(b.date) - new Date(a.date)
      : new Date(a.date) - new Date(b.date)
  });
}

export const isEmpty = obj => Object.keys(obj).length === 0;
