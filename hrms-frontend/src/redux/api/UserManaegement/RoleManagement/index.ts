import { get, getError, post } from "../../../../utils/baseApi";
import { AppDispatch } from "../../../store";
import { ENDPOINT } from "../../../../utils/endpoints";
import {
  getModule,
  getModuleSuccess,
  getModuleFailure,
} from "../../../slices/UserManaegement/RoleManagement/getModuleSlice";
import {
  createCompanyRole,
  createCompanyRoleSuccess,
  createCompanyRoleFailure,
} from "../../../slices/UserManaegement/RoleManagement/createCompanyRoleSlice";
import {
  getCompanyRole,
  getCompanyRoleSuccess,
  getCompanyRoleFailure,
} from "../../../slices/UserManaegement/RoleManagement/getCompanyRoleSlice";
import {
  getModuleBYRoleId,
  getModuleBYRoleIdSuccess,
  getModuleBYRoleIdFailure,
} from "../../../slices/UserManaegement/RoleManagement/getModuleBYRoleIdSlice";

export const getModuleApi = async (dispatch: AppDispatch) => {
  dispatch(getModule());
  try {
    const response = await get<any>(
      `${ENDPOINT.roleManagement.getModule}?page=1&limit=100`,
    );
    if (response) {
      dispatch(getModuleSuccess(response));
    }
  } catch (err) {
    getError(err);
    dispatch(getModuleFailure("Error"));
  }
};
export const getCompanyRoleApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  onSuccess?: (data: any) => void,
  roleTitle?: any,
) => {
  dispatch(getCompanyRole());
  try {
    const response = await get<any>(
      `${ENDPOINT.roleManagement.getCompanyRole}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${roleTitle ? `&title=${roleTitle}` : ""}`,
    );
    if (response) {
      dispatch(getCompanyRoleSuccess(response));
      if (onSuccess) {
        onSuccess(response?.data?.items);
      }
    }
  } catch (err) {
    getError(err);
    dispatch(getCompanyRoleFailure("Error"));
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
    const response = await get<any>(
      `${ENDPOINT.roleManagement.getModuleBYRoleId}/${id}`,
    );
    dispatch(getModuleBYRoleIdSuccess(response));
    onSuccessRoleById(response?.data, modulesData);
  } catch (err) {
    getError(err);
    dispatch(getModuleBYRoleIdFailure("Error"));
  }
};
export const createCompanyRoleApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any,
) => {
  dispatch(createCompanyRole());
  try {
    const response = await post<any>(
      ENDPOINT.roleManagement.createCompanyRole,
      body,
    );
    dispatch(createCompanyRoleSuccess(response));
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(createCompanyRoleFailure("Error"));
  }
};
