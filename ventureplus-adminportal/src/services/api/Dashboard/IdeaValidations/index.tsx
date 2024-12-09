import { get, getError, patch, post, del } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import {getIdeaValidations, getIdeaValidationsFailure, getIdeaValidationsSuccess} from "../../../../store/slices/Dashboard/IdeaValidations/getIdeaValidations";
import { successMessage } from "../../../../utils/message";

export const getIdeaValidationsApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  searchScore?: number | null,
  searchTerm?: string,
) => {
  dispatch(getIdeaValidations());
  try {
    let apiString = `${ENDPOINT.ideaValidation.ideaValidate}?page=${pageLimit.page}&limit=${pageLimit.limit}${searchScore ?`&score=${searchScore}` : ""}${searchTerm ?`&title=${searchTerm}` : ""} `;
    const response = await get<any>(apiString);
    dispatch(getIdeaValidationsSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getIdeaValidationsFailure("Error"));
  }
};