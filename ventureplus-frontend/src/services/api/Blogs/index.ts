import { getAllBlogs, getAllBlogsFailure, getAllBlogsSuccess } from "../../../redux/slices/Blogs";
import { getBlogById, getBlogByIdFailure, getBlogByIdSuccess } from "../../../redux/slices/Blogs/getBlogById";
import { AppDispatch } from "../../../redux/store";
import { getError, post, get, patch } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";


export const getAllBlogsApi = async (
    dispatch: AppDispatch,
    pageLimit: { page: number; limit: number },
    categoryId?: number | null,
  ) => {
    dispatch(getAllBlogs());
    try {
        const apiString = `${ENDPOINT.blogs.getBlogForUser}?page=${pageLimit.page}&limit=${pageLimit.limit}${categoryId ?`&blogCategoryId=${categoryId}` : ""}`;
      const response = await get<any>(apiString);
      dispatch(getAllBlogsSuccess(response));
      return response;
    } catch (err) {
      getError(err);
      dispatch(getAllBlogsFailure("Error"));
      return null;
    }
  };

  export const getBlogByIdApi = async (
    dispatch: AppDispatch,
    blogId?: number | null,
  ) => {
    dispatch(getBlogById());
    try {
        const apiString = `${ENDPOINT.blogs.getBlogById}/${blogId}`;
      const response = await get<any>(apiString);
      dispatch(getBlogByIdSuccess(response));
      return response;
    } catch (err) {
      getError(err);
      dispatch(getBlogByIdFailure("Error"));
      return null;
    }
  };