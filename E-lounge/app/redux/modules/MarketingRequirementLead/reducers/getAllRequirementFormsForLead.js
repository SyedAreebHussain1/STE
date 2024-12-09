import {
  GET_ALL_REQUIREMENT_FORMS_FOR_LEAD,
  GET_ALL_REQUIREMENT_FORMS_FOR_LEAD_SUCCESS,
  GET_ALL_REQUIREMENT_FORMS_FOR_LEAD_FAILURE,
  CLEAR_GET_ALL_REQUIREMENT_FORMS_FOR_LEAD,
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
    case GET_ALL_REQUIREMENT_FORMS_FOR_LEAD:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_REQUIREMENT_FORMS_FOR_LEAD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_ALL_REQUIREMENT_FORMS_FOR_LEAD_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
    case CLEAR_GET_ALL_REQUIREMENT_FORMS_FOR_LEAD:
      return {
        ...state,
        data: null,
        loading: false,
        error: null,
      };
  }
}
