import {
    DELETE_VISIT,
    DELETE_VISIT_SUCCESS,
    DELETE_VISIT_FAILURE
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
      case DELETE_VISIT:
        return {
          ...state,
          loading: true,
        };
      case DELETE_VISIT_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
      case DELETE_VISIT_FAILURE:
        return {
          ...state,
          data: null,
          loading: false,
          error: action.error,
        };
    }
  }
  