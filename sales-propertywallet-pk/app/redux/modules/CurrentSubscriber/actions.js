import { API } from "../../../config/apiCalls";
import { getError, getRequest } from "../../../utils/baseApi";
import { GET_ALL_SUBSCRIBERS, GET_ALL_SUBSCRIBERS_FAILURE, GET_ALL_SUBSCRIBERS_SUCCESS } from "./constants";

export const getAllSubscribersAction = async (dispatch, pageLimit) => {
    dispatch({ type: GET_ALL_SUBSCRIBERS });
    await getRequest(`${API.dashboard.subscriberList}?page=${pageLimit.page}&limit=${pageLimit.limit}`)
      .then((response) => {
        if (response.data) {
          dispatch({ type: GET_ALL_SUBSCRIBERS_SUCCESS, payload: response.data });
        }
      })
      .catch((err) => {
        getError(err);
        dispatch({ type: GET_ALL_SUBSCRIBERS_FAILURE, error: err.response.data });
      });
  };