import { API } from "../../../config/apiCalls";
import { getError, getRequest } from "../../../utils/baseApi";
import { getFromStorage } from "../../../utils/storage";
import {
  GET_ALL_REQUIREMENT_FORMS_FOR_LEAD,
  GET_ALL_REQUIREMENT_FORMS_FOR_LEAD_SUCCESS,
  GET_ALL_REQUIREMENT_FORMS_FOR_LEAD_FAILURE,
} from "./constants";

export const getAllRequirementFormsForLeadApi = async (dispatch, pageLimit) => {
  dispatch({ type: GET_ALL_REQUIREMENT_FORMS_FOR_LEAD });
  await getRequest(
    `${API.marketingRequirementForLead.getAllRequirementFormsForLead}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}&eLoungId=${getFromStorage("user")?.eLoungeId}`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_ALL_REQUIREMENT_FORMS_FOR_LEAD_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_ALL_REQUIREMENT_FORMS_FOR_LEAD_FAILURE,
        error: err.response.data,
      });
    });
};
