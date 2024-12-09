import {
    GET_ALL_VISITS,
    GET_ALL_VISITS_SUCCESS,
    GET_ALL_VISITS_FAILURE
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
      case GET_ALL_VISITS:
        return {
          ...state,
          loading: true,
        };
      case GET_ALL_VISITS_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
      case GET_ALL_VISITS_FAILURE:
        return {
          ...state,
          data: null,
          loading: false,
          error: action.error,
        };
    }
  }
  