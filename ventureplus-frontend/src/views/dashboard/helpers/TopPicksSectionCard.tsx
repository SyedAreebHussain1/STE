import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { imgPlaceholderGray } from "../../../assets/accountSettingsAssets";
import { chatIcon, trianglePrimaryIcon } from "../../../assets/dashboardAssets";
import { upvoteWhiteIcon } from "../../../assets/ProductPromotions";
import Tag from "../../../components/tag/tag";
import { RootState } from "../../../redux/store";
import {
  downvoteApi,
  getAllBusinessPromotionsApi,
  postProductPromotionUpvoteApi,
} from "../../../services/api/ProductPromotion";
import { ProductCardI } from "./TopPicksSection";
import { infoMessage } from "../../../utils/message";

const TopPicksSectionCard = ({ card }: { card: any }) => {
  const { isAuth, userData } = useSelector((state: RootState) => state.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePostUpvote = () => {
    if (card?.createdBy === userData?.companyUser?.id) {
      infoMessage("You cannot upvote your own products");
      return;
    }
    postProductPromotionUpvoteApi(dispatch, card?.id, onSuccess);
  };

  const onSuccess = () => {
    getAllBusinessPromotionsApi(dispatch, { page: 1, limit: 6 }, true);
  };

  const handleDownvoting = () => {
    downvoteApi(dispatch, card?.id, onSuccess);
  };
  return (
    <div className="rounded-xl w-full flex flex-col justify-center items-center gap-3 p-6 bg-[#fff] bg-opacity-[44%] shadow-[0px_4px_9.7px_0px_#002A2D29]">
      <div
        onClick={() => navigate(`/product/${card?.id}`)}
        className="rounded-xl h-full flex justify-center items-center w-full cursor-pointer overflow-hidden"
      >
        <img
          src={
            card?.promotionPhotos?.[0]?.url
              ? card.promotionPhotos[0].url
              : imgPlaceholderGray
          }
          alt={card?.name}
          className="md:w-full w-[300px] lg:h-[174px] md:h-[164px] h-[140px] rounded-lg object-cover"
        />
      </div>
      <div className="flex flex-col justify-between xl:w-[350px] md:w-[300px] w-[250px] gap-4 sm:px-6 px-2">
        <h1 className="heading-xs font-semibold leading-[25.02px] text-body line-clamp-1">
          {card?.name}
        </h1>

        <p className="text-para truncate">{card.description}</p>
        <div className="flex gap-3 items-center">
          {card?.userUpVoteExsist ? (
            <Tag
              title={card?.upVoteCounts}
              icon={upvoteWhiteIcon}
              bold
              className={"bg-primary !text-[white] cursor-pointer"}
              onClick={handleDownvoting}
            />
          ) : (
            <Tag
              title={card?.upVoteCounts}
              icon={trianglePrimaryIcon}
              bold
              className={"bg-[white] !text-primary cursor-pointer"}
              onClick={handlePostUpvote}
            />
          )}

          <Tag
            title={card?.reviewCount}
            icon={chatIcon}
            bold
            className={"bg-[#fff] text-para"}
          />
        </div>
      </div>
    </div>
  );
};

export default TopPicksSectionCard;
