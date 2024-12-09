import { get, getError } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import { successMessage } from "../../../../utils/message";
import {
  getMarketing,
  getMarketingSuccess,
  getMarketingFailure,
} from "../../../../store/slices/Dashboard/Marketing/getMarketingSlice";

type SearchQuery = {
  name?: string | null;
  documentType?: string | null;
  date?: any;
};
export const getMarketingApi = async (
  dispatch: AppDispatch,
  query?: SearchQuery,
) => {
  dispatch(getMarketing());
  try {
    const apiString = `${ENDPOINT.marketing.marketing}?${
      query?.name ? `&name=${query?.name}` : ""
    }${query?.documentType ? `&documentType=${query?.documentType}` : ""}${
      query?.date ? `&date=${query?.date}` : ""
    }`;
    const response = await get<any>(apiString);
    dispatch(getMarketingSuccess(response?.data));
  } catch (err: any) {
    getError(err);
    dispatch(getMarketingFailure("Error"));
  }
};
