import { API } from "../../../config/apiCalls";
import { getError, getRequest } from "../../../utils/baseApi";
import {
  GET_VISITED_SALES_USER_FOR_LEAD,
  GET_VISITED_SALES_USER_FOR_LEAD_SUCCESS,
  GET_VISITED_SALES_USER_FOR_LEAD_FAILURE,
  GET_VISITED_FREELANCER_USER_FOR_LEAD,
  GET_VISITED_FREELANCER_USER_FOR_LEAD_SUCCESS,
  GET_VISITED_FREELANCER_USER_FOR_LEAD_FAILURE,
  GET_VISITED_AGENT_USER_FOR_LEAD,
  GET_VISITED_AGENT_USER_FOR_LEAD_SUCCESS,
  GET_VISITED_AGENT_USER_FOR_LEAD_FAILURE,
} from "./constants";

export const getVisitedSalesUserForLeadApi = async (
  dispatch,
  pageLimit,
  id,
  dateValue
) => {
  dispatch({ type: GET_VISITED_SALES_USER_FOR_LEAD });
  await getRequest(
    `${API.leadVisit.getVisitedSalesUserForLead}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }${id ? `&id=${id}` : ""}${dateValue ? `&date=${dateValue}` : ""}`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_VISITED_SALES_USER_FOR_LEAD_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_VISITED_SALES_USER_FOR_LEAD_FAILURE,
        error: err.response.data,
      });
    });
};

export const getVisitedFreelancerUserForLeadApi = async (
  dispatch,
  pageLimit,
  eLoungId,
  fullName,
  dateValue
) => {
  dispatch({ type: GET_VISITED_FREELANCER_USER_FOR_LEAD });
  await getRequest(
    `${API.leadVisit.getVisitedUserForLead}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }${
      dateValue ? `&date=${dateValue}` : ""
    }&eLoungId=${eLoungId}&flVisit=true${
      fullName ? `&fullName=${fullName}` : ""
    }`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_VISITED_FREELANCER_USER_FOR_LEAD_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_VISITED_FREELANCER_USER_FOR_LEAD_FAILURE,
        error: err.response.data,
      });
    });
};

export const getVisitedAgentUserForLeadApi = async (
  dispatch,
  pageLimit,
  eLoungId,
  fullName,
  dateValue
) => {
  dispatch({ type: GET_VISITED_AGENT_USER_FOR_LEAD });
  await getRequest(
    `${API.leadVisit.getVisitedUserForLead}?page=${pageLimit.page}&limit=${
      pageLimit.limit
    }${
      dateValue ? `&date=${dateValue}` : ""
    }&eLoungId=${eLoungId}&flVisit=false${
      fullName ? `&fullName=${fullName}` : ""
    }`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_VISITED_AGENT_USER_FOR_LEAD_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_VISITED_AGENT_USER_FOR_LEAD_FAILURE,
        error: err.response.data,
      });
    });
};
