import { API } from "../../../config/apiCalls";
import { getError, getRequest, postRequest } from "../../../utils/baseApi";
import {
  ASSIGN_MILESTONE,
  ASSIGN_MILESTONE_FAILURE,
  ASSIGN_MILESTONE_SUCCESS,
  GET_MILESTONE_CERTIFICATE,
  GET_MILESTONE_CERTIFICATE_FAILURE,
  GET_MILESTONE_CERTIFICATE_SUCCESS,
  MILESTONE,
  MILESTONE_FAILURE,
  MILESTONE_SUCCESS,
} from "./constants";

export const getAllMilestonesAndCountAction = async (dispatch) => {
  dispatch({ type: MILESTONE });
  await getRequest(`${API.milestones.getMilestonesAndCount}`)
    .then((response) => {
      if (response.data) {
        dispatch({ type: MILESTONE_SUCCESS, payload: response.data });
      }
    })
    .catch((err) => {
      getError(err);
      dispatch({ type: MILESTONE_FAILURE, error: err.response.data });
    });
};

export const assignMilestonesToFreelancerAction = async (dispatch, body) => {
  dispatch({ type: ASSIGN_MILESTONE });
  await postRequest(`${API.milestones.assignMilestonesToFreelancer}`, body)
    .then((response) => {
      if (response.data) {
        dispatch({ type: ASSIGN_MILESTONE_SUCCESS, payload: response.data });
      }
    })
    .catch((err) => {
      dispatch({ type: ASSIGN_MILESTONE_FAILURE, error: err.response.data });
    });
};

export const getMilestonesCertificate = async (dispatch) => {
  dispatch({ type: GET_MILESTONE_CERTIFICATE });
  await getRequest(`${API.milestones.getMilestonesCertificate}`)
    .then((response) => {
      if (response?.data) {
        dispatch({
          type: GET_MILESTONE_CERTIFICATE_SUCCESS,
          payload: response?.data,
        });
      }
    })
    .catch((err) => {
      dispatch({
        type: GET_MILESTONE_CERTIFICATE_FAILURE,
        error: err?.response?.data,
      });
    });
};
