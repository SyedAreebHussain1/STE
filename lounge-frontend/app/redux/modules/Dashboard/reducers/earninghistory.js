import {
  GET_EARNING_HISTORY,
  GET_EARNING_HISTORY_SUCCESS,
  GET_EARNING_HISTORY_FAILURE,
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
    case GET_EARNING_HISTORY:
      return {
        ...state,
        loading: true,
      };
    case GET_EARNING_HISTORY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_EARNING_HISTORY_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
