import { del, get, getError, patch, post } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/endpoints";
import { successMessage } from "../../../../utils/message";
import {
  createProject,
  createProjectFailure,
  createProjectSuccess,
} from "../../../slices/ProjectAndActivities/project/createProjectSlice";
import {
  deleteProject,
  deleteProjectFailure,
  deleteProjectSuccess,
} from "../../../slices/ProjectAndActivities/project/deleteProjectSlice";
import {
  editProject,
  editProjectFailure,
  editProjectSuccess,
} from "../../../slices/ProjectAndActivities/project/editProjectSlice";
import {
  getAllDepartmentsForProject,
  getAllDepartmentsForProjectFailure,
  getAllDepartmentsForProjectSuccess,
} from "../../../slices/ProjectAndActivities/project/getAllDepartmentsForProjectSlice";
import {
  getAllProjects,
  getAllProjectsFailure,
  getAllProjectsSuccess,
} from "../../../slices/ProjectAndActivities/project/getAllProjectsSlice";
import {
  getProjectById,
  getProjectByIdFailure,
  getProjectByIdSuccess,
} from "../../../slices/ProjectAndActivities/project/getProjectByIdSlice";
import { AppDispatch } from "../../../store";

export const createProjectApi = async (
  dispatch: AppDispatch,
  body: any,
  onClose: any
) => {
  dispatch(createProject());
  try {
    const response = await post<any>(
      ENDPOINT.projectAndActivities.project,
      body
    );
    dispatch(createProjectSuccess(response));
    successMessage(response?.message);
    onClose(response);
  } catch (err) {
    getError(err);
    dispatch(createProjectFailure("Error"));
  }
};

export const getAllProjectsApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  filters?: { departmentId: any; searchValue: any }
) => {
  dispatch(getAllProjects());
  try {
    const apiString = `${ENDPOINT.projectAndActivities.project}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}&departmentId=${
      filters?.departmentId ? filters?.departmentId : ""
    }&name=${filters?.searchValue ? filters?.searchValue : ""}`;
    const response = await get<any>(apiString);
    dispatch(getAllProjectsSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllProjectsFailure("Error"));
  }
};

export const getProjectByIdApi = async (dispatch: AppDispatch, id: any) => {
  dispatch(getProjectById());
  try {
    const apiString = `${ENDPOINT.projectAndActivities.project}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getProjectByIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getProjectByIdFailure("Error"));
  }
};

export const editProjectApi = async (
  dispatch: AppDispatch,
  id: any,
  body: any,
  onClose: any
) => {
  dispatch(editProject());
  try {
    const apiString = `${ENDPOINT.projectAndActivities.project}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(editProjectSuccess(response));
    successMessage(response?.message);
    onClose();
  } catch (err) {
    getError(err);
    dispatch(editProjectFailure("Error"));
  }
};

export const deleteProjectApi = async (
  dispatch: AppDispatch,
  id: number | string,
  onSuccess: any
) => {
  dispatch(deleteProject());
  try {
    const apiString = `${ENDPOINT.projectAndActivities.project}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteProjectSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(deleteProjectFailure("Error"));
  }
};

export const getAllDepartmentsForProjectApi = async (dispatch: AppDispatch) => {
  dispatch(getAllDepartmentsForProject());
  try {
    const apiString = `${ENDPOINT.projectAndActivities.GetAllDepartments}`;
    const response = await get<any>(apiString);
    dispatch(getAllDepartmentsForProjectSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllDepartmentsForProjectFailure("Error"));
  }
};
