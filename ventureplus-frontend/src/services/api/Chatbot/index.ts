import {
  getAllChat,
  getAllChatFailure,
  getAllChatSuccess,
} from "../../../redux/slices/Chatbot/getAllChatSlice";
import {
  getChatHistoryByChatId,
  getChatHistoryByChatIdFailure,
  getChatHistoryByChatIdSuccess,
} from "../../../redux/slices/Chatbot/getChatHistoryByChatIdSlice";
import {
  getRemainingCredits,
  getRemainingCreditsFailure,
  getRemainingCreditsSuccess,
} from "../../../redux/slices/Chatbot/getRemainingCreditsSlice";
import {
  updateToneOfVoice,
  updateToneOfVoiceFailure,
  updateToneOfVoiceSuccess,
} from "../../../redux/slices/Chatbot/updateToneOfVoiceSlice";
import { AppDispatch } from "../../../redux/store";
import { get, getError, patch } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";

export const getAllChatApi = async (dispatch: AppDispatch, onSuccess: any) => {
  dispatch(getAllChat());
  try {
    const apiString = `${ENDPOINT.chatBot.getAllChat}`;
    const response = await get<any>(apiString);
    dispatch(getAllChatSuccess(response));
    if (onSuccess) {
      onSuccess(response);
    }
  } catch (err) {
    getError(err);
    dispatch(getAllChatFailure("Error"));
  }
};
export const getChatHistoryByChatIdApi = async (
  dispatch: AppDispatch,
  id: number
) => {
  dispatch(getChatHistoryByChatId());
  try {
    const apiString = `${ENDPOINT.chatBot.getChatHistoryByChatId}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getChatHistoryByChatIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getChatHistoryByChatIdFailure("Error"));
  }
};
export const getRemainingCreditsApi = async (dispatch: AppDispatch) => {
  dispatch(getRemainingCredits());
  try {
    const apiString = `${ENDPOINT.chatBot.getRemainingCredits}`;
    const response = await get<any>(apiString);
    dispatch(getRemainingCreditsSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getRemainingCreditsFailure("Error"));
  }
};
export const updateToneOfVoiceApi = async (
  dispatch: AppDispatch,
  id: number,
  title: string,
  onSuccess: (data: string) => void
) => {
  dispatch(updateToneOfVoice());
  try {
    const apiString = `${ENDPOINT.chatBot.updateToneOfVoice}/${id}`;
    const response = await patch<any>(apiString, { toneOfVoice: title });
    dispatch(updateToneOfVoiceSuccess(response));
    if (onSuccess) {
      onSuccess(title);
    }
  } catch (err) {
    getError(err);
    dispatch(updateToneOfVoiceFailure("Error"));
  }
};
