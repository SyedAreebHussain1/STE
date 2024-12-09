import {
  get,
  getError,
  patch,
  post,
  patchFormData,
  postImage,
} from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import { successMessage } from "../../../../utils/message";
import {
  getAllModules,
  getAllModulesSuccess,
  getAllModulesFailure,
} from "../../../../store/slices/Dashboard/UserManagment/GetAllModulesSlice";
import {
  createSystemRole,
  createSystemRoleSuccess,
  createSystemRoleFailure,
} from "../../../../store/slices/Dashboard/UserManagment/CreateSystemRoleSlice";
import {
  createUser,
  createUserSuccess,
  createUserFailure,
} from "../../../../store/slices/Dashboard/UserManagment/CreateUserSlice";

import {
  getSystemRole,
  getSystemRoleSuccess,
  getSystemRoleFailure,
} from "../../../../store/slices/Dashboard/UserManagment/GetSystemRoleSlice";
import {
  getAllSystemUsers,
  getAllSystemUsersSuccess,
  getAllSystemUsersFailure,
} from "../../../../store/slices/Dashboard/UserManagment/getAllSystemUsersSlice";
import {
  updateSystemUser,
  updateSystemUserSuccess,
  updateSystemUserFailure,
} from "../../../../store/slices/Dashboard/UserManagment/updateSystemUserSlice";
import {
  getAllModulesSideBar,
  getAllModulesSideBarSuccess,
  getAllModulesSideBarFailure,
} from "../../../../store/slices/Dashboard/UserManagment/getAllModulesSideBarSlice";
import {
  updateStatus,
  updateStatusSuccess,
  updateStatusFailure,
} from "../../../../store/slices/Dashboard/UserManagment/updateStatusSlice";
import {
  getModuleBYRoleId,
  getModuleBYRoleIdSuccess,
  getModuleBYRoleIdFailure,
} from "../../../../store/slices/Dashboard/UserManagment/getModuleBYRoleIdSlice";
export const createSystemRoleApi = async (
  dispatch: AppDispatch,
  body: {
    title: string;
    module: any;
  },
  success: any,
) => {
  dispatch(createSystemRole());

  try {
    const response = await post<any>(ENDPOINT.userManagement.systemRole, body);
    dispatch(createSystemRoleSuccess(response));
    successMessage(response?.message);
    success();
  } catch (err) {
    getError(err);
    dispatch(createSystemRoleFailure("Error"));
  }
};
export const createUserApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: () => void,
) => {
  dispatch(createUser());

  try {
    const response = await postImage<any>(
      ENDPOINT.userManagement.registration,
      body,
    );
    dispatch(createUserSuccess(response));
    onSuccess();
    successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(createUserFailure("Error"));
  }
};

export const getSystemRoleApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  onSuccess?: (data: any) => void,
) => {
  dispatch(getSystemRole());
  try {
    const apiString = `${ENDPOINT.userManagement.getAllSystemRoles}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getSystemRoleSuccess(response));
    if (onSuccess) {
      onSuccess(response?.data?.items);
    }
  } catch (err: any) {
    getError(err);
    dispatch(getSystemRoleFailure("Error"));
  }
};
export const getAllModulesApi = async (dispatch: AppDispatch) => {
  dispatch(getAllModules());
  try {
    const apiString = `${ENDPOINT.userManagement.getAllModules}`;
    const response = await get<any>(apiString);
    dispatch(getAllModulesSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getAllModulesFailure("Error"));
  }
};
export const getAllSystemUsersApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(getAllSystemUsers());
  try {
    const apiString = `${ENDPOINT.userManagement.getAllSystemUsers}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getAllSystemUsersSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getAllSystemUsersFailure("Error"));
  }
};
export const updateSystemUsersApi = async (
  dispatch: AppDispatch,
  body: any,
  id: number,
  onSuccess: () => void,
) => {
  dispatch(updateSystemUser());
  try {
    const response = await patchFormData<any>(
      `${ENDPOINT.userManagement.updateSystemUsers}/${id}`,
      body,
    );
    dispatch(updateSystemUserSuccess(response?.data));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(updateSystemUserFailure("Error"));
  }
};
export const updateStatusApi = async (
  dispatch: AppDispatch,
  body: { isActive: boolean },
  id: number,
) => {
  dispatch(updateStatus());
  try {
    const response = await patch<any>(
      `${ENDPOINT.userManagement.updateStatus}/${id}`,
      body,
    );
    dispatch(updateStatusSuccess(response?.data));
    successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(updateStatusFailure("Error"));
  }
};

export const getAllModulesSideBarApi = async (dispatch: AppDispatch) => {
  dispatch(getAllModulesSideBar());
  try {
    const apiString = `${ENDPOINT.userManagement.getAllModulesSideBar}`;
    const response = await get<any>(apiString);
    dispatch(getAllModulesSideBarSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getAllModulesSideBarFailure("Error"));
  }
};
export const getModuleBYRoleIdApi = async (
  dispatch: AppDispatch,
  id: number,
  onSuccessRoleById: any,
  modulesData: any,
) => {
  dispatch(getModuleBYRoleId());
  try {
    const apiString = `${ENDPOINT.userManagement.getModuleBYRoleId}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getModuleBYRoleIdSuccess(response));
    onSuccessRoleById(response?.data, modulesData);
  } catch (err: any) {
    getError(err);
    dispatch(getModuleBYRoleIdFailure("Error"));
  }
};
