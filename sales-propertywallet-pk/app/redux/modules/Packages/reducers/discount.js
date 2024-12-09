import {
  ADD_DISCOUNT_AMOUNT,
  ADD_DISCOUNT_AMOUNT_FAILURE,
  ADD_DISCOUNT_AMOUNT_SUCCESS,
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
    case ADD_DISCOUNT_AMOUNT:
      return {
        ...state,
        loading: true,
      };
    case ADD_DISCOUNT_AMOUNT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case ADD_DISCOUNT_AMOUNT_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
