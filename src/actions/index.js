import * as types from '../constants';
import contacts from '../assets/contacts.json';
import trends from '../assets/trends.json';
import tweets from '../assets/tweets.json';
import user from '../assets/user.json';

export const getContacts = () => ({ type: types.GET_CONTACTS, payload: contacts });
export const getTrends = () => ({ type: types.GET_TRENDS, payload: trends });
export const getTweets = () => ({ type: types.GET_TWEETS, payload: tweets });
export const addTweet = payload => ({ type: types.ADD_TWEET, payload });
export const likeTweet = payload => ({ type: types.LIKE_TWEET, payload });
export const getUser = () => ({ type: types.GET_USER, payload: user });
export const followUser = payload => ({ type: types.FOLLOW_USER, payload });
export const unfollowUser = payload => ({ type: types.UNFOLLOW_USER, payload });
