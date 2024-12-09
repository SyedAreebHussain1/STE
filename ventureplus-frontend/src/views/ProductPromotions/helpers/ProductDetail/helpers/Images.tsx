import { imgPlaceholderGray } from "../../../../../assets/accountSettingsAssets";
import { ProductI } from "./OwnProduct";

interface ImagesI {
  product: ProductI;
}

const Images = ({ product }: ImagesI) => {
  return (
    <div className="flex gap-3 w-full flex-col lg:flex-row mt-6">
      <div className="main-image relative rounded-xl flex-1 h-[436px] bg-cover bg-center flex items-end max-h-[436px]">
        <img
          src={
            product?.promotionPhotos?.[0]?.url
              ? product?.promotionPhotos?.[0]?.url
              : imgPlaceholderGray
          }
          alt=""
          className="w-full h-full absolute rounded-xl"
        />
        <div className="p-8 relative z-40">
          <h1 className="heading-l font-semibold mb-4 text-[#fff]">
            {product?.name}
          </h1>
          <p className="paragraph text-[#fff] line-clamp-4">
            {product?.description}
          </p>
        </div>
      </div>
      <div className="flex gap-3 flex-col">
        <img
          src={
            product?.promotionPhotos?.[1]?.url
              ? product?.promotionPhotos?.[1]?.url
              : imgPlaceholderGray
          }
          className="rounded-xl h-[212px] min-w-[341px] object-cover"
        />
        <img
          src={
            product?.promotionPhotos?.[2]?.url
              ? product?.promotionPhotos?.[2]?.url
              : imgPlaceholderGray
          }
          className="rounded-xl h-[212px] min-w-[341px] object-cover"
        />
      </div>
    </div>
  );
};

export default Images;
