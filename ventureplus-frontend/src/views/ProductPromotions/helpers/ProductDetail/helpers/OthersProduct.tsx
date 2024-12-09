import { useDispatch, useSelector } from "react-redux";
import {
  commentIcon,
  facebookGrayIcon,
  globe,
  instaGrayIcon,
  linkedinGrayIcon,
  twitterGrayIcon,
  upvoteIcon,
  upvoteWhiteIcon,
  websiteGrayIcon,
} from "../../../../../assets/ProductPromotions";
import { visitWhiteIcon } from "../../../../../assets/dashboardAssets";
import SvgCircleButton from "../../../../../components/button/SvgCircleButton";
import Tag from "../../../../../components/tag/tag";
import { RootState } from "../../../../../redux/store";
import {
  downvoteApi,
  getProductPromotionByIdApi,
  postProductPromotionUpvoteApi,
  postViewApi,
} from "../../../../../services/api/ProductPromotion";
import { ProductPromotionI } from "./OwnProduct";
import { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import VideoPlayer from "./VideoPlayer";

const OthersProduct = ({ product, stats }: ProductPromotionI) => {
  const { id } = useParams();
  const timeout = useRef<any>();
  const dispatch = useDispatch();
  const { isAuth, userData } = useSelector((state: RootState) => state.user);
  const getProductPromotionById = useSelector(
    (state: RootState) => state.getProductPromotionById
  );
  const videoUrl =
    "https://dyzuuzsf9g12i.cloudfront.net/ventureplus-development/Brewed%20Pages/VID20240904144854-1725517711718-1729065167631.mp4";

  const handlePostUpvote = () => {
    postProductPromotionUpvoteApi(dispatch, product?.id, onSuccess);
  };

  const onSuccess = () => {
    getProductPromotionByIdApi(dispatch, product?.id);
  };

  const handleClick = (url: string) => {
    let link;
    if (!url.includes("https://")) {
      link = `https://${url}`;
    }
    if (url) window.open(link, "_blank");
  };

  const handleDownvoting = () => {
    downvoteApi(dispatch, product?.id, onSuccess);
  };

  const hasUpvoted = () => {
    return product?.upVote?.find(
      (vote) => vote.createdBy === userData?.companyUser?.id
    );
  };

  useEffect(() => {
    postView();
  }, []);

  const postView = () => {
    clearTimeout(timeout.current);
    timeout.current = setTimeout(() => {
      if (
        userData?.companyUser?.id &&
        getProductPromotionById?.data?.data?.createdBy
      ) {
        if (
          userData?.companyUser?.id !==
          getProductPromotionById?.data?.data?.createdBy
        ) {
          postViewApi(Number(id));
        }
      }
    }, 1000);
  };

  return (
    <>
      <div className="flex gap-4 flex-wrap justify-between">
        <div className="flex flex-col lg:max-w-[65%] p-4 flex-1">
          <h1 className="heading-m font-semibold">
            {product?.business?.company?.name}
          </h1>
          <h1 className="heading-l font-semibold">{product?.name}</h1>
          <p className="body-s leading-6">{product?.description}</p>
          <div className="flex gap-3 items-center mt-3">
            {hasUpvoted() ? (
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
                title={product?.upvoteCount}
                icon={upvoteIcon}
                color={"text-para"}
                className={"!bg-green-100 border-green-100 cursor-pointer"}
                bold
                onClick={() => handlePostUpvote()}
              />
            )}
            <Tag
              title={stats?.reviewsCounts}
              icon={commentIcon}
              color={"text-para"}
              className={"!bg-secondary border-secondary"}
              bold
            />
          </div>
        </div>
        {product?.websiteUrl && (
          <div
            onClick={() => handleClick(product?.websiteUrl)}
            className="flex gap-3 h-fit items-center pr-10 cursor-pointer"
          >
            <SvgCircleButton icon={visitWhiteIcon} type="dark" xs />
            <h1 className="text-para font-semibold text-lg">GO TO WEBSITE</h1>
          </div>
        )}
      </div>
      {product?.promotionVideos?.length > 0 && (
        <div className="w-full bg-transparent flex items-center justify-center">
          <VideoPlayer videoUrl={product?.promotionVideos?.[0]?.url} />
        </div>
      )}

      <div className="flex gap-2 h-[450px] justify-evenly overscroll-x-auto custom-scrollbar w-full my-4 overflow-x-auto custom-scrollbar">
        {product?.promotionPhotos?.map((image, i) => (
          <img
            key={i}
            src={image?.url}
            alt=""
            className="h-full rounded-lg object-cover w-[335px] border border-strokes"
          />
        ))}
      </div>

      {(product?.instagramLink ||
        product?.linkedInLink ||
        product?.twitterLink ||
        product?.facebookLink) && (
        <div className="flex py-4">
          <div className="flex flex-col lg:max-w-[65%] p-4">
            <h1 className="heading-l font-semibold">Connect with Us</h1>
            <p className="paragraph leading-6">
              Stay updated with our latest news, events, and updates by
              following us on social media
            </p>
            <div className="flex items-end gap-2 h-full mb-4">
              {product?.websiteUrl && (
                <div
                  onClick={() => handleClick(product?.websiteUrl)}
                  style={{ boxShadow: "0px 4px 5.9px 0px #016A701A" }}
                  className="h-[70px] w-[70px] border border-strokes rounded-lg flex items-center justify-center p-3 cursor-pointer"
                >
                  <img src={websiteGrayIcon} alt="" />
                </div>
              )}

              {product?.facebookLink && (
                <div
                  onClick={() => handleClick(product?.facebookLink)}
                  style={{ boxShadow: "0px 4px 5.9px 0px #016A701A" }}
                  className="h-[70px] w-[70px] border border-strokes rounded-lg flex items-center justify-center p-3 cursor-pointer"
                >
                  <img src={facebookGrayIcon} alt="" className="h-20 w-20" />
                </div>
              )}

              {product?.instagramLink && (
                <div
                  onClick={() => handleClick(product?.instagramLink)}
                  style={{ boxShadow: "0px 4px 5.9px 0px #016A701A" }}
                  className="h-[70px] w-[70px] border border-strokes rounded-lg flex items-center justify-center p-3 cursor-pointer"
                >
                  <img src={instaGrayIcon} alt="" />
                </div>
              )}

              {product?.linkedInLink && (
                <div
                  onClick={() => handleClick(product?.linkedInLink)}
                  style={{ boxShadow: "0px 4px 5.9px 0px #016A701A" }}
                  className="h-[70px] w-[70px] border border-strokes rounded-lg flex items-center justify-center p-3 cursor-pointer"
                >
                  <img src={linkedinGrayIcon} alt="" />
                </div>
              )}
              {product?.twitterLink && (
                <div
                  onClick={() => handleClick(product?.twitterLink)}
                  style={{ boxShadow: "0px 4px 5.9px 0px #016A701A" }}
                  className="h-[70px] w-[70px] border border-strokes rounded-lg flex items-center justify-center p-3 cursor-pointer"
                >
                  <img src={twitterGrayIcon} alt="" className="w-24 h-24" />
                </div>
              )}
            </div>
          </div>
          <img src={globe} alt="" className="w-[450px] h-[300px]" />
        </div>
      )}
    </>
  );
};

export default OthersProduct;
