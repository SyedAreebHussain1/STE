import {
  getChapterContent,
  getChapterContentFailure,
  getChapterContentSuccess,
} from "../../../redux/slices/EditPlan/getChapterContentSlice";
import {
  getChapter,
  getChapterFailure,
  getChapterSuccess,
} from "../../../redux/slices/EditPlan/getChapterSlice";
import {
  updateChapterContent,
  updateChapterContentFailure,
  updateChapterContentSuccess,
} from "../../../redux/slices/EditPlan/updateChapterContentSice";
import { AppDispatch } from "../../../redux/store";
import { get, getError, patch } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";

export const getChapterApi = async (dispatch: AppDispatch) => {
  dispatch(getChapter());
  try {
    const apiString = `${ENDPOINT.editPlan.chapter}`;
    const response = await get<any>(apiString);
    dispatch(getChapterSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getChapterFailure("Error"));
  }
};

export const getChapterContentApi = async (
  dispatch: AppDispatch,
  chapterId: number | string,
  businessPlanId: number | string,
) => {
  dispatch(getChapterContent());
  try {
    const apiString = ENDPOINT.editPlan.contentByChapterIdAndPlanId
      .replace(":chapterId", chapterId.toString())
      .replace(":businessPlanId", businessPlanId.toString());
    const response = await get<any>(apiString);
    dispatch(getChapterContentSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getChapterContentFailure("Error"));
  }
};
export const updateChapterContentApi = async (
  dispatch: AppDispatch,
  id: number,
  body: any,
) => {
  dispatch(updateChapterContent());
  try {
    const apiString = `${ENDPOINT.editPlan.updatecontent}/${id}`;
    const response = await patch<any>(apiString, body);
    dispatch(updateChapterContentSuccess(response));
    // successMessage(response.message); //! No need to display message toast here
  } catch (err) {
    getError(err);
    dispatch(updateChapterContentFailure("Error"));
  }
};
