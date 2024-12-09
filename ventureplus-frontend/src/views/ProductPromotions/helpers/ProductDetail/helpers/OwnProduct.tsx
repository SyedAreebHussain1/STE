import { Avatar, Button } from "antd";
import { useNavigate, useParams } from "react-router-dom";
import Images from "./Images";
import StatsCards from "./StatsCards";
import { editIcon, deleteIcon } from "../../../../../assets/ProductPromotions";
import {
  deleteProductPromotionApi,
  getProductPromotionsByBusinessIdApi,
} from "../../../../../services/api/ProductPromotion";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../../../redux/store";

export interface ProductPromotionI {
  product: ProductI;
  stats: ProductPromotionStatsT;
}

export interface ProductI {
  id: number;
  name: string;
  description: string;
  industry: string;
  logoUrl: any;
  websiteUrl: string;
  facebookLink: string;
  twitterLink: string;
  instagramLink: string;
  linkedInLink: string;
  businessId: number;
  createdBy: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  promotionPhotos: PromotionPhoto[];
  promotionVideos: any[];
  reviews: any[];
  upVote: any[];
  upvoteCount: number;
  business: Business;
}

interface Business {
  id: number;
  companyId: number;
  company: Company;
}
interface PromotionPhoto {
  id: number;
  businessPromotionId: number;
  url: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
}
interface Company {
  id: number;
  name: string;
}

export type ProductPromotionStatsT = {
  reviewsCounts: number;
  VoteCounts: number;
  ViewCounts: number;
};

const OwnProduct = ({ product, stats }: ProductPromotionI) => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const currentSelectedBusiness = useSelector(
    (state: RootState) => state.currentSelectedBusiness
  );

  const handleDeleteProduct = () => {
    deleteProductPromotionApi(dispatch, Number(id), onSuccess);
  };

  const onSuccess = () => {
    navigate("/promote-product");
    getProductPromotionsByBusinessIdApi(
      dispatch,
      { page: 1, limit: 10 },
      currentSelectedBusiness?.business?.id
    );
  };

  return (
    <>
      <div className="flex justify-between items-center">
        <div className="flex justify-between items-center gap-2">
          <h1 className="font-bold text-2xl">
            <span className="text-gray-500">Business Name: </span>{" "}
            {product?.business?.company?.name}
          </h1>
        </div>
        <div className="flex justify-between items-center gap-2">
          <Button
            className="!border-strokes focus:!border-strokes !bg-[#fff]"
            onClick={() => navigate(`/product/update/${id}`)}
          >
            <div className="flex justify-between items-center gap-2 ">
              <h1 className="font-medium text-body">Edit</h1>
              <img src={editIcon} alt="" className=" " />
            </div>
          </Button>
          <Button
            className="!border-strokes focus:!border-strokes !bg-[#fff]"
            onClick={handleDeleteProduct}
          >
            <div className="flex justify-between items-center gap-2 ">
              <h1 className="font-medium text-danger">Delete</h1>
              <img src={deleteIcon} alt="" className="h-[20px] w-[20px] " />
            </div>
          </Button>
        </div>
      </div>
      {/* images section */}
      <Images product={product} />
      {/* stats Cards */}
      <StatsCards stats={stats} />
    </>
  );
};

export default OwnProduct;
