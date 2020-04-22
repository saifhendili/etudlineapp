import {
  GET_REQUESTFRIEND,
  SEND_REQUEST,
  FRIEND_REQUEST,
  GET_SENDREQUEST,
  DELETE_REQUESTFRIEND,
  DELETE_SENDREQUEST,
  REJECT_REQUESTFRIEND,
  REJECT_SENDREQUESTFRIEND,
  ACCEPT_FRIEND,
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
    case DELETE_REQUESTFRIEND:
      return {
        ...state,
        friendrequest: payload,
      };
    case DELETE_SENDREQUEST:
      return {
        ...state,
        sendrequest: payload,
      };
    case REJECT_REQUESTFRIEND:
      return {
        ...state,
        friendrequest: payload,
      };
    case REJECT_SENDREQUESTFRIEND:
      return {
        ...state,
        sendrequest: payload,
      };
    case ACCEPT_FRIEND:
      return {
        ...state,
        friendrequest: payload,
      };
    default:
      return state;
  }
}
