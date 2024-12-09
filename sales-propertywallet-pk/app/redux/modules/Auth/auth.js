import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  SIGNUP,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  VERIFICATION_SUCCESS,
  VERIFICATION_FAILURE,
  VERIFICATION,
  SENDOTP,
  SENDOTP_SUCCESS,
  SENDOTP_FAILURE,
} from "./constants";

const initialState = {
  userData: null,
  isAuth: false,
  loading: false,
  error: null,
  signupData: null,
  verificationData: null,
  otpData: null,
  isOnBoardingComplete: false
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
    case LOGIN:
    case SIGNUP:
    case VERIFICATION:
    case SENDOTP:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        userData: action.payload,
        isAuth: true,
        loading: false,
        error: null,
        isOnBoardingComplete: action.payload.isOnBoardingComplete
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        userData: null,
        isAuth: false,
        loading: false,
        error: action.error,
        isOnBoardingComplete: false
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        signupData: action.payload,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case VERIFICATION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        verificationData: action.payload,
      };
    case VERIFICATION_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
      case SENDOTP_SUCCESS:
        return {
          ...state,
          loading: false,
          error: null,
          otpData: action.payload,
        };
      case SENDOTP_FAILURE:
        return {
          ...state,
          loading: false,
          error: action.error,
        };
  }
}
