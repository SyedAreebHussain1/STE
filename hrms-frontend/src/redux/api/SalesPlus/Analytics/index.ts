import { get, getError, post } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/endpoints";
import { AppDispatch } from "../../../store";
import {
  getAllLead,
  getAllLeadSuccess,
  getAllLeadFailure,
} from "../../../slices/SalesPlus/Analytics/getAllLeadSlice";
import {
  getLeadsStatusCount,
  getLeadsStatusCountFailure,
  getLeadsStatusCountSuccess,
} from "../../../slices/SalesPlus/Analytics/getLeadsStatusCountSlice";
import {
  getLeadsSourceCount,
  getLeadsSourceCountFailure,
  getLeadsSourceCountSuccess,
} from "../../../slices/SalesPlus/Analytics/getLeadsSourceCountSlice";
import {
  getLeadLogCount,
  getLeadLogCountFailure,
  getLeadLogCountSuccess,
} from "../../../slices/SalesPlus/Analytics/getLeadLogCountSlice";
import {
  getAllUsers,
  getAllUsersFailure,
  getAllUsersSuccess,
} from "../../../slices/SalesPlus/Analytics/getAllUsersSlice";
export const getAllLeadApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  searchName?: any,
  status?: any,
  leadsSource?: any,
  agencyStaff?: any,
  startDate?: any,
  endDate?: any
) => {
  dispatch(getAllLead());
  try {
    const response = await get<any>(
      `${ENDPOINT.salesPlus.getAllLead}?page=${pageLimit.page}&limit=${
        pageLimit.limit
      }${searchName ? `&name=${searchName}` : ""}${
        status ? `&status=${status}` : ""
      }${leadsSource ? `&leadSource=${leadsSource}` : ""}${
        agencyStaff ? `&agencyStaff=${agencyStaff}` : ""
      }${startDate ? `&startDate=${startDate}` : ""}${
        endDate ? `&endDate=${endDate}` : ""
      }`
    );
    dispatch(getAllLeadSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllLeadFailure("Error"));
  }
};

export const getLeadsStatusCountApi = async (dispatch: AppDispatch) => {
  dispatch(getLeadsStatusCount());
  try {
    const response = await get<any>(
      `${ENDPOINT.salesPlus.getLeadsStatusCount}`
    );
    dispatch(getLeadsStatusCountSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getLeadsStatusCountFailure("Error"));
  }
};

export const getLeadsSourceCountApi = async (dispatch: AppDispatch) => {
  dispatch(getLeadsSourceCount());
  try {
    const response = await get<any>(`${ENDPOINT.salesPlus.LeadsSourceCount}`);
    dispatch(getLeadsSourceCountSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getLeadsSourceCountFailure("Error"));
  }
};

export const getLeadLogCountApi = async (
  dispatch: AppDispatch,
  userId?: any,
  duration?: any
) => {
  dispatch(getLeadLogCount());
  try {
    const response = await get<any>(
      `${ENDPOINT.salesPlus.getLeadLogCount}?userId=${
        userId ? userId : ""
      }&duration=${duration ? duration : "Today"}`
    );
    dispatch(getLeadLogCountSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getLeadLogCountFailure("Error"));
  }
};

export const getAllUsersApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  onSuccess?: any
) => {
  dispatch(getAllUsers());
  try {
    const response = await get<any>(
      `${ENDPOINT.salesPlus.getAllUserForWebApp}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );
    onSuccess(response);
    dispatch(getAllUsersSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(getAllUsersFailure("Error"));
  }
};
