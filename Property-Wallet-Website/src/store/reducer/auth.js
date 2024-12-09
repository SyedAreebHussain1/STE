import { LOGIN } from "../../constant/authConstants";

const INITIAL_STATE = {
  login: null,
};
const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        login: action.payload,
      };
  }
  return state;
};
export default authReducer;
