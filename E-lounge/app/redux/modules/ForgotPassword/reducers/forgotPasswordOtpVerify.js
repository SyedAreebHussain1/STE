import {
  FORGOT_PASSWORD_OTP_VERIFY,
  FORGOT_PASSWORD_OTP_VERIFY_FAILURE,
  FORGOT_PASSWORD_OTP_VERIFY_SUCCESS,
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
    case FORGOT_PASSWORD_OTP_VERIFY:
      return {
        ...state,
        loading: true,
      };
    case FORGOT_PASSWORD_OTP_VERIFY_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case FORGOT_PASSWORD_OTP_VERIFY_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
