import { getError, getRequest, patch } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/endpoints";
import {
  approveOrRejectLeave,
  approveOrRejectLeaveFailure,
  approveOrRejectLeaveSuccess,
} from "../../../slices/TimeOffAndHoliday/Leaves/approveOrRejectLeaveSlice";
import {
  getAllLeaves,
  getAllLeavesFailure,
  getAllLeavesSuccess,
} from "../../../slices/TimeOffAndHoliday/Leaves/getAllLeavesSlice";
import { AppDispatch } from "../../../store";

export const getAllLeavesApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  name?: string,
) => {
  dispatch(getAllLeaves());
  try {
    const apiString = `${ENDPOINT.timeOffAndHoliday.getAllLeaves}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${name ? `&name=${name}` : ""}`;
    const response = await getRequest<any>(apiString);
    if (response) {
      dispatch(getAllLeavesSuccess(response));
    } else {
      dispatch(getAllLeavesFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getAllLeavesFailure("Error"));
  }
};

export const approveOrRejectLeaveApi = async (
  dispatch: AppDispatch,
  body: { status: string; remarks?: string },
  id: number,
  onSuccess?: () => void,
) => {
  dispatch(approveOrRejectLeave());
  try {
    const apiString = `${ENDPOINT.timeOffAndHoliday.approveOrRejectLeave}/${id}`;
    const response = await patch<any>(apiString, body);
    if (response) {
      dispatch(approveOrRejectLeaveSuccess(response));
    } else {
      dispatch(approveOrRejectLeaveFailure("Error"));
    }
    if (onSuccess) {
      onSuccess();
    }
  } catch (err) {
    getError(err);
    dispatch(approveOrRejectLeaveFailure("Error"));
  }
};
