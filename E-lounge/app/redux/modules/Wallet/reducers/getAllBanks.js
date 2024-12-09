import {
    GET_ALL_BANKS_LISTS,
    GET_ALL_BANKS_LISTS_SUCCESS,
    GET_ALL_BANKS_LISTS_FAILURE,
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
      case GET_ALL_BANKS_LISTS:
        return {
          ...state,
          loading: true,
        };
      case GET_ALL_BANKS_LISTS_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
      case GET_ALL_BANKS_LISTS_FAILURE:
        return {
          ...state,
          data: null,
          loading: false,
          error: action.error,
        };
    }
  }
  