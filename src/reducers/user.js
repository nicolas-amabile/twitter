import { GET_USER, FOLLOW_USER, UNFOLLOW_USER } from '../constants';

export default function user(state = {}, action) {
  switch (action.type) {
    case GET_USER:
      return action.payload;
    case FOLLOW_USER:
      return {
        ...state,
        contacts: [...state.contacts, action.payload],
      };
    case UNFOLLOW_USER:
      // TODO: Remove the contact
      return state;
    default:
      return state;
  }
}
