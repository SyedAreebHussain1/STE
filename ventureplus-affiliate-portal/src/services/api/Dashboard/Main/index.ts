import {
  getAllSignups,
  getAllSignupsFailure,
  getAllSignupsSuccess,
} from "../../../../store/slices/Dashboard/Main/AllSignupsSlice";
import {
  getAllSubscribers,
  getAllSubscribersFailure,
  getAllSubscribersSuccess,
} from "../../../../store/slices/Dashboard/Main/AllSubscribersSlice";
import { AppDispatch } from "../../../../store/store";
import { get, getError } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";

export const getDasboardStatsApi = async () => {
  try {
    const apiString = `${ENDPOINT.main.dashboardStats}`;
    const response = await get<any>(apiString);
    return response;
  } catch (err) {
    getError(err);
    return null;
  }
};

export const getAllSubscribersApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  name?: string,
  date?: string
) => {
  dispatch(getAllSubscribers());
  try {
    const apiString = `${ENDPOINT.main.getAllSubscribers}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}&name=${name ? name : ""}&date=${
      date ? date : ""
    }`;
    const response = await get<any>(apiString);
    dispatch(getAllSubscribersSuccess(response));
    return response;
  } catch (err) {
    getError(err);
    dispatch(getAllSubscribersFailure("Error"));
    return null;
  }
};

export const getAllSignupsApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  name?: string,
  date?: string
) => {
  dispatch(getAllSignups());
  try {
    const apiString = `${ENDPOINT.main.getAllSignups}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}&name=${name ? name : ""}&date=${
      date ? date : ""
    }`;
    const response = await get<any>(apiString);
    dispatch(getAllSignupsSuccess(response));
    return response;
  } catch (err) {
    getError(err);
    dispatch(getAllSignupsFailure("Error"));
    return null;
  }
};
