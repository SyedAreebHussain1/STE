import { useNavigate } from "react-router-dom";
import { visitGreenIcon, visitIcon } from "../../../assets/dashboardAssets";
import ButtonWithSvg from "../../../components/button/ButtonWithSvg";
import TopPicksSectionCard from "./TopPicksSectionCard";
export interface ProductCardI {
  id: number;
  name: string;
  description: string;
  industry: string;
  logoUrl: any;
  websiteUrl: string | null;
  facebookLink: string | null;
  twitterLink: string | null;
  instagramLink: string | null;
  linkedInLink: string | null;
  businessId: number;
  createdBy: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  promotionPhotos: PromotionPhoto[];
  promotionVideos: any[];
  reviewCount: number;
  upVoteCounts: number;
}

interface PromotionPhoto {
  id: number;
  businessPromotionId: number;
  url: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
}

type PromotionPhotosT = {
  id: number;
  businessPromotionId: number;
  url: string;
};
const TopPicksSection = ({ products }: any) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col gap-[30px] relative justify-center items-center rounded-2xl p-[24px]  xl:w-full lg:w-[900px] mid:w-[800px] md:w-[650px] sm:w-[500px] xs:w-[400px] bg-primary bg-opacity-[8%]">
      <div className="sm:flex hidden justify-between items-center w-full">
        <div className="flex  flex-col gap-2">
          <h1 className="text-body font-semibold heading-s leading-[31.55px]">
            Explore What Fellow Entrepreneurs Are Building
          </h1>
          <p className="text-para font-medium body-s leading-[27px]">
            Support, engage, and discover innovative products from entrepreneurs
            like you. Upvote, comment, and get inspired by their journeys!
          </p>
        </div>
        <ButtonWithSvg
          title={"View All"}
          icon={visitGreenIcon}
          type="transparent"
          bold
          sm
          className="!border-[2px] !text-primary  !border-primary  hover:!border-primary"
          onClick={() => navigate("/product-promotions")}
        />
      </div>
      <div className="sm:hidden block ">
        <div className=" flex justify-between items-center w-full">
          <div className="flex flex-col gap-2">
            <h1 className="text-body font-semibold heading-s leading-[31.55px]">
              Explore What Fellow Entrepreneurs Are Building
            </h1>
            <p className="text-para font-medium body-s leading-[27px]">
              Support, engage, and discover innovative products from
              entrepreneurs like you. Upvote, comment, and get inspired by their
              journeys!
            </p>
          </div>
        </div>
        <ButtonWithSvg
          title={"View All"}
          icon={visitGreenIcon}
          type="transparent"
          bold
          sm
          className="!border-[2px] mt-3 !text-primary  !border-primary  hover:!border-primary"
          onClick={() => navigate("/product-promotions")}
        />
      </div>
      <div className="flex md:justify-start justify-center w-full">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
          {products?.map((product: any) => (
            <TopPicksSectionCard key={product?.id} card={product} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default TopPicksSection;
