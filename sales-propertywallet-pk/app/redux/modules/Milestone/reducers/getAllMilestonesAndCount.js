import { MILESTONE, MILESTONE_FAILURE, MILESTONE_SUCCESS } from "../constants";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
    case MILESTONE:
      return {
        ...state,
        loading: true,
      };
    case MILESTONE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case MILESTONE_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
