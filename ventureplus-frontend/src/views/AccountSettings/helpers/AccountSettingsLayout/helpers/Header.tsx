import { bannerBg } from "../../../../../assets/businessSettingsAssets";
import Tag from "../../../../../components/tag/tag";

interface HeaderI {
  title: string;
  description: string;
  tagTitle?: string;
}

const Header = ({ title, description, tagTitle }: HeaderI) => {
  return (
    <div className="h-[192px] w-full rounded-[10px] relative bg-primary overflow-hidden text-[#fff] flex px-[35px] py-[54px] items-center ">
      <div className="h-full w-full absolute top-0 left-0 opacity-20">
        <img src={bannerBg} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col gap-1 relative z-10">
        {tagTitle && (
          <Tag
            title={tagTitle}
            className={"!bg-secondary !bg-opacity-5 !text-[#fff] border-none"}
          />
        )}
        <h1 className="font-medium heading-l ">{title}</h1>
        <p className="font-medium btn-text">{description}</p>
      </div>
    </div>
  );
};
export default Header;
