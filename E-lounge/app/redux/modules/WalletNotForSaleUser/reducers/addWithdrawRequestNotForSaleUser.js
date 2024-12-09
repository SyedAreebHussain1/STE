import {
  ADD_WITHDRAW_REQUEST_NOT_FOR_USER,
  ADD_WITHDRAW_REQUEST_NOT_FOR_USER_FAILURE,
  ADD_WITHDRAW_REQUEST_NOT_FOR_USER_SUCCESS,
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
    case ADD_WITHDRAW_REQUEST_NOT_FOR_USER:
      return {
        ...state,
        loading: true,
      };
    case ADD_WITHDRAW_REQUEST_NOT_FOR_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case ADD_WITHDRAW_REQUEST_NOT_FOR_USER_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
