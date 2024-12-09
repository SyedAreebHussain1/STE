import {
  GET_LEAD_LIST_FOR_DROP_DOWN,
  GET_LEAD_LIST_FOR_DROP_DOWN_SUCCESS,
  GET_LEAD_LIST_FOR_DROP_DOWN_FAILURE,
  CLEAR_GET_LEAD_LIST_FOR_DROP_DOWN,
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
    case GET_LEAD_LIST_FOR_DROP_DOWN:
      return {
        ...state,
        loading: true,
      };
    case GET_LEAD_LIST_FOR_DROP_DOWN_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_LEAD_LIST_FOR_DROP_DOWN_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
    case CLEAR_GET_LEAD_LIST_FOR_DROP_DOWN:
      return {
        ...state,
        data: null,
        loading: false,
        error: null,
      };
  }
}
