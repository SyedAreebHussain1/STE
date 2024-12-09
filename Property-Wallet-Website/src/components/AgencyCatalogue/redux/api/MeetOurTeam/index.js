import { API } from "../../../config/apiEndPoints";
import { getError, getRequest, postRequest } from "../../../utils/baseApi";
import { successMessage } from "../../../utils/message";
import {
  createReview,
  createReviewFailure,
  createReviewSuccess,
} from "../../slice/MeetOurTeam/createReviewSlice";
import {
  getTeamDetail,
  getTeamDetailSuccess,
  getTeamDetailFailure,
} from "../../slice/MeetOurTeam/getTeamDetailSlice";

export async function getTeamDetailApi(dispatch, pageLimit, id) {
  dispatch(getTeamDetail());
  try {
    let res = await getRequest(
      `${API.meetOurTeam.getTeamDetail}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );
    dispatch(getTeamDetailSuccess(res.data));
  } catch (error) {
    getError(error);
    dispatch(getTeamDetailFailure(error.response.data));
  }
}

export async function createReviewApi(dispatch, body, onSuccess) {
  dispatch(createReview());
  try {
    let res = await postRequest(`${API.meetOurTeam.createReview}`, body);
    dispatch(createReviewSuccess(res.data));
    successMessage(res?.data?.message);
    onSuccess(body);
  } catch (error) {
    getError(error);
    dispatch(createReviewFailure(error.response.data));
  }
}
