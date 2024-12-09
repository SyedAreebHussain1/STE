import { API } from "../../../config/apiEndPoints";
import { getError, getRequest } from "../../../utils/baseApi";
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
