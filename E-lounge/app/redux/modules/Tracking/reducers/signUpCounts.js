import {
  SIGN_UP_COUNTS,
  SIGN_UP_COUNTS_SUCCESS,
  SIGN_UP_COUNTS_FAILURE,
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
    case SIGN_UP_COUNTS:
      return {
        ...state,
        loading: true,
      };
    case SIGN_UP_COUNTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case SIGN_UP_COUNTS_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
