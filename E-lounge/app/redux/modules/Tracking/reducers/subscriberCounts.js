import {
  SUBCRIBER_COUNTS,
  SUBCRIBER_COUNTS_SUCCESS,
  SUBCRIBER_COUNTS_FAILURE,
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
    case SUBCRIBER_COUNTS:
      return {
        ...state,
        loading: true,
      };
    case SUBCRIBER_COUNTS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case SUBCRIBER_COUNTS_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
