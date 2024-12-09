import {
    UPLOAD_IMAGES,
    UPLOAD_IMAGES_SUCCESS,
    UPLOAD_IMAGES_FAILURE
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
      case UPLOAD_IMAGES:
        return {
          ...state,
          loading: true,
        };
      case UPLOAD_IMAGES_SUCCESS:
        return {
          ...state,
          data: action.payload,
          loading: false,
          error: null,
        };
      case UPLOAD_IMAGES_FAILURE:
        return {
          ...state,
          data: null,
          loading: false,
          error: action.error,
        };
    }
  }
  