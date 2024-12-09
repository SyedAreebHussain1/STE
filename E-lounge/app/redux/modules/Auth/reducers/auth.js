import { LOGIN, LOGIN_SUCCESS, LOGIN_FAILURE } from "../constants";

const initialState = {
  userData: null,
  isAuth: false,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
    case LOGIN:
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
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        userData: null,
        isAuth: false,
        loading: false,
        error: action.error,
      };
  }
}
