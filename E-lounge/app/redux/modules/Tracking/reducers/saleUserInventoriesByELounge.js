import {
  SALE_USER_INVENTORIES_BY_ELOUNGE,
  SALE_USER_INVENTORIES_BY_ELOUNGE_SUCCESS,
  SALE_USER_INVENTORIES_BY_ELOUNGE_FAILURE,
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
    case SALE_USER_INVENTORIES_BY_ELOUNGE:
      return {
        ...state,
        loading: true,
      };
    case SALE_USER_INVENTORIES_BY_ELOUNGE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case SALE_USER_INVENTORIES_BY_ELOUNGE_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
