import {
  GET_ALL_SESSIONS,
  GET_ALL_SESSIONS_SUCCESS,
  GET_ALL_SESSIONS_FAILURE,
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
    case GET_ALL_SESSIONS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_SESSIONS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_ALL_SESSIONS_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
