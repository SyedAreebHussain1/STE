import { GET_REGISTER_USERS_FOR_PW_WEB, GET_REPORTS_INFO } from '../../constant/traficConstant'


const INITIAL_STATE = {
    getReportsInfo: null,
    getRegisteredUsersForPwWeb: null,
};
const traficReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case GET_REGISTER_USERS_FOR_PW_WEB:
            return {
                ...state,
                getRegisteredUsersForPwWeb: action.payload,
            };
        case GET_REPORTS_INFO:
            return {
                ...state,
                getReportsInfo: action.payload,
            };
    }
    return state;
};
export default traficReducer;
