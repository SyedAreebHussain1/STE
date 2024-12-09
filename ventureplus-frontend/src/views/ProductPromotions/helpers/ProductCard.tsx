import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { imgPlaceholderGray } from "../../../assets/accountSettingsAssets";
import {
  arrowRightGreyIcon,
  greenTriangleIcon,
  upvoteWhiteIcon,
} from "../../../assets/ProductPromotions";
import Tag from "../../../components/tag/tag";
import { RootState } from "../../../redux/store";
import {
  downvoteApi,
  getAllBusinessPromotionsApi,
  postProductPromotionUpvoteApi,
} from "../../../services/api/ProductPromotion";

interface Props {
  id: number;
  name: string;
  description: string;
  promotionPhotos: PromotionPhoto[];
  createdBy: number;
  userUpVoteExsist: any;
  pageLimit: { page: number; limit: number };
  topVote: boolean;
}

interface PromotionPhoto {
  id: number;
  businessPromotionId: number;
  url: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
}

const ProductCard = ({
  id,
  name,
  description,
  promotionPhotos,
  createdBy,
  userUpVoteExsist,
  pageLimit,
  topVote,
}: Props) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isAuth, userData } = useSelector((state: RootState) => state.user);

  const handleUpvoting = () => {
    postProductPromotionUpvoteApi(dispatch, id, onVoteUpdate);
  };

  const handleDownvoting = () => {
    downvoteApi(dispatch, id, onVoteUpdate);
  };

  const onVoteUpdate = () => {
    getAllBusinessPromotionsApi(dispatch, pageLimit, topVote);
  };

  return (
    <div className="rounded-xl w-full  flex flex-col justify-center items-center gap-3 p-6 bg-[#fff] bg-opacity-[44%] shadow-[0px_4px_9.7px_0px_#002A2D29]">
      <div className="rounded-xl h-full flex justify-center items-center w-full  overflow-hidden">
        <img
          src={
            promotionPhotos?.[2]?.url
              ? promotionPhotos?.[2]?.url
              : imgPlaceholderGray
          }
          alt=""
          className="md:w-full w-[300px] lg:h-[174px] md:h-[164px] h-[140px] rounded-lg object-fill"
        />
      </div>
      <div className="flex flex-col justify-between w-full gap-4">
        <div className="flex flex-col justify-between gap-2 w-full">
          <h1 className="heading-xs font-semibold leading-[25.02px] text-body ">
            {name}
          </h1>
        </div>
        <p className="text-para sm:truncate">“{description}”</p>
        <div className="flex justify-between w-full">
          <div>
            {userUpVoteExsist ? (
              <Tag
                title={"Upvoted"}
                icon={upvoteWhiteIcon}
                className={
                  "!bg-[#01B847] border-[#01B847] !text-white-100 cursor-pointer"
                }
                onClick={handleDownvoting}
              />
            ) : (
              <Tag
                title={"Upvote"}
                icon={greenTriangleIcon}
                className={"!text-[#01B847] border-[#01B847] cursor-pointer"}
                onClick={handleUpvoting}
              />
            )}
          </div>
          <div>
            <div
              className="flex gap-1 items-center cursor-pointer translate-icon font-bold px-2 py-1 text-center"
              onClick={() => navigate(`/product/${id}`)}
            >
              <img src={arrowRightGreyIcon} alt="" className="flex w-[30px]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
