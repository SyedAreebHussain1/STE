import {
  UPDATE_REQUIREMENR_FORM,
  UPDATE_REQUIREMENR_FORM_SUCCESS,
  UPDATE_REQUIREMENR_FORM_FAILURE,
  CLEAR_UPDATE_REQUIREMENR_FORM,
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
    case UPDATE_REQUIREMENR_FORM:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_REQUIREMENR_FORM_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case UPDATE_REQUIREMENR_FORM_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
