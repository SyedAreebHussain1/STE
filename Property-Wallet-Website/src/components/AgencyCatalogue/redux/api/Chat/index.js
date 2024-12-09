import { API } from "../../../config/apiEndPoints";
import { getError, getRequest, postRequest } from "../../../utils/baseApi";
import { successMessage } from "../../../utils/message";
import {
  getUserMessages,
  getUserMessagesFailure,
  getUserMessagesSuccess,
} from "../../slice/Chat/getUserMessagesSlice";
import {
  getUsersToChat,
  getUsersToChatFailure,
  getUsersToChatSuccess,
} from "../../slice/Chat/getUsersToChatSlice";
import {
  initiateChat,
  initiateChatFailure,
  initiateChatSuccess,
} from "../../slice/Chat/initiateChatSlice";
import {
  sendChatMessage,
  sendChatMessageFailure,
  sendChatMessageSuccess,
} from "../../slice/Chat/sendChatMessageSlice";

export async function initiateChatApi(dispatch, body, onSuccess) {
  dispatch(initiateChat());
  try {
    let res = await postRequest(`${API.chat.initiateChat}`, body);
    dispatch(initiateChatSuccess(res.data));
    onSuccess(body.userCode);
  } catch (error) {
    getError(error);
    dispatch(initiateChatFailure(error.response.data));
  }
}

export async function sendChatMessageApi(dispatch, body, onSuccess) {
  dispatch(sendChatMessage());
  try {
    let res = await postRequest(`${API.chat.sendChatMessage}`, body);
    dispatch(sendChatMessageSuccess(res.data));
    onSuccess(res?.data?.data);
  } catch (error) {
    getError(error);
    dispatch(sendChatMessageFailure(error.response.data));
  }
}

export async function getUserMessagesApi(
  dispatch,
  pageLimit,
  body,
  onSuccessGetMessages
) {
  dispatch(getUserMessages());
  try {
    let res = await getRequest(
      `${API.chat.getUserMessages}?page=${pageLimit.page}&limit=${pageLimit.limit}&conversationId=${body.id}&userCode=${body.userCode}`
    );
    dispatch(getUserMessagesSuccess(res?.data));
    onSuccessGetMessages(res?.data);
  } catch (error) {
    dispatch(getUserMessagesFailure(error?.response?.data));
  }
}

export async function getUsersToChatApi(dispatch, pageLimit, id) {
  dispatch(getUsersToChat());
  try {
    let res = await getRequest(
      `${API.meetOurTeam.getTeamDetail}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`
    );
    dispatch(getUsersToChatSuccess(res.data));
  } catch (error) {
    getError(error);
    dispatch(getUsersToChatFailure(error.response.data));
  }
}
