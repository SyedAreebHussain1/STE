import {
  GET_ALL_ASSIGN_SALE_USER_BY_LEAD_ID_FOR_ELOUNGE_USERS,
  GET_ALL_ASSIGN_SALE_USER_BY_LEAD_ID_FOR_ELOUNGE_USERS_SUCCESS,
  GET_ALL_ASSIGN_SALE_USER_BY_LEAD_ID_FOR_ELOUNGE_USERS_FAILURE,
  CLEAR_GET_ALL_ASSIGN_SALE_USER_BY_LEAD_ID_FOR_ELOUNGE_USERS,
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
    case GET_ALL_ASSIGN_SALE_USER_BY_LEAD_ID_FOR_ELOUNGE_USERS:
      return {
        ...state,
        loading: true,
      };
    case GET_ALL_ASSIGN_SALE_USER_BY_LEAD_ID_FOR_ELOUNGE_USERS_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_ALL_ASSIGN_SALE_USER_BY_LEAD_ID_FOR_ELOUNGE_USERS_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
    case CLEAR_GET_ALL_ASSIGN_SALE_USER_BY_LEAD_ID_FOR_ELOUNGE_USERS:
      return {
        ...state,
        data: null,
        loading: false,
        error: null,
      };
  }
}
