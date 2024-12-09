import { websiteLogo } from "../../../assets/website";
import { useLocation, useNavigate } from "react-router-dom";

interface Props {}

const Header = (props: Props) => {
  const navigate = useNavigate();
  let location = useLocation();

  const hidePricing = ["/sign-up"];

  const hidePricingPaths = hidePricing.includes(location.pathname);

  return (
    <div className="flex border-b-[1px] border-[rgba(205, 212, 223, 0.20)] justify-between w-full h-[50px] items-center ">
      <div
        className="w-[200px] cursor-pointer"
        onClick={() => {
          navigate("/");
        }}
      >
        <img src={websiteLogo} className="h-4" />
      </div>
      <div>
        <p className="text-[14px] text-[#040615] font-medium">
          Already have an account?
          <span
            className="text-[#016A70] cursor-pointer ml-1"
            onClick={() => {
              navigate("/login");
            }}
          >
            Click here
          </span>
        </p>
      </div>
      {hidePricingPaths && (
        <div className="w-[200px] text-[14px] text-[#040615] cursor-pointer">
          See Pricing
        </div>
      )}
    </div>
  );
};

export default Header;
