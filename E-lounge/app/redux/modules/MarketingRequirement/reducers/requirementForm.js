import {
  REQUIREMENT_FORM,
  REQUIREMENT_FORM_SUCCESS,
  REQUIREMENT_FORM_FAILURE,
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
    case REQUIREMENT_FORM:
      return {
        ...state,
        loading: true,
      };
    case REQUIREMENT_FORM_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case REQUIREMENT_FORM_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
