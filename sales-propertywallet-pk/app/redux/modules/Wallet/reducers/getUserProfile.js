import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_FAILURE,
  CLEAR_USER_PROFILE,
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
    case GET_USER_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case GET_USER_PROFILE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_USER_PROFILE_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
    case CLEAR_USER_PROFILE:
      return {
        ...state,
        data: null,
        loading: false,
        error: null,
      };
  }
}
