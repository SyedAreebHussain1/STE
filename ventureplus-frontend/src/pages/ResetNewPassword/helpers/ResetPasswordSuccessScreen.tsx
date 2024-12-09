import ButtonWithSvg from "../../../components/button/ButtonWithSvg";
import { blueCheckBox, leftArrowBlackIcon } from "../../../assets";
import { useNavigate } from "react-router-dom";

const ResetPasswordSuccessScreen = () => {
  const navigate = useNavigate();

  return (
    <div className="mb-[40px]">
      <div className="flex w-full mt-9 md:mt-0 justify-center ">
        <div>
          <h1 className="font-semibold text-[36px] text-[#040615] line-height-[39.17px] text-center">
            Password Reset Complete!
          </h1>
          <h2 className="text-[#97A1B5] font-normal text-[18px] line-height-[19.58px] text-center">
            Congratulations!
          </h2>
        </div>
      </div>
      <div className="text-[#016A70] font-semibold text-[18px] flex justify-center mt-[20px] items-center gap-2">
        <img src={blueCheckBox} />{" "}
        <span>Login Now With Your New Credentials.</span>
      </div>
      <div className="w-full  justify-center mt-[30px] sm:mt-[10px]">
        <div className="flex justify-center mt-[20px]">
          <ButtonWithSvg
            isLeft
            icon={leftArrowBlackIcon}
            title={"Back to login"}
            className="text-[#4A5366]"
            type="secondary"
            htmlType="button"
            onClick={() => navigate("/login")}
          />
        </div>
      </div>
    </div>
  );
};
export default ResetPasswordSuccessScreen;
