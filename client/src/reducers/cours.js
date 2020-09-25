import {
  GET_COURS,
  COURS_ERROR,
  UPDATE_LIKESCOURS,
  DELETE_COUR,
  ADD_COUR,
  GET_COUR,
  ADD_COMMENT_COURS,
  REMOVE_COMMENT_COURS,
} from '../actions/Types';
const initialState = {
  cours: [],
  cour: null,
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_COURS:
      return {
        ...state,
        cours: payload,
        loading: false,
      };
    case GET_COUR:
      return {
        ...state,
        cour: payload,
        loading: false,
      };
    case ADD_COUR:
      return {
        ...state,
        cours: [payload, ...state.cours],
        loading: false,
      };
    case DELETE_COUR:
      return {
        ...state,
        cours: state.cours.filter((cour) => cour._id !== payload),
        loading: false,
      };
    case COURS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case UPDATE_LIKESCOURS:
      return {
        ...state,
        cours: state.cours.map((cour) =>
          cour._id === payload.id ? { ...cour, likes: payload.likes } : cour
        ),
        loading: false,
      };
    case ADD_COMMENT_COURS:
      return {
        ...state,
        cour: { ...state.cour, comments: payload },
        loading: false,
      };
    case REMOVE_COMMENT_COURS:
      return {
        ...state,
        cour: {
          ...state.cour,
          comments: state.cour.comments.filter(
            (comment) => comment._id !== payload
          ),
        },
        loading: false,
      };
    default:
      return state;
  }
}
