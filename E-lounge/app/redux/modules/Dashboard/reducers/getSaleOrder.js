import {
    GET_SALE_ORDER,
    GET_SALE_ORDER_SUCCESS,
    GET_SALE_ORDER_FAILURE
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
      case GET_SALE_ORDER:
        return {
          ...state,
          loading: true,
        };
      case GET_SALE_ORDER_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
      case GET_SALE_ORDER_FAILURE:
        return {
          ...state,
          data: null,
          loading: false,
          error: action.error,
        };
    }
  }
  