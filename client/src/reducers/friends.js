import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SEND_REQUEST,
  FRIEND_REQUEST,
  ACCOUNT_DELETED,
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

    default:
      return state;
  }
}
