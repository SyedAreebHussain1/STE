import { AxiosError } from "axios";
import { get, getError, getRequest, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import {
  addNewWithdrawRequest,
  addNewWithdrawRequestFailure,
  addNewWithdrawRequestSuccess,
} from "../../slices/Wallet/addNewWithdrawRequestSlice";
import {
  addPaymobCard,
  addPaymobCardFailure,
  addPaymobCardSuccess,
} from "../../slices/Wallet/addPaymobCardSlice";
import {
  getUserWallet,
  getUserWalletFailure,
  getUserWalletSuccess,
} from "../../slices/Wallet/getUserWalletSlice";
import {
  getWalletTransactionHistory,
  getWalletTransactionHistoryFailure,
  getWalletTransactionHistorySuccess,
} from "../../slices/Wallet/getWalletTransactionHistorySlice";
import {
  getWalletWithdrawRequests,
  getWalletWithdrawRequestsFailure,
  getWalletWithdrawRequestsSuccess,
} from "../../slices/Wallet/getWalletWithdrawRequestsSlice";
import {
  paymentByBlinq,
  paymentByBlinqFailure,
  paymentByBlinqSuccess,
} from "../../slices/Wallet/paymentByBlinqSlice";
import {
  paymentByPayMob,
  paymentByPayMobFailure,
  paymentByPayMobSuccess,
} from "../../slices/Wallet/paymentByPayMobSlice";
import { AppDispatch } from "../../store";
import { successMessage } from "../../../utils/message";

export const getUserWalletApi = async (dispatch: AppDispatch) => {
  dispatch(getUserWallet());
  try {
    const response = await get<any>(`${ENDPOINT.wallet.getUserWallet}`);

    if (response) {
      dispatch(getUserWalletSuccess({ ...response }));
    } else {
      dispatch(getUserWalletFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getUserWalletFailure("Error"));
  }
};

export const addNewWithdrawRequestApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: () => void
) => {
  dispatch(addNewWithdrawRequest());
  try {
    const response = await post<any>(
      `${ENDPOINT.wallet.addNewWithdrawRequest}`,
      body
    );

    if (response) {
      dispatch(addNewWithdrawRequestSuccess({ ...response }));
      successMessage("Withdraw Request Successfully Created");
    } else {
      dispatch(addNewWithdrawRequestFailure("Error"));
    }
    onSuccess();
  } catch (err: any) {
    if (err?.response?.status === 404) {
      onSuccess();
    }
    getError(err);
    dispatch(addNewWithdrawRequestFailure("Error"));
  }
};

export const paymentByPayMobApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: (data: any) => void
) => {
  dispatch(paymentByPayMob());
  try {
    const response = await post<any>(
      `${ENDPOINT.wallet.paymentByPayMob}`,
      body
    );

    if (response) {
      dispatch(paymentByPayMobSuccess({ ...response }));
      onSuccess(response.data);
    } else {
      dispatch(paymentByPayMobFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(paymentByPayMobFailure("Error"));
  }
};

export const paymentByBlinqApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: (data: any) => void
) => {
  dispatch(paymentByBlinq());
  try {
    const response = await post<any>(`${ENDPOINT.wallet.paymentByBlinq}`, body);

    if (response) {
      dispatch(paymentByBlinqSuccess({ ...response }));
      onSuccess(response.data);
    } else {
      dispatch(paymentByBlinqFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(paymentByBlinqFailure("Error"));
  }
};

export const getWalletTransactionHistoryApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number }
) => {
  dispatch(getWalletTransactionHistory());
  try {
    const response = await getRequest<any>(
      `${ENDPOINT.wallet.getWalletTransactionHistory}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );

    if (response) {
      dispatch(getWalletTransactionHistorySuccess({ ...response }));
    } else {
      dispatch(getWalletTransactionHistoryFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getWalletTransactionHistoryFailure("Error"));
  }
};

export const getWalletWithdrawRequestsApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number }
) => {
  dispatch(getWalletWithdrawRequests());
  try {
    const response = await getRequest<any>(
      `${ENDPOINT.wallet.getWalletWithdrawRequests}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );

    if (response) {
      dispatch(getWalletWithdrawRequestsSuccess({ ...response }));
    } else {
      dispatch(getWalletWithdrawRequestsFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getWalletWithdrawRequestsFailure("Error"));
  }
};
export const addPaymobCardApi = async (
  dispatch: AppDispatch,
  onSuccess: (data: any) => void
) => {
  dispatch(addPaymobCard());
  try {
    const response = await post<any>(`${ENDPOINT.wallet.addPaymobCard}`, {});

    if (response) {
      dispatch(addPaymobCardSuccess({ ...response }));
      onSuccess(response);
    } else {
      dispatch(addPaymobCardFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(addPaymobCardFailure("Error"));
  }
};
