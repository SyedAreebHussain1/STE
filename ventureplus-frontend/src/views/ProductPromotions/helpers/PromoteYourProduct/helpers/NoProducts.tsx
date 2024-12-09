import { useNavigate } from "react-router-dom";
import { rightArrowIcon } from "../../../../../assets";
import { noProductsImg } from "../../../../../assets/ProductPromotions";
import ButtonWithSvg from "../../../../../components/button/ButtonWithSvg";

const NoProducts = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full bg-[#003951] bg-opacity-[3%] rounded-xl flex flex-col items-center justify-center py-8">
      <img src={noProductsImg} alt="" />
      <p className="text-paraLight font-medium paragraph text-center mb-4">
        It looks like you haven’t promoted yet. Let’s get your business promoted
        and ready to impress.
      </p>
      <ButtonWithSvg
        title={"Add New Promotion"}
        icon={rightArrowIcon}
        type="primary"
        sm
        bold
        onClick={() => navigate("/product/create")}
      />
    </div>
  );
};

export default NoProducts;
