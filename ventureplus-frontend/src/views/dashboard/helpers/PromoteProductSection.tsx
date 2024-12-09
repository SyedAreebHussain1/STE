import { useNavigate } from "react-router-dom";
import {
  promoteProductSectionBg,
  visitWhiteIcon,
} from "../../../assets/dashboardAssets";
import ButtonWithSvg from "../../../components/button/ButtonWithSvg";

const PromoteProductSection = () => {
  const navigate = useNavigate();
  return (
    <div className="bg-green-800 flex flex-col gap-[30px] relative justify-center overflow-hidden items-center rounded-2xl p-[24px] w-full">
      <img
        src={promoteProductSectionBg}
        alt=""
        className="absolute top-0 right-0 sm:hidden  md:hidden xl:block"
      />
      <div className="sm:flex block justify-between items-center w-full">
        <div className="flex flex-col gap-2">
          <h1 className="text-[#fff] font-semibold heading-s leading-[31.55px]">
            Promote Your Business
          </h1>
          <p className="text-[#fff] font-medium body-s leading-[27px]">
            Promote Now and See Why It's Loved by Thousands!
          </p>
        </div>
        <ButtonWithSvg
          title={"View Your Promotions"}
          icon={visitWhiteIcon}
          type="transparent"
          bold
          sm
          onClick={() => navigate("/promote-product")}
          className="!text-[#fff] !border-[#fff] hover:!text-[#fff] hover:!border-[#fff] !border-[2px]"
        />
      </div>
    </div>
  );
};

export default PromoteProductSection;
