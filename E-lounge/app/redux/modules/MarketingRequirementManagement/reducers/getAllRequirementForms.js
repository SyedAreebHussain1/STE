import {
  GET_ALL_REQUIREMENT_FORMS,
  GET_ALL_REQUIREMENT_FORMS_SUCCESS,
  GET_ALL_REQUIREMENT_FORMS_FAILURE,
  CLEAR_GET_ALL_REQUIREMENT_FORMS,
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
    case GET_ALL_REQUIREMENT_FORMS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_REQUIREMENT_FORMS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_ALL_REQUIREMENT_FORMS_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
    case CLEAR_GET_ALL_REQUIREMENT_FORMS:
      return {
        ...state,
        data: null,
        loading: false,
        error: null,
      };
  }
}
