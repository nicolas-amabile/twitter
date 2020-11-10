import {
  GET_TWEETS,
  ADD_TWEET,
  // ADD_COMMENT,
  LIKE_TWEET,
} from '../constants';

export default function tweets(state = [], action) {
  switch (action.type) {
    case GET_TWEETS:
      const sortedTweets = action.payload.sort((a, b) => new Date(a.date) - new Date(b.date))
      return [...sortedTweets];
    case ADD_TWEET:
      return [action.payload, ...state];
    case LIKE_TWEET:
      // TODO:
      return state;
    default:
      return state;
  }
}
