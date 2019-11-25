import { combineReducers } from 'redux';
import user from './user';
import tweets from './tweets';
import contacts from './contacts';
import trends from './trends';

const rootReducer = combineReducers({
  user,
  tweets,
  contacts,
  trends,
});

export default rootReducer;
