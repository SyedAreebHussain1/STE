import { Link } from "react-router-dom";
import arrowIcon from "../../../assets/arrowIcon.png";
export type ItemType = {
  item: {
    title: string;
    pera: string;
    img: string;
    url: string;
  };
};
const WebEstateFeaturesCard = ({ item }: ItemType) => {
  return (
    <Link to={item.url}>
      <div className="bg-[#ffffff] p-[15px] rounded-[12px] mt-3 md:mx-0 sm:mx-2 min-h-auto md:min-h-[338px] xl:min-h-[311px]">
        <div>
          <img src={item?.img} alt="" />
        </div>
        <div>
          <h2 className="text-[#1D2939] xl:text-[1.2rem] md:text-sm font-semibold mt-2">
            {item.title}
          </h2>
          <p className="text-[.8125rem] font-medium text-[#475467] mt-2">
            {item.pera}
          </p>
        </div>
        <div className="mt-6">
          <button className="text-[#27A3A3] text-[1rem] font-normal flex gap-4 items-center">
            Manage <img src={arrowIcon} alt="" />
          </button>
        </div>
      </div>
    </Link>
  );
};

export default WebEstateFeaturesCard;
