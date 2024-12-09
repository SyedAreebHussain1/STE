import { IoIosArrowBack } from "react-icons/io";
import { bannerBg } from "../../../../../assets/businessSettingsAssets";
import Tag from "../../../../../components/tag/tag";
import { Dispatch, SetStateAction } from "react";
import { SelectedCardType } from "../../..";

interface HeaderI {
  title: SelectedCardType;
  description: string;
  tagTitle: string;
  setSelectedCard: Dispatch<SetStateAction<SelectedCardType>>;
}

const Header = ({ title, description, tagTitle, setSelectedCard }: HeaderI) => {
  return (
    <div className="sm:h-[192px] h-[220px]  w-full rounded-[10px] relative bg-primary overflow-hidden text-[#fff] flex sm:px-[35px] px-[25px] sm:py-[54px] py-[44px] items-center ">
      <div className="h-full w-full absolute top-0 left-0 opacity-20">
        <img src={bannerBg} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col gap-1 relative z-10">
        <div
          className="flex text-[#fff] text-lg items-center cursor-pointer gap-1"
          onClick={() => {
            setSelectedCard("");
          }}
        >
          <span>
            <IoIosArrowBack className="px-[1px] text-[1rem]" />
          </span>
          <span>Back</span>
        </div>
        <Tag
          title={tagTitle}
          className={"!bg-secondary !bg-opacity-5 !text-[#fff] border-none"}
        />
        <h1 className="font-medium heading-l ">{title}</h1>
        <p className="font-medium btn-text">{description}</p>
      </div>
    </div>
  );
};
export default Header;
