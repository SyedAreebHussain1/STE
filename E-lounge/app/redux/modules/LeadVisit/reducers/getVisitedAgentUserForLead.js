import {
  CLEAR_GET_VISITED_AGENT_USER_FOR_LEAD,
  GET_VISITED_AGENT_USER_FOR_LEAD,
  GET_VISITED_AGENT_USER_FOR_LEAD_FAILURE,
  GET_VISITED_AGENT_USER_FOR_LEAD_SUCCESS,
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
    case GET_VISITED_AGENT_USER_FOR_LEAD:
      return {
        ...state,
        loading: true,
      };
    case GET_VISITED_AGENT_USER_FOR_LEAD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        error: null,
      };
    case GET_VISITED_AGENT_USER_FOR_LEAD_FAILURE:
      return {
        ...state,
        data: null,
        loading: false,
        error: action.error,
      };
    case CLEAR_GET_VISITED_AGENT_USER_FOR_LEAD:
      return {
        ...state,
        data: null,
        loading: false,
        error: null,
      };
  }
}
