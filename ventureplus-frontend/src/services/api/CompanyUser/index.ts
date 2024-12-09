import {
  getCompanyUserById,
  getCompanyUserByIdFailure,
  getCompanyUserByIdSuccess,
} from "../../../redux/slices/CompanyUser/getCompanyUserByIdSlice";
import {
  updateCompanyUserById,
  updateCompanyUserByIdFailure,
  updateCompanyUserByIdSuccess,
} from "../../../redux/slices/CompanyUser/updateCompanyUserByIdSlice";
import {
  updateUserPreferences,
  updateUserPreferencesFailure,
  updateUserPreferencesSuccess,
} from "../../../redux/slices/CompanyUser/updateUserPreferencesSlice";
import { AppDispatch } from "../../../redux/store";
import { get, getError, patch, patchFormData, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";

export const getCompanyUserByIdApi = async (
  dispatch: AppDispatch,
  id: number,
  onSuccess?: (response?: any) => void
) => {
  dispatch(getCompanyUserById());
  try {
    const apiString = `${ENDPOINT.business.companyUsers}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getCompanyUserByIdSuccess(response?.data));
    if (onSuccess) onSuccess(response);
  } catch (err) {
    getError(err);
    dispatch(getCompanyUserByIdFailure("Error"));
  }
};

export const updateCompanyUserByIdApi = async (
  dispatch: AppDispatch,
  id: number,
  body: FormData | {},
  onClose: any
) => {
  dispatch(updateCompanyUserById());
  try {
    const apiString = `${ENDPOINT.business.updatecompanyUser}/${id}`;
    const response = await patchFormData<any>(apiString, body);
    dispatch(updateCompanyUserByIdSuccess(response));
    successMessage(response?.message);
    onClose(response);
  } catch (err) {
    getError(err);
    dispatch(updateCompanyUserByIdFailure("Error"));
  }
};

export const updateCompanyUserPreferncesApi = async (
  dispatch: AppDispatch,
  id: number,
  body: any,
  onClose: any
) => {
  dispatch(updateUserPreferences());
  try {
    const apiString = `${ENDPOINT.business.updateUserPreferences}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(updateUserPreferencesSuccess(response));
    successMessage(response?.message);
    onClose();
  } catch (err) {
    getError(err);
    dispatch(updateUserPreferencesFailure("Error"));
  }
};

export const updateCompanyUserPasswordApi = async (
  dispatch: AppDispatch,
  id: number,
  body: {
    newPassword: string;
    oldPassword: string;
  },
  onClose: any
) => {
  dispatch(updateUserPreferences());
  try {
    const apiString = `${ENDPOINT.business.updateUserPassword}`;
    const response = await post<any>(apiString, body);
    dispatch(updateUserPreferencesSuccess(response));
    successMessage(response?.message);
    onClose();
  } catch (err) {
    getError(err);
    dispatch(updateUserPreferencesFailure("Error"));
  }
};
