import { get, getError, patch, post } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import { successMessage } from "../../../../utils/message";
import {
  categoryAndServices,
  categoryAndServicesSuccess,
  categoryAndServicesFailure,
} from "../../../../store/slices/Dashboard/Category/categoryAndServicesSlice";
import {
  getAllCategories,
  getAllCategoriesSuccess,
  getAllCategoriesFailure,
} from "../../../../store/slices/Dashboard/Category/getAllCategoriesSlice";
import {
  updateCategory,
  updateCategorySuccess,
  updateCategoryFailure,
} from "../../../../store/slices/Dashboard/Category/updateCategorySlice";

export const categoryAndServicesApi = async (
  dispatch: AppDispatch,
  body: {
    categoryTitle: string;
    serviceTitle: string[] | any[];
  },
  onSuccess: () => void,
) => {
  dispatch(categoryAndServices());
  try {
    const response = await post<any>(
      ENDPOINT.category.categoryAndServices,
      body,
    );
    dispatch(categoryAndServicesSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(categoryAndServicesFailure("Error"));
  }
};

export const getAllCategoriesApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(getAllCategories());
  try {
    const apiString = `${ENDPOINT.category.getAllCategories}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getAllCategoriesSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getAllCategoriesFailure("Error"));
  }
};
export const updateCategoryApi = async (
  dispatch: AppDispatch,
  body: {
    categoryTitle: string;
  },
  id: number,
  onSuccess: () => void,
) => {
  dispatch(updateCategory());
  try {
    const response = await patch<any>(
      `${ENDPOINT.category.updateCategory}/${id}`,
      body,
    );
    dispatch(updateCategorySuccess(response?.data));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(updateCategoryFailure("Error"));
  }
};
