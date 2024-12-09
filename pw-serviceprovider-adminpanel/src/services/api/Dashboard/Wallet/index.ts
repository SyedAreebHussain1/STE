import { get, getError, post } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import { successMessage } from "../../../../utils/message";
import {
  getWithdrawRequest,
  getWithdrawRequestSuccess,
  getWithdrawRequestFailure,
} from "../../../../store/slices/Dashboard/Wallet/getWithdrawRequestSlice";
import {
  requestApprovalForWallet,
  requestApprovalForWalletSuccess,
  requestApprovalForWalletFailure,
} from "../../../../store/slices/Dashboard/Wallet/requestApprovalForWalletSlice";
export const getWithdrawRequestApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(getWithdrawRequest());
  try {
    const apiString = `${ENDPOINT.wallet.getWithdrawRequest}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getWithdrawRequestSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getWithdrawRequestFailure("Error"));
  }
};
export const requestApprovalForWalletApi = async (
  dispatch: AppDispatch,
  body: {
    status: string;
    statusRemarks: string;
  },
  id: number,
  success: any,
) => {
  dispatch(requestApprovalForWallet());
  try {
    const response = await post<any>(
      `${ENDPOINT.wallet.requestApprovalForWallet}/${id}`,
      body,
    );
    dispatch(requestApprovalForWalletSuccess(response));
    successMessage(response?.message);
    success();
  } catch (err) {
    getError(err);
    dispatch(requestApprovalForWalletFailure("Error"));
  }
};
