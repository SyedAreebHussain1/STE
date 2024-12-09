import { API } from "../../../config/apiCalls";
import { getError, getRequest, postRequest } from "../../../utils/baseApi";
import { getFromStorage } from "../../../utils/storage";
import {
  ADD_WITHDRAW_REQUEST_NOT_FOR_USER,
  ADD_WITHDRAW_REQUEST_NOT_FOR_USER_FAILURE,
  ADD_WITHDRAW_REQUEST_NOT_FOR_USER_SUCCESS,
  GET_ALL_BANKS_LISTS_NOT_FOR_USER,
  GET_ALL_BANKS_LISTS_NOT_FOR_USER_FAILURE,
  GET_ALL_BANKS_LISTS_NOT_FOR_USER_SUCCESS,
  GET_WALLET_BALANCE_NOT_FOR_USER,
  GET_WALLET_BALANCE_NOT_FOR_USER_FAILURE,
  GET_WALLET_BALANCE_NOT_FOR_USER_SUCCESS,
  GET_WALLET_NOT_FOR_USER_LIST,
  GET_WALLET_NOT_FOR_USER_LIST_FAILURE,
  GET_WALLET_NOT_FOR_USER_LIST_SUCCESS,
} from "./constants";

export const getAllWalletNotForSaleUserListAction = async (
  dispatch,
  pageLimit
) => {
  dispatch({ type: GET_WALLET_NOT_FOR_USER_LIST });

  await getRequest(
    `${API.otherRoles.walletList}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_WALLET_NOT_FOR_USER_LIST_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_WALLET_NOT_FOR_USER_LIST_FAILURE,
        error: err.response.data,
      });
    });
};

export const getWalletBalanceNotForSaleUserAction = async (dispatch) => {
  dispatch({ type: GET_WALLET_BALANCE_NOT_FOR_USER });

  await getRequest(API.otherRoles.walletBalance)
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_WALLET_BALANCE_NOT_FOR_USER_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_WALLET_BALANCE_NOT_FOR_USER_FAILURE,
        error: err.response.data,
      });
    });
};

export const postWithdrawAmountNotForSaleUserAction = async (
  body,
  dispatch,
  onSuccess
) => {
  dispatch({ type: ADD_WITHDRAW_REQUEST_NOT_FOR_USER });

  await postRequest(API.otherRoles.withdrawAmount, body)
    .then((response) => {
      if (response.data) {
        dispatch({
          type: ADD_WITHDRAW_REQUEST_NOT_FOR_USER_SUCCESS,
          payload: response.data,
        });
        onSuccess();
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: ADD_WITHDRAW_REQUEST_NOT_FOR_USER_FAILURE,
        error: err.response.data,
      });
    });
};

export const getBanksListNotForSaleUserAction = async (dispatch) => {
  dispatch({ type: GET_ALL_BANKS_LISTS_NOT_FOR_USER });
  await getRequest(API.dashboard.banks)
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_ALL_BANKS_LISTS_NOT_FOR_USER_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_ALL_BANKS_LISTS_NOT_FOR_USER_FAILURE,
        error: err.response.data,
      });
    });
};

// export const getUserPorfileApi = async (dispatch) => {
//   dispatch({ type: GET_USER_PROFILE });
//   await getRequest(API.otherRoles.profile)
//     .then((response) => {
//       if (response.data) {
//         dispatch({ type: GET_USER_PROFILE_SUCCESS, payload: response.data });
//       }
//     })
//     .catch((err) => {
//       getError(err);
//       dispatch({ type: GET_USER_PROFILE_FAILURE, error: err.response.data });
//     });
// };
