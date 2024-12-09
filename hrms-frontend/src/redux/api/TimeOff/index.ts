import { get, getError, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { AppDispatch } from "../../store";
import {
  getCompanyUsers,
  getCompanyUsersSuccess,
  getCompanyUsersFailure,
} from "../../slices/TimeOff/getCompanyUsersSlice";
import {
  companyUserLeaves,
  companyUserLeavesSuccess,
  companyUserLeavesFailure,
} from "../../slices/TimeOff/companyUserLeavesSlice";
import {
  getCUAssignLeavePolicies,
  getCUAssignLeavePoliciesSuccess,
  getCUAssignLeavePoliciesFailure,
} from "../../slices/TimeOff/getCUAssignLeavePoliciesSlice";
import {
  addCompanyUserLeave,
  addCompanyUserLeaveSuccess,
  addCompanyUserLeaveFailure,
} from "../../slices/TimeOff/addCompanyUserLeaveSlice";
import { successMessage } from "../../../utils/message";

export const getCompanyUsersApi = async (
  dispatch: AppDispatch,
  employeeId: any,
) => {
  dispatch(getCompanyUsers());
  try {
    const apiString = `${ENDPOINT.timeOff.getCompanyUsers}?page=1&limit=100`;
    const response = await get<any>(apiString);
    dispatch(getCompanyUsersSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getCompanyUsersFailure("Error"));
  }
};
export const companyUserLeavesApi = async (
  dispatch: AppDispatch,
  userId: any,
) => {
  dispatch(companyUserLeaves());
  try {
    const apiString = `${ENDPOINT.timeOff.companyUserLeaves}/${userId}`;
    const response = await get<any>(apiString);
    dispatch(companyUserLeavesSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(companyUserLeavesFailure("Error"));
  }
};
export const getCUAssignLeavePoliciesApi = async (
  dispatch: AppDispatch,
  userId: any,
) => {
  dispatch(getCUAssignLeavePolicies());
  try {
    const apiString = `${ENDPOINT.timeOff.getCUAssignLeavePolicies}/${userId}`;
    const response = await get<any>(apiString);
    dispatch(getCUAssignLeavePoliciesSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getCUAssignLeavePoliciesFailure("Error"));
  }
};
export const addCompanyUserLeaveApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: () => void,
) => {
  dispatch(addCompanyUserLeave());
  try {
    const response = await post<any>(
      ENDPOINT.timeOff.addCompanyUserLeave,
      body,
    );
    dispatch(addCompanyUserLeaveSuccess({ ...response?.data }));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(addCompanyUserLeaveFailure("Error"));
  }
};
