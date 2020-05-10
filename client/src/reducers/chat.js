import { GET_ROOM, GET_MESSAGES, DELETE_MESSAGES } from '../actions/Types';

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
    case DELETE_MESSAGES:
      return {
        room: [],
        messages: [],
      };
    default:
      return state;
  }
}
