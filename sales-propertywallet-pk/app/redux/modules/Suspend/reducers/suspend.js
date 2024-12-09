import {
  POST_SUSPEND_REQUEST,
  POST_SUSPEND_REQUEST_FAILURE,
  POST_SUSPEND_REQUEST_SUCCESS,
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
    case POST_SUSPEND_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case POST_SUSPEND_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case POST_SUSPEND_REQUEST_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
