import {
  GET_ALL_BOOKINGS,
  GET_ALL_BOOKINGS_SUCCESS,
  GET_ALL_BOOKINGS_FAILURE,
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
    case GET_ALL_BOOKINGS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_BOOKINGS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_ALL_BOOKINGS_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
