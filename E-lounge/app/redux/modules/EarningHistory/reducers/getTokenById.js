import {
    GET_TOKEN_BY_ID,
    GET_TOKEN_BY_ID_SUCCESS,
    GET_TOKEN_BY_ID_FAILURE
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
      case GET_TOKEN_BY_ID:
        return {
          ...state,
          loading: true,
        };
      case GET_TOKEN_BY_ID_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
      case GET_TOKEN_BY_ID_FAILURE:
        return {
          ...state,
          data: null,
          loading: false,
          error: action.error,
        };
    }
  }
  