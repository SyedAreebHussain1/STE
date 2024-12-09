import { ASSIGN_MILESTONE, ASSIGN_MILESTONE_FAILURE, ASSIGN_MILESTONE_SUCCESS } from "../constants";

const initialState = {
  data: null,
  loading: false,
  error: null,
};

export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    default:
      return state;
    case ASSIGN_MILESTONE:
      return {
        ...state,
        loading: true,
      };
    case ASSIGN_MILESTONE_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case ASSIGN_MILESTONE_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
  }
}
