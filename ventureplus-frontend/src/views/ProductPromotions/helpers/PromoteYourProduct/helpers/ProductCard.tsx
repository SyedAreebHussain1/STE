import moment from "moment";
import { useNavigate } from "react-router-dom";
import { imgPlaceholderGray } from "../../../../../assets/accountSettingsAssets";
import { triangleIcon } from "../../../../../assets/dashboardAssets";
import { commentIcon } from "../../../../../assets/ProductPromotions";
import Tag from "../../../../../components/tag/tag";

export interface ProductPromotionCardI {
  id: number;
  name: string;
  industry: string;
  upvoteCount: number;
  reviewCount: number;
  createdAt: number;
  promotionPhotos: PromotionPhotosT[];
}

type PromotionPhotosT = {
  id: number;
  businessPromotionId: number;
  url: string;
};

const ProductCard = ({
  id,
  name,
  industry,
  createdAt,
  promotionPhotos,
  upvoteCount,
  reviewCount,
}: ProductPromotionCardI) => {
  const navigate = useNavigate();
  return (
    <div
      className="w-[354px] border border-strokes rounded-xl flex flex-col gap-2 p-4 justify-center text-center cursor-pointer"
      onClick={() => navigate(`/product/${id}`)}
    >
      <img
        src={
          promotionPhotos?.[0]?.url
            ? promotionPhotos?.[0]?.url
            : imgPlaceholderGray
        }
        alt=""
        className="w-full h-[230px] rounded-xl"
      />
      <h1 className="text-title font-semibold heading-xs">{name}</h1>
      <div className="flex justify-between items-center">
        <p className="text-para font-medium">
          {moment(createdAt).format("MMM YYYY")}
        </p>
        <Tag
          title={industry ? industry : "Industry"}
          className={"bg-green-100"}
          bold
        />
      </div>
      <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center">
          <img src={triangleIcon} alt="" className="w-4 h-4" />
          <p className="font-semibold">{upvoteCount}</p>
        </div>
        <div className="flex gap-1 items-center">
          <img src={commentIcon} alt="" className="w-4 h-4" />
          <p className="font-semibold">{reviewCount}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
