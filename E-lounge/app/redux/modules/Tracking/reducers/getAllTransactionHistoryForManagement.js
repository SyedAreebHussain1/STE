import {
  HISTORY_FOR_MANAGEMENT,
  HISTORY_FOR_MANAGEMENT_SUCCESS,
  HISTORY_FOR_MANAGEMENT_FAILURE,
  CLEAR_HISTORY_FOR_MANAGEMENT,
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
    case HISTORY_FOR_MANAGEMENT:
      return {
        ...state,
        loading: true,
      };
    case HISTORY_FOR_MANAGEMENT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case HISTORY_FOR_MANAGEMENT_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
