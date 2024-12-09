import {
    GET_PW_INVENTORY,
    GET_PW_INVENTORY_SUCCESS,
    GET_PW_INVENTORY_FAILURE
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
      case GET_PW_INVENTORY:
        return {
          ...state,
          loading: true,
        };
      case GET_PW_INVENTORY_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
      case GET_PW_INVENTORY_FAILURE:
        return {
          ...state,
          data: null,
          loading: false,
          error: action.error,
        };
    }
  }
  