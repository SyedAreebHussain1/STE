import { API } from "../../../config/apiCalls";
import {
  deleteRequest,
  fileRequest,
  getError,
  getRequest,
  getSuccess,
  patchRequest,
  postRequest,
} from "../../../utils/baseApi";
import { getFromStorage } from "../../../utils/storage";
import {
  GET_ALL_REQUIREMENT_FORMS,
  GET_ALL_REQUIREMENT_FORMS_SUCCESS,
  GET_ALL_REQUIREMENT_FORMS_FAILURE,
} from "./constants";

export const getAllRequirementFormsApi = async (dispatch, pageLimit) => {
  dispatch({ type: GET_ALL_REQUIREMENT_FORMS });
  await getRequest(
    `${API.marketingRequirementForManagement.getAllRequirementForms}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}&eLoungId=${getFromStorage("user")?.eLoungeId}`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_ALL_REQUIREMENT_FORMS_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_ALL_REQUIREMENT_FORMS_FAILURE,
        error: err.response.data,
      });
    });
};
