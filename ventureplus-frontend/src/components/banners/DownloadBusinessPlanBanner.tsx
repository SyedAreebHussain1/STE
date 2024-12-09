import { docsBannerImg, downloadIcon } from "../../assets";
import ButtonWithSvg from "../button/ButtonWithSvg";

interface Props {
  handleClick?: () => void;
};

const DownloadBusinessPlanBanner = ({ handleClick }: Props) => {
  return (
    <div className="bg-[#EBE9FE] h-[196px] rounded-xl mb-5 relative">
      <img
        src={docsBannerImg}
        alt=""
        className="absolute right-2 xs:hidden lg:block"
      />
      <div className="flex flex-col p-6 h-full justify-center">
        <h1 className="text-[32px] font-semibold">
          Your Business Plan
        </h1>
        <ButtonWithSvg
          title={"Download Now"}
          icon={downloadIcon}
          type="primary"
          sm
          className="mt-[10px] !w-fit "
          onClick={handleClick}
        />
      </div>
    </div>
  );
};

export default DownloadBusinessPlanBanner;
