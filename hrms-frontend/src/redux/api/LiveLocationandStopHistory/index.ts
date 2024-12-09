import { get, getError } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import {
  getStopHistory,
  getStopHistoryFailure,
  getStopHistorySuccess,
} from "../../slices/LiveLocationandStopHistory/getStopHistorySlice";
import { AppDispatch } from "../../store";

export const getStopHistoryApi = async (
  id: any,
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number }
) => {
  dispatch(getStopHistory());
  try {
    const apiString = `${ENDPOINT.LiveLocationandStopHistory.getStopHistory}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    if (response) {
      dispatch(getStopHistorySuccess(response));
    } else {
      dispatch(getStopHistoryFailure("Error"));
    }
  } catch (err) {
    getError(err);
    dispatch(getStopHistoryFailure("Error"));
  }
};
