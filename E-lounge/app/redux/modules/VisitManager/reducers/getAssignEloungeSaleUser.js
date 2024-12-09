import {
  GET_ASSIGN_ELOUNGE_SALE_USER,
  GET_ASSIGN_ELOUNGE_SALE_USER_SUCCESS,
  GET_ASSIGN_ELOUNGE_SALE_USER_FAILURE,
  CLEAR_GET_ASSIGN_ELOUNGE_SALE_USER,
} from "../contants";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
    case GET_ASSIGN_ELOUNGE_SALE_USER:
      return {
        ...state,
        loading: true,
      };
    case GET_ASSIGN_ELOUNGE_SALE_USER_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_ASSIGN_ELOUNGE_SALE_USER_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
    case CLEAR_GET_ASSIGN_ELOUNGE_SALE_USER:
      return {
        ...state,
        data: null,
        loading: false,
        error: null,
      };
  }
}
