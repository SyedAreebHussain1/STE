import { useNavigate } from "react-router-dom";
import { rightArrowIcon } from "../../../../../assets";
import ButtonWithSvg from "../../../../../components/button/ButtonWithSvg";
import { noCanvasImg } from "../../../../../assets/BusinessToolkit";

const NoCanvas = () => {
  const navigate = useNavigate();
  return (
    <div className="h-full bg-[#003951] bg-opacity-[3%] rounded-xl flex flex-col items-center justify-center py-8 gap-5 mt-4">
      <p className="text-paraLight font-medium paragraph text-center">
        It looks like you haven’t started yet. Let’s get your business ideas
        polished and ready to impress.
      </p>
      <ButtonWithSvg
        title={"Build Yours Now"}
        icon={rightArrowIcon}
        type="primary"
        sm
        bold
      />
      <img src={noCanvasImg} alt="" />
    </div>
  );
};

export default NoCanvas;
