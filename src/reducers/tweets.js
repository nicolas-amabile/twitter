import {
  GET_TWEETS,
  ADD_TWEET,
  ADD_COMMENT,
  LIKE_TWEET
} from '../constants';

export default function tweets(state = [], action) {
  switch (action.type) {
    case GET_TWEETS:
      return action.payload;
    case ADD_TWEET:
      return [...state, action.payload];
    case LIKE_TWEET:
      // TODO: 
      return state;
    default:
      return state;
  }
}
