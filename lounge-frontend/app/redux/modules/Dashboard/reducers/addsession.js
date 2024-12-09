import {
  ADD_SESSION,
  ADD_SESSION_SUCCESS,
  ADD_SESSION_FAILURE,
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
    case ADD_SESSION:
      return {
        ...state,
        loading: true,
      };
    case ADD_SESSION_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case ADD_SESSION_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
