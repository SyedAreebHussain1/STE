import { S3_URL, S3_URL_FAILURE, S3_URL_SUCCESS } from "../constants";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
    case S3_URL:
      return {
        ...state,
        loading: true,
      };
    case S3_URL_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case S3_URL_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
