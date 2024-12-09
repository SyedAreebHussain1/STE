import { API } from "../../../../config/apiCalls";
import { getError, getRequest } from "../../../../utils/baseApi";
import {
  POOL_DIVISION,
  POOL_DIVISION_SUCCESS,
  POOL_DIVISION_FAILURE,
} from "./constants";

export const getPoolDivisionApi = async (dispatch, pageLimit) => {
  dispatch({ type: POOL_DIVISION });
  await getRequest(
    `${API.loungeWallet.poolDivision}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }`
  )
    .then((response) => {
      if (response?.data) {
        dispatch({
          type: POOL_DIVISION_SUCCESS,
          payload: response?.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: POOL_DIVISION_FAILURE,
        error: err?.response?.data,
      });
    });
};
