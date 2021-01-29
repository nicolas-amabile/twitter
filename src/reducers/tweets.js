import {
  GET_TWEETS,
  ADD_TWEET,
  // ADD_COMMENT,
  LIKE_TWEET,
  DESC_ORDER
} from '../constants';
import {sortTweetsByDate} from "../utils";

export default function tweets(state = [], action) {
  switch (action.type) {
    case GET_TWEETS:
      return sortTweetsByDate(action.payload, DESC_ORDER)
    case ADD_TWEET:
      return [...state, action.payload];
    case LIKE_TWEET:
      // TODO:
      return state;
    default:
      return state;
  }
}
