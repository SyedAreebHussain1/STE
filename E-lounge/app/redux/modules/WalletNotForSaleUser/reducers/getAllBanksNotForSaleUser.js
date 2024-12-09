import {
  GET_ALL_BANKS_LISTS_NOT_FOR_USER,
  GET_ALL_BANKS_LISTS_NOT_FOR_USER_FAILURE,
  GET_ALL_BANKS_LISTS_NOT_FOR_USER_SUCCESS,
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
    case GET_ALL_BANKS_LISTS_NOT_FOR_USER:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_BANKS_LISTS_NOT_FOR_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_ALL_BANKS_LISTS_NOT_FOR_USER_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
