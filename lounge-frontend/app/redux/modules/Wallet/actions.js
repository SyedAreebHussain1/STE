import { API } from "../../../config/apiCalls";
import { getError, getRequest, postRequest } from "../../../utils/baseApi";
import { GET_ALL_BOOKINGS, GET_ALL_BOOKINGS_FAILURE, GET_ALL_BOOKINGS_SUCCESS } from "../Dashboard/constants";
import { ADD_WITHDRAW_REQUEST, ADD_WITHDRAW_REQUEST_FAILURE, ADD_WITHDRAW_REQUEST_SUCCESS, GET_ALL_BANKS_LISTS, GET_ALL_BANKS_LISTS_FAILURE, GET_ALL_BANKS_LISTS_SUCCESS, GET_USER_PROFILE, GET_USER_PROFILE_FAILURE, GET_USER_PROFILE_SUCCESS, GET_WALLET_BALANCE, GET_WALLET_BALANCE_FAILURE, GET_WALLET_BALANCE_SUCCESS, GET_WALLET_LIST, GET_WALLET_LIST_FAILURE, GET_WALLET_LIST_SUCCESS } from "./constants";

export const getAllWalletListAction = async (dispatch, pageLimit) => {
    dispatch({ type: GET_WALLET_LIST });
    await getRequest(`${API.dashboard.walletList}?page=${pageLimit.page}&limit=${pageLimit.limit}`)
      .then((response) => {
        if (response.data) {
          dispatch({ type: GET_WALLET_LIST_SUCCESS, payload: response.data });
        }
      })
      .catch((err) => {
        getError(err);
        dispatch({ type: GET_WALLET_LIST_FAILURE, error: err.response.data });
      });
  };

  export const getWalleteBalanceAction = async (dispatch) => {
    dispatch({ type: GET_WALLET_BALANCE });
    await getRequest(API.dashboard.walletBalance)
      .then((response) => {
        if (response.data) {
            dispatch({ type: GET_WALLET_BALANCE_SUCCESS, payload: response.data });
        }
      })
      .catch((err) => {
        getError(err);
        dispatch({ type: GET_WALLET_BALANCE_FAILURE, error: err.response.data });
      });
  };

  export const postWithdrawAmountAction = async (body, dispatch) => {
    dispatch({ type: ADD_WITHDRAW_REQUEST });
    await postRequest(API.dashboard.withdrawAmount, body)
      .then((response) => {
        if (response.data) {
            dispatch({ type: ADD_WITHDRAW_REQUEST_SUCCESS, payload: response.data });
        }
      })
      .catch((err) => {
        getError(err);
        dispatch({ type: ADD_WITHDRAW_REQUEST_FAILURE, error: err.response.data });
      });
  };

  export const getBanksListAction = async (dispatch) => {
    dispatch({ type: GET_ALL_BANKS_LISTS });
    await getRequest(API.dashboard.banks)
      .then((response) => {
        if (response.data) {
            dispatch({ type: GET_ALL_BANKS_LISTS_SUCCESS, payload: response.data });
        }
      })
      .catch((err) => {
        getError(err);
        dispatch({ type: GET_ALL_BANKS_LISTS_FAILURE, error: err.response.data });
      });
  };

  export const getUserPorfileApi = async (dispatch) => {
    dispatch({ type: GET_USER_PROFILE });
    await getRequest(API.dashboard.profile)
      .then((response) => {
        if (response.data) {
            dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: response.data });
        }
      })
      .catch((err) => {
        getError(err);
        dispatch({ type: GET_USER_PROFILE_FAILURE, error: err.response.data });
      });
  };