import { TOUR_CHECK, TOUR_CHECK_FAILURE, TOUR_CHECK_SUCCESS } from "../constants";

  
  const initialState = {
    data: null,
    loading: false,
    error: null,
  };
  
  export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
      default:
        return state;
      case TOUR_CHECK:
        return {
          ...state,
          loading: true,
        };
      case TOUR_CHECK_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
      case TOUR_CHECK_FAILURE:
        return {
          ...state,
          data: null,
          loading: false,
          error: action.error,
        };
    }
  }
  