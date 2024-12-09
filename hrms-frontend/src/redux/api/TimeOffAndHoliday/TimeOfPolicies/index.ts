import { del, get, getError, patch, post } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/endpoints";
import { AppDispatch } from "../../../store";
import {
  getCompanyLeavePolicy,
  getCompanyLeavePolicySuccess,
  getCompanyLeavePolicyFailure,
} from "../../../slices/TimeOffAndHoliday/TimeOfPolicies/getCompanyLeavePolicySlice";
import {
  createCompanyLeavePolicy,
  createCompanyLeavePolicySuccess,
  createCompanyLeavePolicyFailure,
} from "../../../slices/TimeOffAndHoliday/TimeOfPolicies/createCompanyLeavePolicySlice";
import {
  getCompanyUsers,
  getCompanyUsersFailure,
  getCompanyUsersSuccess,
} from "../../../slices/TimeOffAndHoliday/TimeOfPolicies/getCompanyUsersSlice";
import {
  updateCompanyLeavePolicy,
  updateCompanyLeavePolicyFailure,
  updateCompanyLeavePolicySuccess,
} from "../../../slices/TimeOffAndHoliday/TimeOfPolicies/updateCompanyLeavePolicySlice";
import {
  getLeaveMembersByPolicyId,
  getLeaveMembersByPolicyIdFailure,
  getLeaveMembersByPolicyIdSuccess,
} from "../../../slices/TimeOffAndHoliday/TimeOfPolicies/getLeaveMembersByPolicyIdSlice";
import {
  deleteCompanyLeavePolicy,
  deleteCompanyLeavePolicyFailure,
  deleteCompanyLeavePolicySuccess,
} from "../../../slices/TimeOffAndHoliday/TimeOfPolicies/deleteCompanyLeavePolicySlice";
import { successMessage } from "../../../../utils/message";
export const getCompanyLeavePolicyApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  title?: string
) => {
  dispatch(getCompanyLeavePolicy());
  try {
    const apiString = `${
      ENDPOINT.timeOffAndHoliday.getCompanyLeavePolicy
    }?page=${pageLimit.page}&limit=${pageLimit.limit}${
      title ? `&title=${title}` : ""
    }`;
    const response = await get<any>(apiString);
    dispatch(getCompanyLeavePolicySuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getCompanyLeavePolicyFailure("Error"));
  }
};
export const createCompanyLeavePolicyApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) => {
  dispatch(createCompanyLeavePolicy());
  try {
    const response = await post<any>(
      ENDPOINT.timeOffAndHoliday.createCompanyLeavePolicy,
      body
    );
    dispatch(createCompanyLeavePolicySuccess(response));
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(createCompanyLeavePolicyFailure("Error"));
  }
};
export const updateCompanyLeavePolicyApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any,
  id: string
) => {
  dispatch(updateCompanyLeavePolicy());
  try {
    const response = await patch<any>(
      `${ENDPOINT.timeOffAndHoliday.updateCompanyLeavePolicy}/${id}`,
      body
    );
    dispatch(updateCompanyLeavePolicySuccess(response));
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(updateCompanyLeavePolicyFailure("Error"));
  }
};

export const getCompanyUsersApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  onSuccess: any,
  name?: string
) => {
  dispatch(getCompanyUsers());
  try {
    const apiString = `${ENDPOINT.timeOffAndHoliday.getCompanyUsers}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${name ? `&name=${name}` : ""}`;
    const response = await get<any>(apiString);
    if (response) {
      dispatch(getCompanyUsersSuccess(response));
      onSuccess(response?.data?.items);
    } else {
      dispatch(getCompanyUsersFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getCompanyUsersFailure("Error"));
  }
};

export const deleteCompanyLeavePolicyApi = async (
  dispatch: AppDispatch,
  id: number | string,
  onSuccess: any
) => {
  dispatch(deleteCompanyLeavePolicy());
  try {
    const apiString = `${ENDPOINT.timeOffAndHoliday.deleteCompanyLeavePolicy}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteCompanyLeavePolicySuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(deleteCompanyLeavePolicyFailure("Error"));
  }
};
export const getLeaveMembersByPolicyApi = async (
  dispatch: AppDispatch,
  policyId: any
) => {
  dispatch(getLeaveMembersByPolicyId());
  try {
    const apiString = `${ENDPOINT.timeOffAndHoliday.getLeaveMembersByPolicy}/${policyId}`;
    const response = await get<any>(apiString);
    dispatch(getLeaveMembersByPolicyIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getLeaveMembersByPolicyIdFailure("Error"));
  }
};
