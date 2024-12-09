import { get, getError, patch, post, del, postImage } from "../../../../utils/baseApi";
import { ENDPOINT } from "../../../../utils/constant/apiEndPoints";
import { AppDispatch } from "../../../../store/store";
import { successMessage } from "../../../../utils/message";
import {
  postBlogsCategorySlice, postBlogsCategorySliceFailure, postBlogsCategorySliceSuccess, getBlogsCategorySlice, getBlogsCategorySliceFailure, getBlogsCategorySliceSuccess 
 
} from "../../../../store/slices/Dashboard/Blogs/blogsCategory";

export const postBlogsCategoryApi = async (
  dispatch: AppDispatch,
  body: any,
  onSuccess: () => void,
) => {
  dispatch(postBlogsCategorySlice());
  try {
    const response = await post<any>(ENDPOINT.blogs.postBlogsCategory, body);
    dispatch(postBlogsCategorySliceSuccess(response));
    successMessage(response?.message);
    onSuccess();
  } catch (err) {
    getError(err);
    dispatch(postBlogsCategorySliceFailure("Error"));
  }
};

export const getBlogsCategoryApi = async (
    dispatch: AppDispatch,
  ) => {
    dispatch(getBlogsCategorySlice());
    try {
      const apiString = `${ENDPOINT.blogs.getBlogsCategory}`;
      const response = await get<any>(apiString);
      dispatch(getBlogsCategorySliceSuccess(response));
    } catch (err: any) {
      getError(err);
      dispatch(getBlogsCategorySliceFailure("Error"));
    }
  };