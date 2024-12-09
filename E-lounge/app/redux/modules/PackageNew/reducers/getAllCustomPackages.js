import {
  GET_ALL_CUSTOM_PACKAGES,
  GET_ALL_CUSTOM_PACKAGES_SUCCESS,
  GET_ALL_CUSTOM_PACKAGES_FAILURE,
  CLEAR_GET_ALL_CUSTOM_PACKAGES,
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
    case GET_ALL_CUSTOM_PACKAGES:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_CUSTOM_PACKAGES_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_ALL_CUSTOM_PACKAGES_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
