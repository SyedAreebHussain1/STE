
import axios from 'axios'
import { GET_REGISTER_USERS_FOR_PW_WEB, GET_REPORTS_INFO, urlLink, getRegisteredUsersForPwWeb, getReportsInfo } from '../../constant/traficConstant'

let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6ImFkbWluQGFkbWluLmNvbSIsImlkIjoxLCJpc1R5cGUiOiJBZG1pbiIsImlhdCI6MTY5MjE4NDgyNSwiZXhwIjoxNjkzMDQ4ODI1fQ.C3WP_eY0SjhQFmrDAXy8Ehz5DmKXE45iEKSfLH6lhpU"
const getReportsInfoAction = () => {
    return (dispatch) =>
        axios
            .get(
                `${urlLink}/${getReportsInfo}`,
                // {
                //     headers: {
                //         "Content-Type": "application/json",
                //         Authorization: `Bearer ${token}`,
                //     },
                // }
            )
            .then((res) => {
                // console.log('getReportsInfoAction', res)
                dispatch({ type: GET_REPORTS_INFO, payload: res?.data });
            })
            .catch((err) => {
                console.log(err.response);
            });
};
const getRegisteredUsersForPwWebAction = () => {
    return (dispatch) =>
        axios
            .get(`${urlLink}/${getRegisteredUsersForPwWeb}`
                // ,
                //     {
                //         headers: {
                //             "Content-Type": "application/json",
                //             // Authorization: `Bearer ${token}`,
                //             // Authorization: `Bearer ${localStorage.getItem("token")}`,
                //         },
                //     }
            )
            .then((res) => {
                // console.log('GET_REGISTER_USERS_FOR_PW_WEB', res)
                dispatch({ type: GET_REGISTER_USERS_FOR_PW_WEB, payload: res?.data?.data });
            })
            .catch((err) => {
                console.log(err.response);
            });
};


export { getRegisteredUsersForPwWebAction, getReportsInfoAction }