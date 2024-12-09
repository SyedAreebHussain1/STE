import { API } from "../../../config/apiEndPoints";
import { getError, getRequest, postRequest } from "../../../utils/baseApi";
import { successMessage } from "../../../utils/message";
import { bookMeeting, bookMeetingFailure, bookMeetingSuccess } from "../../slice/Appointments/bookMeetingSlice";
import { getMeetingList, getMeetingListFailure, getMeetingListSuccess } from "../../slice/Appointments/getMeetingList";

export async function getMeetingListApi(dispatch, id, time, onSuccess) {
    dispatch(getMeetingList());
    try {
      let res = await getRequest(
        `${API.meetOurTeam.getMeetingList}/${id}?givenTime=${time}`
      );
      dispatch(getMeetingListSuccess(res.data));
      if(onSuccess){
        
      onSuccess()
      }
    } catch (error) {
      getError(error);
      dispatch(getMeetingListFailure(error.response.data));
    }
  }

  export async function bookMeetingApi(dispatch, body, onSuccess) {
    dispatch(bookMeeting());
    try {
      let res = await postRequest(
        `${API.meetOurTeam.bookMeeting}`,
        body
      );
      dispatch(bookMeetingSuccess(res.data));
      successMessage(res?.data?.message)
      onSuccess()
    } catch (error) {
      getError(error);
      dispatch(bookMeetingFailure(error.response.data));
    }
  }
  