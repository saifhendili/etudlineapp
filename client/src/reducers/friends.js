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
  GET_FRIENDS,
  DELETE_FRIENDS,
  GETNOTIFICATIONREQ,
} from '../actions/Types';

const initialState = {
  sendrequest: [],
  friendrequest: [],
  friends: [],
  friendreqnotif: [],
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
        friendreqnotif: payload,
        friendrequest: payload,
      };
    case REJECT_SENDREQUESTFRIEND:
      return {
        ...state,
        sendrequest: payload,
        friendreqnotif: payload,
      };
    case ACCEPT_FRIEND:
      return {
        ...state,
        friendreqnotif: payload,
        friendrequest: payload,
      };
    case GET_FRIENDS:
    case DELETE_FRIENDS:
      return {
        ...state,
        friends: payload,
      };
    case GETNOTIFICATIONREQ:
      return {
        ...state,
        friendreqnotif: payload,
      };
    default:
      return state;
  }
}
