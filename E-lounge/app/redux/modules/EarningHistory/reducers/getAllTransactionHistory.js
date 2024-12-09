import {
  GET_ALL_TRANSACTION_HISTORY,
  GET_ALL_TRANSACTION_HISTORY_SUCCESS,
  GET_ALL_TRANSACTION_HISTORY_FAILURE,
  CLEAR_GET_ALL_TRANSACTION_HISTORY,
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
    case GET_ALL_TRANSACTION_HISTORY:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_TRANSACTION_HISTORY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_ALL_TRANSACTION_HISTORY_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
