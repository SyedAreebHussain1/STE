import { useNavigate } from "react-router-dom";
import { visitIcon } from "../../../assets/dashboardAssets";
import { bannerGradientBg } from "../../../assets/ProductPromotions";
import ButtonWithSvg from "../../../components/button/ButtonWithSvg";

const Banner = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="sm:flex hidden">
        <div className="h-[150px] w-full rounded-[10px] relative overflow-hidden text-[#fff] flex px-[35px] py-[54px] items-center ">
          <div className="h-full w-full absolute top-0 left-0">
            <img
              src={bannerGradientBg}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex sm:flex-row md:flex-col gap-1 relative z-10 sm:w-full sm:items-center md:items-start">
            <h1 className="font-semibold md:text-4xl text-black">
              Discover Other Businesses On Venture Plus
            </h1>
          </div>
          <div>
            <ButtonWithSvg
              title={"Promote Your Business"}
              icon={visitIcon}
              type="transparent"
              bold
              sm
              onClick={() => navigate("/promote-product")}
              className="!text-gray !border-black hover:!text-black hover:!border-black !border-[2px] px-6"
            />
          </div>
        </div>
      </div>
      <div className="sm:hidden flex">
        <div className="h-[150px] w-full rounded-[10px] relative overflow-hidden text-[#fff] block px-[25px] py-[34px] items-center ">
          <div className="h-full w-full absolute top-0 left-0">
            <img
              src={bannerGradientBg}
              alt=""
              className="h-full w-full object-cover"
            />
          </div>
          <h1 className="font-semibold md:text-4xl text-black">
            Discover Other Businesses On Venture Plus
          </h1>
          <div className="mt-3">
            <ButtonWithSvg
              title={"Promote Your Business"}
              icon={visitIcon}
              type="transparent"
              bold
              sm
              onClick={() => navigate("/promote-product")}
              className="!text-gray !border-black hover:!text-black hover:!border-black !border-[2px] px-4"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Banner;
