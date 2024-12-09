import { API } from "../../../config/apiCalls";
import { getError, getRequest } from "../../../utils/baseApi";
import { getFromStorage } from "../../../utils/storage";
import {
  GET_ALL_ELOUNGE_VISIT_FOR_MANAGEMENT,
  GET_ALL_ELOUNGE_VISIT_FOR_MANAGEMENT_SUCCESS,
  GET_ALL_ELOUNGE_VISIT_FOR_MANAGEMENT_FAILURE,
  GET_ASSIGN_ELOUNGE_SALE_USER,
  GET_ASSIGN_ELOUNGE_SALE_USER_SUCCESS,
  GET_ASSIGN_ELOUNGE_SALE_USER_FAILURE,
} from "./contants";

export const getAllEloungeVisitForManagementApi = async (
  dispatch,
  pageLimit,
  salesUserFullName,
  dateValue,
  flVisit
) => {
  dispatch({ type: GET_ALL_ELOUNGE_VISIT_FOR_MANAGEMENT });
  await getRequest(
    `${API.visitManager.getAllEloungeVisitForManagement}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}&eLoungId=${
      getFromStorage("user")?.eLoungeId
    }${`&flVisit=${flVisit}`}${
      salesUserFullName ? `&fullName=${salesUserFullName}` : ""
    }${dateValue ? `&date=${dateValue}` : ""}`
  )
    .then((response) => {
      if (response.data) {
        dispatch({
          type: GET_ALL_ELOUNGE_VISIT_FOR_MANAGEMENT_SUCCESS,
          payload: response.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_ALL_ELOUNGE_VISIT_FOR_MANAGEMENT_FAILURE,
        error: err.response.data,
      });
    });
};
export const getAssignEloungeSaleUserApi = async (
  dispatch,
  pageLimit,
  lead
) => {
  dispatch({ type: GET_ASSIGN_ELOUNGE_SALE_USER });
  await getRequest(
    `${
      lead
        ? API.visitManager.getAssignEloungeSaleUserLead
        : API.visitManager.getAssignEloungeSaleUser
    }?page=${pageLimit.page}&limit=${pageLimit.limit}`
  )
    .then((response) => {
      if (response?.data) {
        dispatch({
          type: GET_ASSIGN_ELOUNGE_SALE_USER_SUCCESS,
          payload: response?.data,
        });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({
        type: GET_ASSIGN_ELOUNGE_SALE_USER_FAILURE,
        error: err.response.data,
      });
    });
};
