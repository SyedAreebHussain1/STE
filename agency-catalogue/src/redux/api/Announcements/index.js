import { API } from "../../../config/apiEndPoints";
import { getError, getRequest } from "../../../utils/baseApi";
import {
  getAnnouncementDetail,
  getAnnouncementDetailSuccess,
  getAnnouncementDetailFailure,
} from "../../slice/Announcements/getAnnouncementDetailSlice";

export async function getAnnouncementDetailApi(dispatch, pageLimit, id) {
  dispatch(getAnnouncementDetail());
  try {
    let res = await getRequest(
      `${API.announcements.getAnnouncementDetail}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );
    dispatch(getAnnouncementDetailSuccess(res.data));
  } catch (error) {
    getError(error);
    dispatch(getAnnouncementDetailFailure(error.response.data));
  }
}
