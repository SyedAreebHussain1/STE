import { get, getError, patch, post } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";
import {
  GetLetter,
  GetLetterFailure,
  GetLetterSuccess,
} from "../../slices/Letter/GetLetterSlice";
import {
  PatchLetter,
  PatchLetterFailure,
  PatchLetterSuccess,
} from "../../slices/Letter/PatchLetterSlice";
import {
  PostLetter,
  PostLetterFailure,
  PostLetterSuccess,
} from "../../slices/Letter/PostLetterSlice";
import { AppDispatch } from "../../store";

export const postLetterApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: any
) => {
  dispatch(PostLetter());
  try {
    const response = await post<any>(ENDPOINT.letter.postLetter, body);
    dispatch(PostLetterSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(PostLetterFailure("Error"));
  }
};

export const getLetterApi = async (dispatch: AppDispatch) => {
  dispatch(GetLetter());
  try {
    const apiString = `${ENDPOINT.letter.getLetter}`;
    const response: any = await get<any>(apiString);
    dispatch(GetLetterSuccess(response?.data));
  } catch (err) {
    getError(err);
    dispatch(GetLetterFailure("Error"));
  }
};

export const patchLetterApi = async (
  dispatch: AppDispatch,
  body: any,
  id: any,
  onSuccess: () => void
) => {
  dispatch(PatchLetter());
  try {
    const response = await patch<any>(
      `${ENDPOINT.letter.patchLetter}/${id}`,
      body
    );

    dispatch(PatchLetterSuccess({ ...response?.data }));
    if (onSuccess) {
      onSuccess();
    }
  } catch (err) {
    getError(err);
    dispatch(PatchLetterFailure("Error"));
  }
};
