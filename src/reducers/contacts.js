import { GET_CONTACTS } from '../constants';

export default function contacts(state = [], action) {
  switch (action.type) {
    case GET_CONTACTS:
      return action.payload;
    default:
      return state;
  }
}
