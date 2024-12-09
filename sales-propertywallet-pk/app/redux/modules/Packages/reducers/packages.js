import {
  GET_PACKAGES,
  GET_PACKAGES_SUCCESS,
  GET_PACKAGES_FAILURE,
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
    case GET_PACKAGES:
      return {
        ...state,
        loading: true,
      };
    case GET_PACKAGES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_PACKAGES_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
