import {
    GET_WALLET_LIST,
    GET_WALLET_LIST_SUCCESS,
    GET_WALLET_LIST_FAILURE,
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
      case GET_WALLET_LIST:
        return {
          ...state,
          loading: true,
        };
      case GET_WALLET_LIST_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
      case GET_WALLET_LIST_FAILURE:
        return {
          ...state,
          data: null,
          loading: false,
          error: action.error,
        };
    }
  }
  