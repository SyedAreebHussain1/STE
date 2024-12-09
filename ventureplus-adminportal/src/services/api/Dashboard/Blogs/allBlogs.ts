import { get, getError, patch, post, del, postImage, patchFormData } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import { successMessage } from "../../../../utils/message";
import {
  postallBlogsSlice, postallBlogsSliceFailure, postallBlogsSliceSuccess, getallBlogsSlice, getallBlogsSliceFailure, getallBlogsSliceSuccess, deleteAllBlogs, deleteAllBlogsFailure, deleteAllBlogsSuccess, updateAllBlogs, updateAllBlogsFailure, updateAllBlogsSuccess 
 , deleteAllBlogPictures, deleteAllBlogPicturesFailure, deleteAllBlogPicturesSuccess
} from "../../../../store/slices/Dashboard/Blogs/allBlogs";

export const postAllBlogsApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: () => void,
) => {
  dispatch(postallBlogsSlice());
  try {
    const response = await postImage<any>(ENDPOINT.blogs.allBlogs, body);
    dispatch(postallBlogsSliceSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(postallBlogsSliceFailure("Error"));
  }
};

export const getAllBlogsApi = async (
    dispatch: AppDispatch,
    pageLimit: { page: number; limit: number },
    selectedCategoryId?: number | null,
  ) => {
    dispatch(getallBlogsSlice());
    try {
      const apiString = `${ENDPOINT.blogs.getAllBlogs}?page=${pageLimit.page}&limit=${pageLimit.limit}${selectedCategoryId ?`&blogCategoryId=${selectedCategoryId}` : ""}`;
      const response = await get<any>(apiString);
      dispatch(getallBlogsSliceSuccess(response));
    } catch (err: any) {
      getError(err);
      dispatch(getallBlogsSliceFailure("Error"));
    }
  };

  export const updateAllBlogsApi = async (
    dispatch: AppDispatch,
    body: any,
    id: number,
    onSuccess: () => void,
  ) => {
    dispatch(updateAllBlogs());
    try {
      const response = await patchFormData<any>(
        `${ENDPOINT.blogs.updateAllBlogs}/${id}`,
        body,
      );
      dispatch(updateAllBlogsSuccess(response?.data));
      successMessage(response?.message);
      onSuccess();
    } catch (err) {
      getError(err);
      dispatch(updateAllBlogsFailure("Error"));
    }
  };

  export const deleteAllBlogsApi = async (dispatch: AppDispatch, id: number,succes:any) => {
    dispatch(deleteAllBlogs());
    try {
      const response = await del<any>(`${ENDPOINT.blogs.delAllBlogs}/${id}`);
      dispatch(deleteAllBlogsSuccess(response?.data));
      successMessage(response?.message);
      succes()
    } catch (err) {
      getError(err);
      dispatch(deleteAllBlogsFailure("Error"));
    }
  };

  export const deleteAllBlogPicturesApi = async (dispatch: AppDispatch, id: number,succes:any) => {
    dispatch(deleteAllBlogPictures());
    try {
      const response = await del<any>(`${ENDPOINT.blogs.removePictures}/${id}`);
      dispatch(deleteAllBlogPicturesSuccess(response?.data));
      successMessage(response?.message);
      succes()
    } catch (err) {
      getError(err);
      dispatch(deleteAllBlogPicturesFailure("Error"));
    }
  };