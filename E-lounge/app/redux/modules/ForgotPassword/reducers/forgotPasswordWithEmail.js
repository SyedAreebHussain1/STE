import {
  FORGOT_PASSWORD_WITH_EMAIL,
  FORGOT_PASSWORD_WITH_EMAIL_FAILURE,
  FORGOT_PASSWORD_WITH_EMAIL_SUCCESS,
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
    case FORGOT_PASSWORD_WITH_EMAIL:
      return {
        ...state,
        loading: true,
      };
    case FORGOT_PASSWORD_WITH_EMAIL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case FORGOT_PASSWORD_WITH_EMAIL_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
