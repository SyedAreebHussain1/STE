import {
  del,
  get,
  getError,
  patch,
  post,
  postImage,
} from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import { successMessage } from "../../../../utils/message";
import {
  createPackage,
  createPackageSuccess,
  createPackageFailure,
} from "../../../../store/slices/Dashboard/Package/createPackageSlice";
import {
  getServicePackages,
  getServicePackagesSuccess,
  getServicePackagesFailure,
} from "../../../../store/slices/Dashboard/Package/getServicePackagesSlice";
import {
  deleteServicePackages,
  deleteServicePackagesSuccess,
  deleteServicePackagesFailure,
} from "../../../../store/slices/Dashboard/Package/deleteServicePackagesSlice";

export const createPackageApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: () => void,
) => {
  dispatch(createPackage());
  try {
    const response = await postImage<any>(ENDPOINT.package.createPackage, body);
    dispatch(createPackageSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(createPackageFailure("Error"));
  }
};
export const getServicePackagesApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(getServicePackages());
  try {
    const apiString = `${ENDPOINT.package.getServicePackages}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getServicePackagesSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getServicePackagesFailure("Error"));
  }
};
export const deleteServicePackagesApi = async (
  dispatch: AppDispatch,
  id: number,
) => {
  dispatch(deleteServicePackages());
  try {
    const response = await del<any>(
      `${ENDPOINT.package.deleteServicePackages}/${id}`,
    );
    dispatch(deleteServicePackagesSuccess(response?.data));
    successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(deleteServicePackagesFailure("Error"));
  }
};
