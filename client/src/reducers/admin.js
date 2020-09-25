import {
  // REGISTER_SUCCESS,
  // REGISTER_FAILADMIN,
  USER_LOADEDADMIN,
  AUTH_ERRORADMIN,
  LOGIN_SUCCESSADMIN,
  LOGIN_FAILADMIN,
  LOGOUTADMIN,
  GETALLUSERS,
  GETALLPOSTS,
  DELETEPOSTS,
  DELETEUSER,
} from '../actions/Types';

const initialState = {
  token: localStorage.getItem('token'),
  isAuthenticatedadmin: null,
  loading: true,
  user: null,
  users: [],
  posts: [],
};
export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case USER_LOADEDADMIN:
    case LOGIN_SUCCESSADMIN:
      localStorage.setItem('token', payload.token);
      return {
        ...state,
        ...payload,
        isAuthenticatedadmin: true,
        loading: false,
      };
    case AUTH_ERRORADMIN:
    case LOGIN_FAILADMIN:
    case LOGOUTADMIN:
      localStorage.removeItem('token');
      return {
        ...state,
        token: null,
        isAuthenticatedadmin: false,
        loading: false,
      };
    case GETALLUSERS:
      return {
        ...state,
        users: payload,
      };
    case GETALLPOSTS:
      return {
        ...state,
        posts: payload,
      };
    case DELETEPOSTS:
      return {
        ...state,
        posts: payload,
      };
    case DELETEUSER:
      return {
        ...state,
        users: payload,
      };
    default:
      return state;
  }
}
