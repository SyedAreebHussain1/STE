import { IoLocationOutline } from "react-icons/io5";
import BedroomIcon from "./../assets/bedroom-icon.svg";
import BathroomIcon from "./../assets/baths-icon.svg";
import AreaSizeIcon from "./../assets/area-size-icon.svg";
import { useNavigate } from "react-router-dom";
type Props = {
  id: number;
  img: string;
  commission: string;
  price: string;
  desc?: string;
  address: string;
  bed: string;
  baths: string;
  areaSize: string;
  areaTitle: string;
  data?: any;
};
export const areaTitleObject: any = {
  "Square Feet": "Sq. Ft",
};

const PropertyCard = (props: Props) => {
  const navigate = useNavigate();
  function handleClick() {
    navigate(`/inventory-management/properties/${props?.id}`);
  }
  return (
    <div
      className="p-3 border border-borderColor rounded-md mb-4 cursor-pointer"
      onClick={handleClick}
    >
      <div
        className="rounded-md h-[216px] overflow-hidden relative"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 100%)",
        }}
      >
        <img src={props.img} alt="" className="w-full h-full object-cover" />
        {props.commission && (
          <span className="absolute bottom-2 left-2 z-10 bg-[#C31162] px-3 py-1 rounded-full text-white font-medium text-base">{`PKR ${props.commission} Cash Commission`}</span>
        )}
      </div>
      <div className="mt-3">
        <h2 className="text-[1.2rem] font-semibold">{props.price}</h2>
        {props.desc && (
          <div className="flex gap-1 items-center">
            <span className="text-[#667085] font-medium text-base">
              {props.desc}
            </span>
          </div>
        )}
        <div className="flex gap-1 items-center">
          <span className="text-[#667085] font-medium text-base">
            {props.address}
          </span>
        </div>
      </div>
      <div className="flex justify-between items-center mt-6">
        {props.bed && (
          <div className="flex flex-col gap-2 flex-1 items-center">
            <h4 className="text-[#344054] font-medium text-base">Bedroom</h4>
            <div className="flex gap-2 items-center">
              <img src={BedroomIcon} alt="" />
              <span className=" text-[#344054]">{props.bed}</span>
            </div>
          </div>
        )}
        {props.baths && (
          <div className="flex flex-col gap-2 flex-1 items-center">
            <h4 className="text-[#344054] font-medium text-base">Bathroom</h4>
            <div className="flex gap-2 items-center">
              <img src={BathroomIcon} alt="" />
              <span className=" text-[#344054]">{props.baths}</span>
            </div>
          </div>
        )}
        {props.areaSize && (
          <div className="flex flex-col gap-2 flex-1 items-center">
            <h4 className="text-[#344054] font-medium text-base">Area Size</h4>
            <div className="flex gap-2 items-center">
              <img src={AreaSizeIcon} alt="" />
              <span className=" text-[#344054]">
                {props.areaSize}{" "}
                {props.areaTitle in areaTitleObject
                  ? areaTitleObject[props.areaTitle]
                  : props.areaTitle}
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default PropertyCard;
