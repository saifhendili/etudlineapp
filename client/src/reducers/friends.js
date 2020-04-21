import {
  GET_REQUESTFRIEND,
  SEND_REQUEST,
  FRIEND_REQUEST,
  GET_SENDREQUEST,
} from '../actions/Types';

const initialState = {
  sendrequest: [],
  friendrequest: [],
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SEND_REQUEST:
      return {
        ...state,
        sendrequest: payload,
      };
    case FRIEND_REQUEST:
      return {
        ...state,
        friendrequest: payload,
      };
    case GET_SENDREQUEST:
      return {
        ...state,
        sendrequest: payload,
      };
    case GET_REQUESTFRIEND:
      return {
        ...state,
        friendrequest: payload,
      };
    default:
      return state;
  }
}
