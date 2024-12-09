import {
  getEbooks,
  getEbooksSuccess,
  getEbooksFailure,
} from "../../../../store/slices/Dashboard/Ebooks/getEbooksSlice";
import { get, getError } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
type SearchQuery = {
  name?: string;
  documentType?: string | null;
  date?: any;
};
export const getEbooksApi = async (
  dispatch: AppDispatch,
  query?: SearchQuery,
) => {
  dispatch(getEbooks());
  try {
    const apiString = `${ENDPOINT.ebooks.ebooks}?${
      query?.name ? `&name=${query?.name}` : ""
    }${query?.documentType ? `&documentType=${query?.documentType}` : ""}${
      query?.date ? `&date=${query?.date}` : ""
    }`;
    const response = await get<any>(apiString);
    dispatch(getEbooksSuccess(response?.data));
  } catch (err: any) {
    getError(err);
    dispatch(getEbooksFailure("Error"));
  }
};
