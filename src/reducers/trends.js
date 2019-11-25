import { GET_TRENDS } from '../constants';

export default function trends(state = [], action) {
  switch (action.type) {
    case GET_TRENDS:
      return action.payload;
    default:
      return state;
  }
}
