import {
  GET_TWEETS,
  ADD_TWEET,
  // ADD_COMMENT,
  LIKE_TWEET,
  INCREASE_RETWEET_COUNT,
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
    case INCREASE_RETWEET_COUNT:
      return state.map(tweet => (tweet.id === action.payload.id ? {
        ...tweet,
        retweets: tweet.retweets + 1,
      } : tweet));
    default:
      return state;
  }
}
