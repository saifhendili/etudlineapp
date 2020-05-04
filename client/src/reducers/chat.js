import { GET_ROOM, GET_MESSAGES } from '../actions/Types';

const initialState = {
  room: [],
  messages: [],
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ROOM:
      return {
        ...state,
        room: payload,
      };
    case GET_MESSAGES:
      return {
        ...state,
        messages: payload,
      };
    default:
      return state;
  }
}
