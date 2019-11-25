import {
  GET_TWEETS,
  ADD_TWEET,
  ADD_COMMENT
} from '../constants';

export default function tweets(state = [], action) {
  switch (action.type) {
    case GET_TWEETS:
      return action.payload;
    case ADD_TWEET:
      return [...state, action.payload];
    case ADD_COMMENT: {
      // TODO: Pending
      return state;
    }
    default:
      return state;
  }
}
