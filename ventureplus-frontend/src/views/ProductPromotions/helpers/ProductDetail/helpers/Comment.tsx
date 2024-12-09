import { Avatar } from "antd";
import moment from "moment";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { anonymousAvatar } from "../../../../../assets";
import {
  commentIcon,
  replyIcon,
} from "../../../../../assets/ProductPromotions";
import RoundedButton from "../../../../../components/button/RoundedButton";
import Tag from "../../../../../components/tag/tag";
import {
  getProductPromotionByIdApi,
  postReplyByReviewIdApi,
} from "../../../../../services/api/ProductPromotion";
import { infoMessage } from "../../../../../utils/message";
import { Review } from "./Comments";
import { RootState } from "../../../../../redux/store";

interface CommentI {
  comment: Review;
  replyCount: number;
}

const Comment = ({ comment, replyCount }: CommentI) => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [isReplying, setIsReplying] = useState(false);
  const [showReplies, setShowReplies] = useState(false);
  const [selectedReviewId, setSelectedReviewId] = useState<number | null>(null);
  const [reply, setReply] = useState("");
  const { loading } = useSelector(
    (state: RootState) => state.postReplyByReviewId
  );

  const handlePostReply = (id: any, message: string) => {
    if (!id || !message) {
      infoMessage("Please add a reply first!");
      return;
    }
    postReplyByReviewIdApi(dispatch, id, { message }, onSuccess);
  };

  const onSuccess = () => {
    getProductPromotionByIdApi(dispatch, Number(id));
    setIsReplying(false);
    setReply("");
  };

  return (
    <div className="flex flex-col gap-2">
      <div className="flex gap-2 p-4">
        <Avatar
          src={
            comment.createdByUser?.profilePhoto
              ? comment.createdByUser?.profilePhoto
              : anonymousAvatar
          }
          size={50}
        />
        <div className="flex flex-col gap-3 p-2">
          <div className="flex gap-1 items-center">
            {/* comment header */}
            <p className="body-s text-body font-semibold">
              {comment?.createdByUser?.name}
            </p>
            <p className="body-s text-paraLight font-semibold">.</p>
            <p className="body-xs text-paraLight">
              {moment(comment?.createdAt).local().fromNow()}
            </p>
          </div>
          {/* comment content */}
          <div className="flex flex-col gap-2">
            <p className="text-paraLight">{comment?.value}</p>
          </div>
          {/* comment options */}
          <div className="flex items-center gap-2">
            <Tag
              title={replyCount}
              icon={commentIcon}
              type="grey"
              bold
              className={"text-paraLight cursor-pointer"}
              onClick={() => {
                setShowReplies(!showReplies);
              }}
            />
            <Tag
              title={"Reply"}
              icon={replyIcon}
              type="grey"
              bold
              className={"text-paraLight cursor-pointer"}
              onClick={() => {
                setSelectedReviewId(Number(comment?.id));
                setIsReplying(!isReplying);
              }}
            />
          </div>
        </div>
      </div>

      {/* user reply editor */}
      {isReplying && (
        <div className="border border-strokes p-2 rounded-xl flex flex-col ml-20">
          <textarea
            className="flex-1 !bg-transparent !border-none !outline-none focus:!bg-transparent focus:!border-none focus:!outline-none"
            value={reply}
            autoFocus
            onChange={(e) => setReply(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                handlePostReply(selectedReviewId, reply);
              }
            }}
            rows={4}
          />
          <div className="flex justify-end gap-3 items-center">
            <RoundedButton
              title={"Comment"}
              sm
              loading={loading}
              type="primary"
              onClick={() => {
                handlePostReply(selectedReviewId, reply);
              }}
            />
            <RoundedButton
              title={"Cancel"}
              sm
              type="grey"
              disabled={loading}
              onClick={() => {
                setIsReplying(false);
              }}
            />
          </div>
        </div>
      )}

      {/* replies */}
      {showReplies &&
        comment?.reviewsReply?.length > 0 &&
        comment.reviewsReply.map((reply) => (
          <div key={reply.id} className="flex gap-2 p-4 ml-20">
            <Avatar
              src={
                reply?.createdByUser?.profilePhoto
                  ? reply?.createdByUser?.profilePhoto
                  : anonymousAvatar
              }
              size={50}
            />
            <div className="flex flex-col gap-3 p-2">
              <div className="flex gap-1 items-center">
                {/* comment header */}
                <p className="body-s text-body font-semibold">
                  {reply?.createdByUser?.name}
                </p>
                <p className="body-s text-paraLight font-semibold">.</p>
                <p className="body-xs text-paraLight">
                  {moment(reply?.createdAt).local().fromNow()}
                </p>
              </div>
              {/* comment content */}
              <div className="flex flex-col gap-2">
                <p className="text-paraLight">{reply?.message}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Comment;
