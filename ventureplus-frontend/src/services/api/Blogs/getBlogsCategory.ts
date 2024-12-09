import { getBlogsCategorySlice, getBlogsCategorySliceFailure, getBlogsCategorySliceSuccess } from "../../../redux/slices/Blogs/getAllBlogsCategory";
import { AppDispatch } from "../../../redux/store";
import { getError, post, get, patch } from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";

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
