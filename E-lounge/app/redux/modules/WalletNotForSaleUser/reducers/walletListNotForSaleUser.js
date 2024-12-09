import {
  GET_WALLET_NOT_FOR_USER_LIST,
  GET_WALLET_NOT_FOR_USER_LIST_FAILURE,
  GET_WALLET_NOT_FOR_USER_LIST_SUCCESS,
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
    case GET_WALLET_NOT_FOR_USER_LIST:
      return {
        ...state,
        loading: true,
      };
    case GET_WALLET_NOT_FOR_USER_LIST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_WALLET_NOT_FOR_USER_LIST_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
