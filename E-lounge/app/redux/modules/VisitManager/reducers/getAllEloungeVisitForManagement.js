import {
  GET_ALL_ELOUNGE_VISIT_FOR_MANAGEMENT,
  GET_ALL_ELOUNGE_VISIT_FOR_MANAGEMENT_SUCCESS,
  GET_ALL_ELOUNGE_VISIT_FOR_MANAGEMENT_FAILURE,
  CLEAR_GET_ALL_ELOUNGE_VISIT_FOR_MANAGEMENT,
} from "../contants";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
    case GET_ALL_ELOUNGE_VISIT_FOR_MANAGEMENT:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_ELOUNGE_VISIT_FOR_MANAGEMENT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_ALL_ELOUNGE_VISIT_FOR_MANAGEMENT_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
    case CLEAR_GET_ALL_ELOUNGE_VISIT_FOR_MANAGEMENT:
      return {
        ...state,
        data: null,
        loading: false,
        error: null,
      };
  }
}
