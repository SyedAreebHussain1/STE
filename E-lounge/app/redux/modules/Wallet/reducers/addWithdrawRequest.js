import {
    ADD_WITHDRAW_REQUEST,
    ADD_WITHDRAW_REQUEST_SUCCESS,
    ADD_WITHDRAW_REQUEST_FAILURE,
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
      case ADD_WITHDRAW_REQUEST:
        return {
          ...state,
          loading: true,
        };
      case ADD_WITHDRAW_REQUEST_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
      case ADD_WITHDRAW_REQUEST_FAILURE:
        return {
          ...state,
          data: null,
          loading: false,
          error: action.error,
        };
    }
  }
  