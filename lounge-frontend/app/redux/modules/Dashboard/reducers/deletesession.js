import {
  DELETE_SESSION,
  DELETE_SESSION_SUCCESS,
  DELETE_SESSION_FAILURE,
} from "../constants";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
    case DELETE_SESSION:
      return {
        ...state,
        loading: true,
      };
    case DELETE_SESSION_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case DELETE_SESSION_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
