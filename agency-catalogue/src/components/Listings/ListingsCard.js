import React from "react";
import BedroomIcon from "./../../assets/images/bedroom.png";
import BathroomIcon from "./../../assets/images/bath.png";
import SizeIcon from "./../../assets/images/size.png";
import { Link, useParams } from "react-router-dom";

const ListingsCard = ({
  image,
  price,
  title,
  location,
  bedroom,
  baths,
  size,
  id,
  listingType,
  inVentoryType,
}) => {
  const params = useParams();
  return (
    <div>
      <div
        className="w-full h-[260px] overflow-hidden select-none object-cover mb-[1.313rem] relative bg-black bg-center bg-no-repeat bg-contain"
        style={{
          backgroundImage: `url(${image})`,
        }}
      >
        {" "}
        <div className="p-[16px]">
          {listingType == "Listing" ? null : (
            <span className="rounded-[36px] bg-[#FF3A44] text-[1rem] text-white px-[20.5px] py-[2px] ">
              Hot
            </span>
          )}
          <span className="rounded-[36px] bg-[#176FEA] text-[1rem] text-white px-[20.5px] py-[2px] ml-[10px] ">
            {inVentoryType == "ForSell" ? "Sell" : "Rent"}
          </span>
        </div>
        {/* <div className="p-[16px] absolute bottom-[8px]">
          <span className="text-[0.875rem] text-[#4A5568] rounded-[49px] font-semibold bg-[#F5F5F5] px-[16px] py-[11px]">
            Residential Plot
          </span>
        </div> */}
        <div className="p-[16px] absolute bottom-[8px] right-2">
          <span className="right-[16px]"></span>
        </div>
      </div>

      <Link to={`/${params?.id}/inventories/${id}`}>
        <h3 className="text-[#191F2B] font-bold text-2xl">{price}</h3>
        <h4 className="text-[#344054] font-semibold text-xl">{title}</h4>
        <span className="text-[#34405480] text-base font-medium mb-[0.813rem]">
          {location}
        </span>
      </Link>
      <div className="flex items-center justify-between  mt-[1.125rem]">
        {/* <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#6C47FF1A] rounded-full flex justify-center items-center">
            <img src={BedroomIcon} alt="bedroom icon" />
          </div>
          <span className="text-base text-[#344054 font-medium]">
            {bedroom} Bedrooms
          </span>
        </div> */}
        {/* <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#6C47FF1A] rounded-full flex justify-center items-center">
            <img src={BathroomIcon} alt="bedroom icon" />
          </div>
          <span className="text-base text-[#344054 font-medium]">
            {baths} Baths
          </span>
        </div> */}
        <div className="flex items-center gap-2">
          <div className="w-7 h-7 bg-[#6C47FF1A] rounded-full flex justify-center items-center">
            <img src={SizeIcon} alt="bedroom icon" />
          </div>
          <span className="text-base text-[#344054 font-medium]">{size}</span>
        </div>
      </div>
    </div>
  );
};

export default ListingsCard;
