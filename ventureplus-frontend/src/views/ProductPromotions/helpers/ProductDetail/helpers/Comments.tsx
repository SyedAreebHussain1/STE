import { Avatar, Button } from "antd";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import RoundedButton from "../../../../../components/button/RoundedButton";
import {
  getProductPromotionByIdApi,
  getProductPromotionStatsApi,
  postReviewByProductIdApi,
} from "../../../../../services/api/ProductPromotion";
import { infoMessage } from "../../../../../utils/message";
import Comment from "./Comment";
import { RootState } from "../../../../../redux/store";

export interface Review {
  id: number;
  businessPromotionId: number;
  value: string;
  createdBy: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  createdByUser: CreatedByUser;
  reviewsReply: ReviewsReply[];
}

interface CreatedByUser {
  id: number;
  name: string;
  profilePhoto: any;
}

interface ReviewsReply {
  id: number;
  reviewId: number;
  message: string;
  createdBy: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  createdByUser: { id: number; name: string; profilePhoto: any };
}
interface CommentsI {
  reviews: Review[];
  user: { isLoggedinUser: boolean | null; profilePhoto: string };
}

const Comments = ({ reviews, user }: CommentsI) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [review, setReview] = useState("");
  const [isAddingReview, setIsAddingReview] = useState(false);
  const { loading } = useSelector(
    (state: RootState) => state.postReviewByProductId
  );

  const handlePostReview = (id: number, body: any) => {
    if (!body) {
      infoMessage("Please add a comment first");
      return;
    }

    postReviewByProductIdApi(dispatch, id, { review: body }, onSuccess);
  };

  const onSuccess = () => {
    getProductPromotionByIdApi(dispatch, Number(id));
    if (!user?.isLoggedinUser) {
      getProductPromotionStatsApi(dispatch, Number(id));
    }
    setIsAddingReview(false);
    setReview("");
  };

  return (
    <div className="p-2">
      <h1 className="heading-s font-semibold leading-[31.55px] mt-6 mb-2">
        Reviews
      </h1>

      {reviews?.length <= 0 && (
        <div className="flex justify-center items-center p-4">
          <p className="text-para paragraph"> No Reviews yet </p>
        </div>
      )}

      {!user?.isLoggedinUser && (
        <div
          className="p-6 mb-2 border-b border-t border-strokes flex justify-between items-center cursor-pointer"
          onClick={() => {
            setIsAddingReview(!isAddingReview);
          }}
        >
          <div className="flex gap-3 items-center">
            <Avatar src={user?.profilePhoto} size={50} />
            <p className="body-s text-paraLight">What do you think?</p>
          </div>
          <Button>Comment</Button>
        </div>
      )}

      {isAddingReview && (
        <div className="border border-strokes p-2 rounded-xl flex flex-col ml-20">
          <textarea
            className="flex-1 !bg-transparent !border-none !outline-none focus:!bg-transparent focus:!border-none focus:!outline-none"
            value={review}
            autoFocus
            onChange={(e) => setReview(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handlePostReview(Number(id), review);
              }
            }}
            rows={3}
          />
          <div className="flex justify-end gap-3 items-center">
            <RoundedButton
              title={"Comment"}
              sm
              loading={loading}
              type="primary"
              onClick={() => {
                handlePostReview(Number(id), review);
              }}
            />
            <RoundedButton
              title={"Cancel"}
              sm
              disabled={loading}
              type="grey"
              onClick={() => {
                setIsAddingReview(false);
              }}
            />
          </div>
        </div>
      )}

      {reviews?.map((comment, i) => (
        <Comment
          key={i}
          comment={comment}
          replyCount={comment?.reviewsReply?.length}
        />
      ))}
    </div>
  );
};

export default Comments;
