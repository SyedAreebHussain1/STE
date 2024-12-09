import { get, getError, patch, post } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import { successMessage } from "../../../../utils/message";
import {
  createServiceWithCategoryId,
  createServiceWithCategoryIdSuccess,
  createServiceWithCategoryIdFailure,
} from "../../../../store/slices/Dashboard/Services/createServiceWithCategoryIdSlice";
import {
  getCategories,
  getCategoriesSuccess,
  getCategoriesFailure,
} from "../../../../store/slices/Dashboard/Services/getCategoriesSlice";
import {
  getAllServices,
  getAllServicesSuccess,
  getAllServicesFailure,
} from "../../../../store/slices/Dashboard/Services/getAllServicesSlice";
export const createServiceWithCategoryIdApi = async (
  dispatch: AppDispatch,
  body: {
    categoryId: number;
    title: string[];
  },
  onSuccess: () => void,
) => {
  dispatch(createServiceWithCategoryId());
  try {
    const response = await post<any>(
      ENDPOINT.services.createServiceWithCategoryId,
      body,
    );
    dispatch(createServiceWithCategoryIdSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(createServiceWithCategoryIdFailure("Error"));
  }
};

export const getCategoriesApi = async (dispatch: AppDispatch) => {
  dispatch(getCategories());
  try {
    const apiString: string = `${ENDPOINT.services.getCategories}`;
    const response = await get<any>(apiString);
    dispatch(getCategoriesSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getCategoriesFailure("Error"));
  }
};
export const getAllServicesApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(getAllServices());
  try {
    const apiString: string = `${ENDPOINT.services.getAllServices}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getAllServicesSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getAllServicesFailure("Error"));
  }
};
