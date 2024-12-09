import {
  createProductPromotion,
  createProductPromotionFailure,
  createProductPromotionSuccess,
} from "../../../redux/slices/ProductPromotion/createProductPromotionSlice";
import {
  deleteProductPhoto,
  deleteProductPhotoFailure,
  deleteProductPhotoSuccess,
} from "../../../redux/slices/ProductPromotion/deleteProductPhotoSlice";
import {
  deleteProductPromotion,
  deleteProductPromotionFailure,
  deleteProductPromotionSuccess,
} from "../../../redux/slices/ProductPromotion/deleteProductPromotionSlice";
import {
  deleteProductVideo,
  deleteProductVideoFailure,
  deleteProductVideoSuccess,
} from "../../../redux/slices/ProductPromotion/deleteProductVideoSlice";
import {
  downvoteProductPromotion,
  downvoteProductPromotionFailure,
  downvoteProductPromotionSuccess,
} from "../../../redux/slices/ProductPromotion/downvoteProductPromotionSlice";
import {
  getAllBusinessPromotions,
  getAllBusinessPromotionsFailure,
  getAllBusinessPromotionsSuccess,
} from "../../../redux/slices/ProductPromotion/getAllBusinessPromotionsSlice";
import {
  getBusinessPromotionStats,
  getBusinessPromotionStatsFailure,
  getBusinessPromotionStatsSuccess,
} from "../../../redux/slices/ProductPromotion/getBusinessPromotionStatsSlice";
import {
  getProductPromotionById,
  getProductPromotionByIdFailure,
  getProductPromotionByIdSuccess,
} from "../../../redux/slices/ProductPromotion/getProductPromotionByIdSlice";
import {
  getProductPromotionsByBusinessId,
  getProductPromotionsByBusinessIdFailure,
  getProductPromotionsByBusinessIdSuccess,
} from "../../../redux/slices/ProductPromotion/getProductPromotionsByBusinessIdSlice";
import {
  getProductPromotionStats,
  getProductPromotionStatsFailure,
  getProductPromotionStatsSuccess,
} from "../../../redux/slices/ProductPromotion/getProductPromotionStatsSlice";
import {
  getProductPromotionUpvotes,
  getProductPromotionUpvotesFailure,
  getProductPromotionUpvotesSuccess,
} from "../../../redux/slices/ProductPromotion/getProductPromotionUpvotesSlice";
import {
  postReplyByReviewId,
  postReplyByReviewIdFailure,
  postReplyByReviewIdSuccess,
} from "../../../redux/slices/ProductPromotion/postReplyByReviewIdSlice";
import {
  postReviewByProductId,
  postReviewByProductIdFailure,
  postReviewByProductIdSuccess,
} from "../../../redux/slices/ProductPromotion/postReviewByProductIdSlice";
import {
  updateProductPromotion,
  updateProductPromotionFailure,
  updateProductPromotionSuccess,
} from "../../../redux/slices/ProductPromotion/updateProductPromotionSlice";
import { AppDispatch } from "../../../redux/store";
import {
  del,
  get,
  getError,
  patch,
  patchFormData,
  post,
  postImage,
} from "../../../utils/baseApi";
import { ENDPOINT } from "../../../utils/endpoints";
import { successMessage } from "../../../utils/message";

export const createProductPromotionApi = async (
  dispatch: AppDispatch,
  body: FormData,
  onClose: any
) => {
  dispatch(createProductPromotion());
  try {
    const apiString = `${ENDPOINT.productPromotion.createProductPromotion}`;
    const response = await postImage<any>(apiString, body);
    dispatch(createProductPromotionSuccess(response));
    successMessage(response?.message);
    onClose();
  } catch (err) {
    getError(err);
    dispatch(createProductPromotionFailure("Error"));
  }
};

export const getProductPromotionsByBusinessIdApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  id: number // businessId
) => {
  dispatch(getProductPromotionsByBusinessId());
  try {
    const apiString = `${ENDPOINT.productPromotion.businessPromotions}/${id}?page=${pageLimit.page}&limit=${pageLimit.limit}`;
    const response = await get<any>(apiString);
    dispatch(getProductPromotionsByBusinessIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getProductPromotionsByBusinessIdFailure("Error"));
  }
};

export const updateProductPromotionApi = async (
  dispatch: AppDispatch,
  id: number,
  body: any,
  onClose: any
) => {
  dispatch(updateProductPromotion());
  try {
    const apiString = `${ENDPOINT.productPromotion.createProductPromotion}/${id}`;
    const response = await patchFormData<any>(apiString, body);
    dispatch(updateProductPromotionSuccess(response));
    successMessage(response?.message);
    onClose();
  } catch (err) {
    getError(err);
    dispatch(updateProductPromotionFailure("Error"));
  }
};

export const getProductPromotionByIdApi = async (
  dispatch: AppDispatch,
  id: number
) => {
  dispatch(getProductPromotionById());
  try {
    const apiString = `${ENDPOINT.productPromotion.productPromotionInfo}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getProductPromotionByIdSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getProductPromotionByIdFailure("Error"));
  }
};

export const deleteProductPromotionApi = async (
  dispatch: AppDispatch,
  id: number | string,
  onClose: () => void
) => {
  dispatch(deleteProductPromotion());
  try {
    const apiString = `${ENDPOINT.productPromotion.productPromotions}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteProductPromotionSuccess(response));
    successMessage(response?.message);
    onClose();
  } catch (err) {
    getError(err);
    dispatch(deleteProductPromotionFailure("Error"));
  }
};

