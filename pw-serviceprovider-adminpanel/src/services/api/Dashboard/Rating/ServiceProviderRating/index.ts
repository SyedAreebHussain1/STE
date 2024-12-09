import { del, get, getError, patch, post } from "../../../../../utils/baseApi";
import { ENDPOINT } from "../../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../../store/store";
import { successMessage } from "../../../../../utils/message";

import {
  getServiceProviderRating,
  getServiceProviderRatingSuccess,
  getServiceProviderRatingFailure,
} from "../../../../../store/slices/Dashboard/Rating/ServiceProviderRating/getServiceProviderRatingSlice";
export const getServiceProviderRatingApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(getServiceProviderRating());
  try {
    const apiString: string = `${ENDPOINT.rating.getServiceProviderRating}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getServiceProviderRatingSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getServiceProviderRatingFailure("Error"));
  }
};
