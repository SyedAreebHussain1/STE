import { get, getError, patch, post, del } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import { successMessage } from "../../../../utils/message";
import {
  postChapterSlice,
  postChapterSliceSuccess,
  postChapterSliceFailure,
  getChapterAdminSlice,
  getChapterAdminSliceSuccess,
  getChapterAdminSliceFailure,
  getAllChaptersSlice,
  getAllChaptersSliceFailure,
  getAllChaptersSliceSuccess,
  deleteChapter,
  deleteChapterSuccess,
  deleteChapterFailure,
  updateChapter,
  updateChapterSuccess,
  updateChapterFailure,
} from "../../../../store/slices/Dashboard/Chatper/chapterSlice";
import {
  getLeadsAdminSlice,
  getLeadsAdminSliceFailure,
  getLeadsAdminSliceSuccess,
} from "../../../../store/slices/Dashboard/Leads/leadsSlice";

export const getLeadsApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  searchTerm?: string
) => {
  dispatch(getLeadsAdminSlice());
  try {
    const apiString = `${ENDPOINT.leads.getLeads}?page=${
      pageLimit.page
    }&limit=${pageLimit.limit}${searchTerm ? `&name=${searchTerm}` : ""}`;
    const response = await get<any>(apiString);
    dispatch(getLeadsAdminSliceSuccess(response));
  } catch (err: any) {
    getError(err);
    dispatch(getLeadsAdminSliceFailure("Error"));
  }
};
