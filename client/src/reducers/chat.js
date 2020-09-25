import {
  GET_ROOM,
  GET_MESSAGES,
  DELETE_MESSAGES,
  NEW_MESSAGE,
} from '../actions/Types';

const initialState = {
  room: [],
  messages: [],
  mynewmessage: [],
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
    case NEW_MESSAGE:
      return {
        ...state,
        mynewmessage: payload,
      };
    default:
      return state;
  }
}
