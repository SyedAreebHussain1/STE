import {
  ADD_CHECKOUT,
  ADD_CHECKOUT_FAILURE,
  ADD_CHECKOUT_SUCCESS,
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
    case ADD_CHECKOUT:
      return {
        ...state,
        loading: true,
      };
    case ADD_CHECKOUT_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case ADD_CHECKOUT_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
