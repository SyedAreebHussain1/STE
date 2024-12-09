import { get, getError, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";
import { getFromStorage, setInStorage } from "../../../utils/storage";
import {
  createCompany,
  createCompanyFailure,
  createCompanySuccess,
} from "../../slices/CreateCompany/createCompanySlice";
import {
  getBusinessType,
  getBusinessTypeFailure,
  getBusinessTypeSuccess,
} from "../../slices/CreateCompany/getBusinessTypeSlice";
import {
  getCities,
  getCitiesFailure,
  getCitiesSuccess,
} from "../../slices/CreateCompany/getCitiesSlice";
import {
  getCountries,
  getCountriesFailure,
  getCountriesSuccess,
} from "../../slices/CreateCompany/getCountriesSlice";
import {
  getTimeZone,
  getTimeZoneFailure,
  getTimeZoneSuccess,
} from "../../slices/CreateCompany/getTimeZoneSlice";
import { loginSuccess } from "../../slices/auth/authSlice";
import { AppDispatch } from "../../store";

export const createCompanyApi = async (body: any, dispatch: AppDispatch) => {
  dispatch(createCompany());
  try {
    const response = await post<any>(ENDPOINT.company.createCompany, body);
    if (response) {
      successMessage(response?.message);
      const user = getFromStorage("user");
      setInStorage("user", { ...user, isCompanySetup: true });
      dispatch(createCompanySuccess({ ...user, isCompanySetup: true }));
      dispatch(loginSuccess({ ...user, isCompanySetup: true }));
    } else {
      dispatch(createCompanyFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(createCompanyFailure("Error"));
  }
};

export const getBusinessTypeApi = async (dispatch: AppDispatch) => {
  dispatch(getBusinessType());
  try {
    const apiString = `${ENDPOINT.company.GetAllBusiness}?page=1&limit=10`;
    const response = await get<any>(apiString);
    if (response) {
      dispatch(getBusinessTypeSuccess(response));
    } else {
      dispatch(getBusinessTypeFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getBusinessTypeFailure("Error"));
  }
};

export const getCitiesApi = async (
  id: number,
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  onSuccess: any,
  search?: any,
) => {
  dispatch(getCities());
  try {
    const apiString = `${ENDPOINT.company.getCities}/${id}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${search ? `&title=${search}` : ""}`;
    const response = await get<any>(apiString);
    if (response) {
      dispatch(getCitiesSuccess(response));
      onSuccess(response?.data?.items);
    } else {
      dispatch(getCitiesFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getCitiesFailure("Error"));
  }
};

export const getCountriesApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  onSuccess?: (data: any) => void,
  search?: any,
) => {
  dispatch(getCountries());
  try {
    const apiString = `${ENDPOINT.company.getCountries}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${search ? `&search=${search}` : ""}`;
    const response = await get<any>(apiString);
    if (response) {
      dispatch(getCountriesSuccess(response));
      if (onSuccess) {
        onSuccess(response?.data?.items);
      }
    } else {
      dispatch(getCountriesFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getCountriesFailure("Error"));
  }
};

export const getTimeZoneApi = async (
  id: number,
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  onSuccess: any,
) => {
  dispatch(getTimeZone());
  try {
    const apiString = `${ENDPOINT.company.getTimeZone}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    if (response) {
      dispatch(getTimeZoneSuccess(response));
      onSuccess(response?.data?.items);
    } else {
      dispatch(getTimeZoneFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getTimeZoneFailure("Error"));
  }
};
