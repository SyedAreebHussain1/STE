import {
  GET_SIGNUP_COUNTS_FOR_LEAD,
  GET_SIGNUP_COUNTS_FOR_LEAD_SUCCESS,
  GET_SIGNUP_COUNTS_FOR_LEAD_FAILURE,
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
    case GET_SIGNUP_COUNTS_FOR_LEAD:
      return {
        ...state,
        loading: true,
      };
    case GET_SIGNUP_COUNTS_FOR_LEAD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_SIGNUP_COUNTS_FOR_LEAD_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
