import {
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  UPDATE_PROFILE,
  GET_PROFILES,
  GET_SEARCH,
  //     GET_REPOS,
  //     NO_REPOS
} from '../actions/Types';

const initialState = {
  profile: null,
  profiles: [],
  search: '',
  loading: true,
  error: {},
};
export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case GET_SEARCH:
      return {
        ...state,
        search: payload,
      };
    case GET_PROFILE:
    case UPDATE_PROFILE:
      return {
        ...state,
        profile: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
        // profile: null,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profile: null,

        loading: false,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };

    default:
      return state;
  }
}
