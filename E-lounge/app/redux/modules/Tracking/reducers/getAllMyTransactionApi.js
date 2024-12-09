import {
  MY_TRANSACTION_HISTORY,
  MY_TRANSACTION_HISTORY_SUCCESS,
  MY_TRANSACTION_HISTORY_FAILURE,
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
    case MY_TRANSACTION_HISTORY:
      return {
        ...state,
        loading: true,
      };
    case MY_TRANSACTION_HISTORY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case MY_TRANSACTION_HISTORY_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
