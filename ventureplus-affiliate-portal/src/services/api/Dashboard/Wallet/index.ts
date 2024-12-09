import {
  getTransactionHistory,
  getTransactionHistoryFailure,
  getTransactionHistorySuccess,
} from "../../../../store/slices/Dashboard/Wallet/TransactionHistorySlice";
import { AppDispatch } from "../../../../store/store";
import { get, getError } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";

export const getTransactionHistoryApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  uniqueId?: string
) => {
  dispatch(getTransactionHistory());
  try {
    const apiString = `${ENDPOINT.wallet.getTransactionHistory}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}&uniqueId=${uniqueId ? uniqueId : ""}`;
    const response = await get<any>(apiString);
    dispatch(getTransactionHistorySuccess(response));
    return response;
  } catch (err) {
    getError(err);
    dispatch(getTransactionHistoryFailure("Error"));
    return null;
  }
};

export const getWalletStatsApi = async () => {
  try {
    const apiString = `${ENDPOINT.wallet.walletStats}`;
    const response = await get<any>(apiString);
    return response;
  } catch (err) {
    getError(err);
    return null;
  }
};
