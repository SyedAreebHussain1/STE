import { del, get, getError, patch, post } from "../../../../../utils/baseApi";
import { ENDPOINT } from "../../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../../store/store";
import {
  getCustomerRating,
  getCustomerRatingSuccess,
  getCustomerRatingFailure,
} from "../../../../../store/slices/Dashboard/Rating/CustomerRating/getCustomerRatingSlice";
export const getCustomerRatingApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
) => {
  dispatch(getCustomerRating());
  try {
    const apiString: string = `${ENDPOINT.rating.getCustomerRating}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getCustomerRatingSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getCustomerRatingFailure("Error"));
  }
};
