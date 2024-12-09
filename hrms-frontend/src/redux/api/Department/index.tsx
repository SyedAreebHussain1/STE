import { del, get, getError, patch, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";
import { AppDispatch } from "../../store";
import {
  createDepartment,
  createDepartmentSuccess,
  createDepartmentFailure,
} from "../../slices/Department/createDepartmentSlice";
import {
  getAllDepartment,
  getAllDepartmentSuccess,
  getAllDepartmentFailure,
} from "../../slices/Department/getAllDepartmentTableSlice";
import {
  updateDepartment,
  updateDepartmentSuccess,
  updateDepartmentFailure,
} from "../../slices/Department/updateDepartmentSlice";
import {
  deleteDepartment,
  deleteDepartmentSuccess,
  deleteDepartmentFailure,
} from "../../slices/Department/deleteDepartmentSlice";
import {
  getAllCompanyUsers,
  getAllCompanyUsersFailure,
  getAllCompanyUsersSuccess,
} from "../../slices/Department/getAllCompanyUsersSlice";
import {
  addManager,
  addManagerFailure,
  addManagerSuccess,
} from "../../slices/Department/addManagerSlice";

export const createDepartmentApi = async (
  dispatch: AppDispatch,
  body: {
    title: string;
  },
  onClose: any
) => {
  dispatch(createDepartment());
  try {
    const response = await post<any>(
      ENDPOINT.department.createDepartment,
      body
    );
    dispatch(createDepartmentSuccess(response));
    successMessage(response?.message);
    onClose(false);
  } catch (err) {
    getError(err);
    dispatch(createDepartmentFailure("Error"));
  }
};

export const getAllDepartmentApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number }
) => {
  dispatch(getAllDepartment());
  try {
    const apiString = `${ENDPOINT.department.getAllDepartment}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getAllDepartmentSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllDepartmentFailure("Error"));
  }
};
export const updateDepartmentApi = async (
  dispatch: AppDispatch,
  id: any,
  body: {
    title: string;
  },
  onClose: any
) => {
  dispatch(updateDepartment());
  try {
    const apiString = `${ENDPOINT.department.updateDepartment}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(updateDepartmentSuccess(response));
    successMessage(response?.message);
    onClose(null);
  } catch (err) {
    getError(err);
    dispatch(updateDepartmentFailure("Error"));
  }
};
export const deleteDepartmentApi = async (
  dispatch: AppDispatch,
  id: number | string
) => {
  dispatch(deleteDepartment());
  try {
    const apiString = `${ENDPOINT.department.deleteDepartment}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteDepartmentSuccess(response));
    successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(deleteDepartmentFailure("Error"));
  }
};

export const getAllCompanyUsersApi = async (
    departmentId: any,
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  onSuccess?: any
) => {
  dispatch(getAllCompanyUsers());
  try {
    const apiString = `${ENDPOINT.department.getAllCompanyUsers}/${departmentId}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getAllCompanyUsersSuccess(response));
    onSuccess && onSuccess(response?.data?.items)
  } catch (err) {
    getError(err);
    dispatch(getAllCompanyUsersFailure("Error"));
  }
};

export const addManagerApi = async (
  dispatch: AppDispatch,
  departmentId: any,
  body: {
    UserId: any;
  },
  onClose: any
) => {
  dispatch(addManager());
  try {
    const apiString = `${ENDPOINT.department.addManager}/${departmentId}`;
    const response = await patch<any>(apiString, body);
    dispatch(addManagerSuccess(response));
    successMessage(response?.message);
    onClose(null);
  } catch (err) {
    getError(err);
    dispatch(addManagerFailure("Error"));
  }
};
