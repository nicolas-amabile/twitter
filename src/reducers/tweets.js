import {
  GET_TWEETS,
  ADD_TWEET,
  // ADD_COMMENT,
  LIKE_TWEET,
} from '../constants';
import { sortByDate } from '../utils';

export default function tweets(state = [], action) {
  switch (action.type) {
    case GET_TWEETS:
      return action.payload.sort(sortByDate);
    case ADD_TWEET:
      return [action.payload, ...state];
    case LIKE_TWEET:
      // TODO:
      return state;
    default:
      return state;
  }
}
