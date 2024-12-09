import {
  GET_REQUIREMENT_FORM,
  GET_REQUIREMENT_FORM_SUCCESS,
  GET_REQUIREMENT_FORM_FAILURE,
  CLEAR_GET_REQUIREMENT_FORM,
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
    case GET_REQUIREMENT_FORM:
      return {
        ...state,
        loading: true,
      };
    case GET_REQUIREMENT_FORM_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_REQUIREMENT_FORM_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
    case CLEAR_GET_REQUIREMENT_FORM:
      return {
        ...state,
        data: null,
        loading: false,
        error: null,
      };
  }
}
