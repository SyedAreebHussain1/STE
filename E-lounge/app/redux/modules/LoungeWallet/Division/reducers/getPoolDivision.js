import {
  POOL_DIVISION,
  POOL_DIVISION_SUCCESS,
  POOL_DIVISION_FAILURE,
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
    case POOL_DIVISION:
      return {
        ...state,
        loading: true,
      };
    case POOL_DIVISION_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case POOL_DIVISION_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
