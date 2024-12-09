import { get, getError, patch, patchFormData } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import { successMessage } from "../../../../utils/message";
import {
  affilateBankDetails,
  affilateBankDetailsSuccess,
  affilateBankDetailsFailure,
  updateAffilateUserBankDetails,
  updateAffilateUserBankDetailsSuccess,
  updateAffilateUserBankDetailsFailure,
} from "../../../../store/slices/Dashboard/Bank/affilateBankDetailsSlice";

export const affilateBankDetailsApi = async (dispatch: AppDispatch) => {
  dispatch(affilateBankDetails());
  try {
    const apiString = `${ENDPOINT.bank.affilateBankDetails}`;
    const response = await get<any>(apiString);
    dispatch(affilateBankDetailsSuccess(response?.data));
  } catch (err: any) {
    getError(err);
    dispatch(affilateBankDetailsFailure("Error"));
  }
};
export const updateAffilateUserBankDetailsApi = async (
  dispatch: AppDispatch,
  body: any,
  success: any,
) => {
  dispatch(updateAffilateUserBankDetails());
  try {
    const apiString = `${ENDPOINT.bank.updateAffilateUserBankDetails}`;
    const response = await patch<any>(apiString, body);
    dispatch(updateAffilateUserBankDetailsSuccess(response?.data));
    successMessage(response?.message);
    success();
  } catch (err: any) {
    getError(err);
    dispatch(updateAffilateUserBankDetailsFailure("Error"));
  }
};