export const getProductPromotionUpvotesApi = async (
  dispatch: AppDispatch,
  id: number
) => {
  dispatch(getProductPromotionUpvotes());
  try {
    const apiString = `${ENDPOINT.productPromotion.postUpvote}/${id}/up-vote`;
    const response = await get<any>(apiString);
    dispatch(getProductPromotionUpvotesSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getProductPromotionUpvotesFailure("Error"));
  }
};

export const postProductPromotionUpvoteApi = async (
  dispatch: AppDispatch,
  id: number,
  onClose: any
) => {
  dispatch(createProductPromotion());
  try {
    const apiString = `${ENDPOINT.productPromotion.postUpvote}/${id}/up-vote`;
    const response = await postImage<any>(apiString, {});
    dispatch(createProductPromotionSuccess(response));
    onClose();
  } catch (err) {
    getError(err);
    dispatch(createProductPromotionFailure("Error"));
  }
};

export const getProductPromotionStatsApi = async (
  dispatch: AppDispatch,
  id: number
) => {
  dispatch(getProductPromotionStats());
  try {
    const apiString = `${ENDPOINT.productPromotion.productPromotionStats}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getProductPromotionStatsSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getProductPromotionStatsFailure("Error"));
  }
};

export const getBusinessPromotionStatsApi = async (
  dispatch: AppDispatch,
  id: number
) => {
  dispatch(getBusinessPromotionStats());
  try {
    const apiString = `${ENDPOINT.productPromotion.businessStats}/${id}`;
    const response = await get<any>(apiString);
    dispatch(getBusinessPromotionStatsSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getBusinessPromotionStatsFailure("Error"));
  }
};

export const postReplyByReviewIdApi = async (
  dispatch: AppDispatch,
  id: number,
  body: { message: string },
  onClose: any
) => {
  dispatch(postReplyByReviewId());
  try {
    const apiString = `${ENDPOINT.productPromotion.reviewReply}/${id}`;
    const response = await post<any>(apiString, body);
    dispatch(postReplyByReviewIdSuccess(response));
    onClose();
  } catch (err) {
    getError(err);
    dispatch(postReplyByReviewIdFailure("Error"));
  }
};

export const postReviewByProductIdApi = async (
  dispatch: AppDispatch,
  id: number,
  body: { review: string },
  onClose: any
) => {
  dispatch(postReviewByProductId());
  try {
    const apiString = `${ENDPOINT.productPromotion.addReview}/${id}/review/add`;
    const response = await post<any>(apiString, body);
    dispatch(postReviewByProductIdSuccess(response));
    onClose();
  } catch (err) {
    getError(err);
    dispatch(postReviewByProductIdFailure("Error"));
  }
};

export const deleteProductPhotoApi = async (
  dispatch: AppDispatch,
  id: number | string,
  onClose: () => void
) => {
  dispatch(deleteProductPhoto());
  try {
    const apiString = `${ENDPOINT.productPromotion.deletePhoto}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteProductPhotoSuccess(response));
    successMessage(response?.message);
    onClose();
  } catch (err) {
    getError(err);
    dispatch(deleteProductPhotoFailure("Error"));
  }
};

export const deleteProductVideoApi = async (
  dispatch: AppDispatch,
  id: number | string,
  onClose: () => void
) => {
  dispatch(deleteProductVideo());
  try {
    const apiString = `${ENDPOINT.productPromotion.deleteVideo}/${id}`;
    const response = await del<any>(apiString);
    dispatch(deleteProductVideoSuccess(response));
    successMessage(response?.message);
    onClose();
  } catch (err) {
    getError(err);
    dispatch(deleteProductVideoFailure("Error"));
  }
};

export const getAllBusinessPromotionsApi = async (
  dispatch: AppDispatch,
  pageLimit: { page: number; limit: number },
  topVotes: boolean
) => {
  dispatch(getAllBusinessPromotions());
  try {
    const apiString = `${
      ENDPOINT.productPromotion.allBusinessPromotions
    }?page=${pageLimit.page}&limit=${pageLimit.limit}&businessPlanTypeEnum=${
      topVotes ? "TopVotes" : ""
    }`;
    const response = await get<any>(apiString);
    dispatch(getAllBusinessPromotionsSuccess(response));
  } catch (err) {
    getError(err);
    dispatch(getAllBusinessPromotionsFailure("Error"));
  }
};

export const downvoteApi = async (
  dispatch: AppDispatch,
  id: number | string,
  onClose: () => void
) => {
  dispatch(downvoteProductPromotion());
  try {
    const apiString = `${ENDPOINT.productPromotion.createProductPromotion}/${id}/down-vote`;
    const response = await del<any>(apiString);
    dispatch(downvoteProductPromotionSuccess(response));
    onClose();
  } catch (err) {
    getError(err);
    dispatch(downvoteProductPromotionFailure("Error"));
  }
};

export const postViewApi = async (id: number) => {
  try {
    const apiString = `${ENDPOINT.productPromotion.addView}/${id}`;
    const response = await post<any>(apiString, {});
  } catch (err) {
    getError(err);
  }
};
