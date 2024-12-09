import {
    GET_ALL_ASSIGNED_AGENCIES_MANAGER,
    GET_ALL_ASSIGNED_AGENCIES_MANAGER_SUCCESS,
    GET_ALL_ASSIGNED_AGENCIES_MANAGER_FAILURE
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
      case GET_ALL_ASSIGNED_AGENCIES_MANAGER:
        return {
          ...state,
          loading: true,
        };
      case GET_ALL_ASSIGNED_AGENCIES_MANAGER_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
      case GET_ALL_ASSIGNED_AGENCIES_MANAGER_FAILURE:
        return {
          ...state,
          data: null,
          loading: false,
          error: action.error,
        };
    }
  }
  