import { del, get, getError, patch, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";
import { AppDispatch } from "../../store";
import {
  createEvolution,
  createEvolutionSuccess,
  createEvolutionFailure,
} from "../../slices/evolution/createEvolutionSlice";
import {
  getDepartmentForEvaluation,
  getDepartmentForEvaluationSuccess,
  getDepartmentForEvaluationFailure,
} from "../../slices/evolution/getDepartmentForEvaluationSlice";
import {
  getDepartmentUsersId,
  getDepartmentUsersIdSuccess,
  getDepartmentUsersIdFailure,
} from "../../slices/evolution/getDepartmentUsersIdSlice";
import {
  createEvaluationForDepartment,
  createEvaluationForDepartmentSuccess,
  createEvaluationForDepartmentFailure,
} from "../../slices/evolution/createEvaluationForDepartmentSlice";
import {
  getAllEvaluationsForManagmnt,
  getAllEvaluationsForManagmntSuccess,
  getAllEvaluationsForManagmntFailure,
} from "../../slices/evolution/getAllEvaluationsSlice";
import {
  editEvaluationForm,
  editEvaluationFormSuccess,
  editEvaluationFormFailure,
} from "../../slices/evolution/editEvaluationFormSlice";
import {
  getEvaluationsByDepartmenId,
  getEvaluationsByDepartmenIdSuccess,
  getEvaluationsByDepartmenIdFailure,
} from "../../slices/evolution/getEvaluationsByDepartmenIdSlice";
import {
  assignEvaluationForm,
  assignEvaluationFormSuccess,
  assignEvaluationFormFailure,
} from "../../slices/evolution/assignEvaluationFormSlice";
import {
  getEvaluatedUsers,
  getEvaluatedUsersSuccess,
  getEvaluatedUsersFailure,
} from "../../slices/evolution/getEvaluatedUsersSlice";
import {
  getAssignedEvaluationsForUser,
  getAssignedEvaluationsForUserSuccess,
  getAssignedEvaluationsForUserFailure,
} from "../../slices/evolution/getAssignedEvaluationsForUserSlice";
import {
  updateEvaluationsForUser,
  updateEvaluationsForUserSuccess,
  updateEvaluationsForUserFailure,
} from "../../slices/evolution/updateEvaluationsForUserSlice";

export const createEvolutionApi = async (dispatch: AppDispatch, body: any) => {
  dispatch(createEvolution());
  try {
    const response = await post<any>(ENDPOINT.evolution.createEvolution, body);
    dispatch(createEvolutionSuccess(response));
    successMessage(response?.message);
  } catch (err) {
    getError(err);
    dispatch(createEvolutionFailure("Error"));
  }
};

export const assignEvaluationFormApi = async (
  dispatch: AppDispatch,
  body: any,
  onClose: any,
) => {
  dispatch(assignEvaluationForm());
  try {
    const response = await post<any>(
      ENDPOINT.evolution.assignEvaluationForm,
      body,
    );
    dispatch(assignEvaluationFormSuccess(response));
    successMessage(response?.message);
    onClose();
  } catch (err) {
    getError(err);
    dispatch(assignEvaluationFormFailure("Error"));
  }
};
export const createEvaluationForDepartmentApi = async (
  dispatch: AppDispatch,
  body: any,
  onClose: any,
) => {
  dispatch(createEvaluationForDepartment());
  try {
    const response = await post<any>(
      ENDPOINT.evolution.createEvaluationForDepartment,
      body,
    );
    dispatch(createEvaluationForDepartmentSuccess(response));
    successMessage(response?.message);
    onClose();
  } catch (err) {
    getError(err);
    dispatch(createEvaluationForDepartmentFailure("Error"));
  }
};
export const getDepartmentForEvaluationApi = async (dispatch: AppDispatch) => {
  dispatch(getDepartmentForEvaluation());
  try {
    const apiString = `${ENDPOINT.evolution.getDepartmentForEvaluation}`;
    const response = await get<any>(apiString);
    dispatch(getDepartmentForEvaluationSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getDepartmentForEvaluationFailure("Error"));
  }
};

export const getDepartmentUsersIdApi = async (
  dispatch: AppDispatch,
  id: any,
) => {
  dispatch(getDepartmentUsersId());
  try {
    const apiString = `${ENDPOINT.evolution.getDepartmentUsersId}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getDepartmentUsersIdSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getDepartmentUsersIdFailure("Error"));
  }
};

export const getAssignedEvaluationsForUserApi = async (
  dispatch: AppDispatch,
  userId: any,
) => {
  dispatch(getAssignedEvaluationsForUser());
  try {
    const apiString = `${ENDPOINT.evolution.getAssignedEvaluationsForUser}/${userId}`;
    const response = await get<any>(apiString);
    dispatch(getAssignedEvaluationsForUserSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getAssignedEvaluationsForUserFailure("Error"));
  }
};
export const getEvaluationsByDepartmenIdApi = async (
  dispatch: AppDispatch,
  id: any,
) => {
  dispatch(getEvaluationsByDepartmenId());
  try {
    const apiString = `${ENDPOINT.evolution.getEvaluationsByDepartmenId}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getEvaluationsByDepartmenIdSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getEvaluationsByDepartmenIdFailure("Error"));
  }
};

export const getAllEvaluationsForManagmntApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(getAllEvaluationsForManagmnt());
  try {
    const apiString = `${ENDPOINT.evolution.getAllEvaluations}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getAllEvaluationsForManagmntSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllEvaluationsForManagmntFailure("Error"));
  }
};

export const getEvaluatedUsersApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(getEvaluatedUsers());
  try {
    const apiString = `${ENDPOINT.evolution.getEvaluatedUsers}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getEvaluatedUsersSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getEvaluatedUsersFailure("Error"));
  }
};

export const editEvaluationFormApi = async (
  dispatch: AppDispatch,
  body: {
    title: string;
  },
  id: any,
  onClose: any,
) => {
  dispatch(editEvaluationForm());
  try {
    const apiString = `${ENDPOINT.evolution.editEvaluationForm}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(editEvaluationFormSuccess(response));
    successMessage(response?.message);
    onClose(null);
  } catch (err) {
    getError(err);
    dispatch(editEvaluationFormFailure("Error"));
  }
};
export const updateEvaluationsForUserApi = async (
  dispatch: AppDispatch,
  body: any,
  id: any,
  onClose: any,
) => {
  dispatch(updateEvaluationsForUser());
  try {
    const apiString = `${ENDPOINT.evolution.updateEvaluationsForUser}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(updateEvaluationsForUserSuccess(response));
    successMessage(response?.message);
    onClose(null);
  } catch (err) {
    getError(err);
    dispatch(updateEvaluationsForUserFailure("Error"));
  }
};
