import { get, getError } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { AppDispatch } from "../../store";
import {
  getHoursChart,
  getHoursChartSuccess,
  getHoursChartFailure,
} from "../../slices/Dashboard/GetHoursChartSlice";
import {
  getAttendance,
  getAttendanceSuccess,
  getAttendanceFailure,
} from "../../slices/Dashboard/GetAttendanceSlice";
import {
  getUpcommingBirthdays,
  getUpcommingBirthdaysFailure,
  getUpcommingBirthdaysSuccess,
} from "../../slices/Dashboard/GetUpcommingBirthdaysSlice";
import {
  getUpcommingAnniversaries,
  getUpcommingAnniversariesFailure,
  getUpcommingAnniversariesSuccess,
} from "../../slices/Dashboard/GetUpCommingAnniversariesSlice";

export const getHoursChartApi = async (dispatch: AppDispatch) => {
  dispatch(getHoursChart());
  try {
    const apiString = `${ENDPOINT.dashboard.getHoursChart}`;
    const response = await get<any>(apiString);
    dispatch(getHoursChartSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getHoursChartFailure("Error"));
  }
};
export const getAttendanceApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(getAttendance());
  try {
    const apiString = `${ENDPOINT.dashboard.getAttendance}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getAttendanceSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getAttendanceFailure("Error"));
  }
};
export const getUpCommingBirthdaysApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(getUpcommingBirthdays());
  try {
    const apiString = `${ENDPOINT.dashboard.upcommingBirthdays}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getUpcommingBirthdaysSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getUpcommingBirthdaysFailure("Error"));
  }
};
export const getUpCommingAnniversariesApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(getUpcommingAnniversaries());
  try {
    const apiString = `${ENDPOINT.dashboard.upCommingAnniversaries}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getUpcommingAnniversariesSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getUpcommingAnniversariesFailure("Error"));
  }
};
