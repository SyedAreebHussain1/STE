import {
    EDIT_VISIT,
    EDIT_VISIT_SUCCESS,
    EDIT_VISIT_FAILURE
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
      case EDIT_VISIT:
        return {
          ...state,
          loading: true,
        };
      case EDIT_VISIT_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
      case EDIT_VISIT_FAILURE:
        return {
          ...state,
          data: null,
          loading: false,
          error: action.error,
        };
    }
  }
  