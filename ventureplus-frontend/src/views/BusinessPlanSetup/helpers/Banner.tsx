import { bannerBg } from "../../../assets/businessSettingsAssets";

const Banner = () => {
  return (
    <div className="h-[170px] w-full rounded-[10px] relative bg-primary overflow-hidden text-[#fff] flex px-[35px] py-[54px] items-center mb-5">
      <div className="h-full w-full absolute top-0 left-0 opacity-20">
        <img src={bannerBg} alt="" className="h-full w-full object-cover" />
      </div>

      <div className="flex flex-col gap-1 relative z-10">
        <h1 className="font-medium heading-l ">Business Plan setup</h1>
        <p className="font-medium btn-text">
          Your Comprehensive Resource for Strategic Planning and Growth
        </p>
      </div>
    </div>
  );
};

export default Banner;
