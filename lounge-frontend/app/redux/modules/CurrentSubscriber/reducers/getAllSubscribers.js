import {
    GET_ALL_SUBSCRIBERS,
    GET_ALL_SUBSCRIBERS_SUCCESS,
    GET_ALL_SUBSCRIBERS_FAILURE,
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
      case GET_ALL_SUBSCRIBERS:
        return {
          ...state,
          loading: true,
        };
      case GET_ALL_SUBSCRIBERS_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
      case GET_ALL_SUBSCRIBERS_FAILURE:
        return {
          ...state,
          data: null,
          loading: false,
          error: action.error,
        };
    }
  }
  