import {
  createCompanyUser,
  createCompanyUserFailure,
  createCompanyUserSuccess,
  deleteCompanyUser,
  deleteCompanyUserFailure,
  deleteCompanyUserSuccess,
} from "../../../redux/slices/Business/createCompanyUserSlice";
import {
  getBusinessById,
  getBusinessByIdFailure,
  getBusinessByIdSuccess,
} from "../../../redux/slices/Business/getBusinessByIdSlice";
import {
  getBusinesses,
  getBusinessesFailure,
  getBusinessesSuccess,
} from "../../../redux/slices/Business/getBusinessesSlice";
import {
  getCompanyUsers,
  getCompanyUsersFailure,
  getCompanyUsersSuccess,
} from "../../../redux/slices/Business/getCompanyUsersSlice";
import {
  updateBusinessOverview,
  updateBusinessOverviewFailure,
  updateBusinessOverviewSuccess,
} from "../../../redux/slices/Business/updateBusinessOverviewSlice";
import {
  getCompany,
  getCompanyFailure,
  getCompanySuccess,
} from "../../../redux/slices/Business/getCompanySlice";
import { AppDispatch } from "../../../redux/store";
import { get, getError, patch, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";

export const getBusinessByIdApi = async (
  dispatch: AppDispatch,
  id: number,
  onClose?: (res: any) => void
) => {
  dispatch(getBusinessById());
  try {
    const apiString = `${ENDPOINT.business.getBusinessById}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getBusinessByIdSuccess(response));
    if (onClose) onClose(response);
  } catch (err) {
    getError(err);
    dispatch(getBusinessByIdFailure("Error"));
  }
};

export const getBusinessesApi = async (
  dispatch: AppDispatch,
  onSuccess?: (res: any) => void
) => {
  dispatch(getBusinesses());
  try {
    const apiString = `${ENDPOINT.business.getBusinesses}`;
    const response = await get<any>(apiString);
    dispatch(getBusinessesSuccess(response));
    if (onSuccess) onSuccess(response);
  } catch (err) {
    getError(err);
    dispatch(getBusinessesFailure("Error"));
  }
};

export const updateBusinessOverviewApi = async (
  dispatch: AppDispatch,
  id: number,
  body: any,
  onClose: any
) => {
  dispatch(updateBusinessOverview());
  try {
    const apiString = `${ENDPOINT.business.getBusinessById}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(updateBusinessOverviewSuccess(response));
    successMessage(response?.message);
    onClose();
  } catch (err) {
    getError(err);
    dispatch(updateBusinessOverviewFailure("Error"));
  }
};

export const getCompanyUsersApi = async (dispatch: AppDispatch) => {
  dispatch(getCompanyUsers());
  try {
    const apiString = `${ENDPOINT.business.companyUsers}`;
    const response = await get<any>(apiString);
    dispatch(getCompanyUsersSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getCompanyUsersFailure("Error"));
  }
};

export const createCompanyUserApi = async (
  dispatch: AppDispatch,
  body: FormData,
  onClose: any
) => {
  dispatch(createCompanyUser());
  try {
    const apiString = `${ENDPOINT.business.companyUsers}`;
    const response = await post<any>(apiString, body);
    dispatch(createCompanyUserSuccess(response));
    successMessage(response?.message);
    onClose();
  } catch (err) {
    getError(err);
    dispatch(createCompanyUserFailure("Error"));
  }
};

export const getCompanyApi = async (
  dispatch: AppDispatch,
  onSuccess?: (res: any) => void
) => {
  dispatch(getCompany());
  try {
    const apiString = `${ENDPOINT.business.getCompany}`;
    const response = await get<any>(apiString);
    dispatch(getCompanySuccess(response));
    if (onSuccess) onSuccess(response);
  } catch (err) {
    getError(err);
    dispatch(getCompanyFailure("Error"));
  }
};

export const deleteCompanyUserApi = async (
  dispatch: AppDispatch,
  companyUserId: number,
  onClose: any
) => {
  dispatch(deleteCompanyUser());
  try {
    const apiString = `${ENDPOINT.business.deleteCompanyUser}`;
    const response = await patch<any>(apiString, { companyUserId });
    dispatch(deleteCompanyUserSuccess(response));
    successMessage(response?.message);
    onClose();
  } catch (err) {
    getError(err);
    dispatch(deleteCompanyUserFailure("Error"));
  }
};
