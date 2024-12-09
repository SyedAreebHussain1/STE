import {
  GET_MILESTONE_CERTIFICATE,
  GET_MILESTONE_CERTIFICATE_FAILURE,
  GET_MILESTONE_CERTIFICATE_SUCCESS,
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
    case GET_MILESTONE_CERTIFICATE:
      return {
        ...state,
        loading: true,
      };
    case GET_MILESTONE_CERTIFICATE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_MILESTONE_CERTIFICATE_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
