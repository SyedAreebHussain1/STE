import {
    ADD_NEW_VISIT,
    ADD_NEW_VISIT_SUCCESS,
    ADD_NEW_VISIT_FAILURE
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
      case ADD_NEW_VISIT:
        return {
          ...state,
          loading: true,
        };
      case ADD_NEW_VISIT_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
      case ADD_NEW_VISIT_FAILURE:
        return {
          ...state,
          data: null,
          loading: false,
          error: action.error,
        };
    }
  }
  