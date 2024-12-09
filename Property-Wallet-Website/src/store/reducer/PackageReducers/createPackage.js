import {
  CREATE_PACKAGE,
  CREATE_PACKAGE_CLEAR,
  CREATE_PACKAGE_FAILURE,
  CREATE_PACKAGE_SUCCESS,
} from "../../../constant/packageConstant";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
    case CREATE_PACKAGE:
      return {
        ...state,
        loading: true,
      };
    case CREATE_PACKAGE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case CREATE_PACKAGE_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
    case CREATE_PACKAGE_CLEAR:
      return {
        ...state,
        data: null,
        loading: false,
      };
  }
}
