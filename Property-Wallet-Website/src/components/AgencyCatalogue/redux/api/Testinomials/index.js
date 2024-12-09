import { API } from "../../../config/apiEndPoints";
import { getError, getRequest, postRequest } from "../../../utils/baseApi";
import { successMessage } from "../../../utils/message";
import {
  createReviewForAgency,
  createReviewForAgencySuccess,
  createReviewForAgencyFailure,
} from "../../slice/Testinomials/createReviewForAgencySlice";
import {
  getReviewForAgencyById,
  getReviewForAgencyByIdSuccess,
  getReviewForAgencyByIdFailure,
} from "../../slice/Testinomials/getReviewForAgencyByIdSlice";

export async function createReviewForAgencyApi(dispatch, body, onSuccess) {
  dispatch(createReviewForAgency());
  try {
    let res = await postRequest(
      `${API.testinomials.createReviewForAgency}`,
      body
    );
    dispatch(createReviewForAgencySuccess(res.data));
    successMessage(res?.data?.message);
    onSuccess(body);
  } catch (error) {
    getError(error);
    dispatch(createReviewForAgencyFailure(error.response.data));
  }
}

export async function getReviewForAgencyByIdApi(dispatch, id, pageLimit) {
  dispatch(getReviewForAgencyById());
  try {
    let res = await getRequest(
      `${API.testinomials.getReviewForAgencyById}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );
    dispatch(getReviewForAgencyByIdSuccess(res.data));
  } catch (error) {
    getError(error);
    dispatch(getReviewForAgencyByIdFailure(error.response.data));
  }
}
