import {
  GET_ENCADREMENTS,
  DELETE_ENCADREMENT,
  ADD_ENCADREMENT,
  GET_ENCADREMENT,
  UPDATE_ENCADREMENT,
} from '../actions/Types';

const initialState = {
  Encadrements: [],
  Encadrement: null,
  loading: true,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_ENCADREMENTS:
      return {
        ...state,
        Encadrements: payload,
        loading: false,
      };
    case GET_ENCADREMENT:
      return {
        ...state,
        Encadrement: payload,
        loading: false,
      };
    case ADD_ENCADREMENT:
      return {
        ...state,
        Encadrements: [payload, ...state.Encadrements],
        loading: false,
      };
    case DELETE_ENCADREMENT:
      return {
        ...state,
        Encadrements: state.Encadrements.filter(
          (Encadrement) => Encadrement._id !== payload
        ),
        loading: false,
      };

    case UPDATE_ENCADREMENT:
      return {
        ...state,
        Encadrement: payload,
        loading: false,
      };

    default:
      return state;
  }
}
