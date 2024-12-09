import { useNavigate } from "react-router-dom";
import { rightArrowIcon } from "../../../../../assets";
import { pitchDeckNoContent } from "../../../../../assets/pitchDeckAssets";
import ButtonWithSvg from "../../../../../components/button/ButtonWithSvg";

interface Props {}

const NoContent = (props: Props) => {
  const navigate = useNavigate();
  return (
    <div className="mt-5 h-full bg-[#003951] bg-opacity-[3%] rounded-xl flex flex-col items-center justify-center pt-10 gap-5">
      <p className="text-paraLight font-medium paragraph text-center">
        It looks like you haven’t started yet. Let’s get your business ideas
        polished and ready to impress.
      </p>
      <ButtonWithSvg
        title={"Generate Pitch Deck"}
        icon={rightArrowIcon}
        type="primary"
        sm
        bold
        onClick={() => navigate("/pitch-questionnaire")}
      />
      <img src={pitchDeckNoContent} alt="" />
    </div>
  );
};

export default NoContent;
