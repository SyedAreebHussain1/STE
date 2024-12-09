import { get, getError } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import {
  getUserListForStopPoint,
  getUserListForStopPointFailure,
  getUserListForStopPointSuccess,
} from "../../slices/UserStopLocation/getUserListForStopPointSlice";
import {
  getUserStopPoint,
  getUserStopPointFailure,
  getUserStopPointSuccess,
} from "../../slices/UserStopLocation/getUserStopPointSlice";
import { AppDispatch } from "../../store";

export const getUserListForStopLocationApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  search?: any,
  date?: any
) => {
  dispatch(getUserListForStopPoint());

  try {
    const response = await get<any>(
      `${ENDPOINT.userStopLocation.getUserListForStopPoint}?page=${
        pageLimit.page
      }&limit=${pageLimit.limit}${search ? `&name=${search}` : ""}${
        date ? `&date=${date}` : ""
      }`
    );
    if (response) {
      dispatch(getUserListForStopPointSuccess(response?.data));
    }
  } catch (err) {
    getError(err);
    dispatch(getUserListForStopPointFailure("Error"));
  }
};

export const getUserStopLocationApi = async (
  dispatch: AppDispatch,
  id?: number,
  date?: any
) => {
  dispatch(getUserStopPoint());

  try {
    const response = await get<any>(
      `${ENDPOINT.userStopLocation.getUserStopPoint}/${id}${
        date ? `?date=${date}` : ""
      }`
    );
    if (response) {
      dispatch(getUserStopPointSuccess(response?.data));
    }
  } catch (err) {
    getError(err);
    dispatch(getUserStopPointFailure("Error"));
  }
};
