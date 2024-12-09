import { FaBullseye } from "react-icons/fa";
import {
  createProduct,
  createProductFailure,
  createProductSuccess,
} from "../../../../redux/slices/BusinessPlanSetup/Products/createProductSlice";
import {
  deleteProduct,
  deleteProductFailure,
  deleteProductSuccess,
} from "../../../../redux/slices/BusinessPlanSetup/Products/deleteProductSlice";
import {
  editProduct,
  editProductFailure,
  editProductSuccess,
} from "../../../../redux/slices/BusinessPlanSetup/Products/editProductSlice";
import {
  getProductById,
  getProductByIdFailure,
  getProductByIdSuccess,
} from "../../../../redux/slices/BusinessPlanSetup/Products/getProductByIdSlice";
import { AppDispatch } from "../../../../redux/store";
import {
  del,
  get,
  getError,
  patch,
  patchFormData,
  post,
  postImage,
} from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/endpoints";
import { successMessage } from "../../../../utils/message";

export const getProductByIdApi = async (dispatch: AppDispatch, id: number) => {
  dispatch(getProductById());
  try {
    const apiString = `${ENDPOINT.businessPlanSetup.getProduct}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getProductByIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getProductByIdFailure("Error"));
  }
};

export const editProductApi = async (
  dispatch: AppDispatch,
  id: any,
  body: FormData,
  onClose: any,
) => {
  dispatch(editProduct());
  try {
    const apiString = `${ENDPOINT.businessPlanSetup.products}/${id}`;
    const response = await patchFormData<any>(apiString, body);
    dispatch(editProductSuccess(response));
    successMessage(response?.message);
    onClose(true);
  } catch (err) {
    getError(err);
    onClose(FaBullseye);
    dispatch(editProductFailure("Error"));
  }
};

export const createProductApi = async (
  dispatch: AppDispatch,
  body: FormData,
  onClose: any,
  onSuccess?: any,
) => {
  dispatch(createProduct());
  try {
    const apiString = `${ENDPOINT.businessPlanSetup.products}`;
    const response = await postImage<any>(apiString, body);
    dispatch(createProductSuccess(response));
    onClose(true);
    if (onSuccess) {
      onSuccess();
    }
  } catch (err) {
    getError(err);
    onClose(false);
    dispatch(createProductFailure("Error"));
  }
};

export const deleteProductApi = async (
  dispatch: AppDispatch,
  id: number | string,
  onSuccess: () => void,
) => {
  dispatch(deleteProduct());
  try {
    const apiString = `${ENDPOINT.businessPlanSetup.products}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteProductSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(deleteProductFailure("Error"));
  }
};
