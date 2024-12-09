import { get, getError, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { AppDispatch } from "../../store";
import {
  companyUserAttendanceManagementList,
  companyUserAttendanceManagementListSuccess,
  companyUserAttendanceManagementListFailure,
} from "../../slices/TimeSheet/companyUserAttendanceManagementListSlice";
import {
  attendanceLogsByUserId,
  attendanceLogsByUserIdSuccess,
  attendanceLogsByUserIdFailure,
} from "../../slices/TimeSheet/attendanceLogsByUserIdSlice";
import {
  manualLogEntry,
  manualLogEntrySuccess,
  manualLogEntryFailure,
} from "../../slices/TimeSheet/manualLogEntrySlice";
import {
  attendanceDataByMonth,
  attendanceDataByMonthSuccess,
  attendanceDataByMonthFailure,
} from "../../slices/TimeSheet/attendanceDataByMonthSlice";
import dayjs from "dayjs";
export const companyUserAttendanceManagementListApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  currentOption: any,
  date: any,
) => {
  dispatch(companyUserAttendanceManagementList());
  try {
    const apiString = `${
      ENDPOINT.timeSheet.companyUserAttendanceManagementList
    }?page=${pageLimit.page}&limit=${pageLimit.limit}${
      date.startDate && date.endDate
        ? `&startDate=${date.startDate}&endDate=${date.endDate}`
        : date.startDate
        ? `&inputDate=${dayjs(date.startDate).format(
            "YYYY-MM-DDTHH:mm:ss.SSS[Z]",
          )}`
        : `&inputDate=${dayjs().format("YYYY-MM-DDTHH:mm:ss.SSS[Z]")}`
    }&attendanceByDate=${currentOption}`;
    const response = await get<any>(apiString);
    dispatch(companyUserAttendanceManagementListSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(companyUserAttendanceManagementListFailure("Error"));
  }
};
export const attendanceLogsByUserIdApi = async (
  dispatch: AppDispatch,
  companyUserId: any,
  attendanceDate: any,
) => {
  dispatch(attendanceLogsByUserId());
  try {
    const apiString = `${ENDPOINT.timeSheet.attendanceLogsByUserId}?companyUserId=${companyUserId}&attendanceDate=${attendanceDate}`;
    const response = await get<any>(apiString);
    dispatch(attendanceLogsByUserIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(attendanceLogsByUserIdFailure("Error"));
  }
};
export const manualLogEntryApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess?: any,
) => {
  dispatch(manualLogEntry());
  try {
    const response = await post<any>(ENDPOINT.timeSheet.manualLogEntry, body);
    dispatch(manualLogEntrySuccess(response?.data));
    onSuccess(response.message);
  } catch (err) {
    getError(err);
    dispatch(manualLogEntryFailure("Error"));
  }
};

export const attendanceDataByMonthApi = async (
  dispatch: AppDispatch,
  monthDate: any,
) => {
  dispatch(attendanceDataByMonth());
  try {
    const apiString = `${ENDPOINT.timeSheet.attendanceDataByMonth}?monthDate=${monthDate}`;
    const response = await get<any>(apiString);
    dispatch(attendanceDataByMonthSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(attendanceDataByMonthFailure("Error"));
  }
};
