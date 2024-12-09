import { rightArrowIcon } from "../../../../../assets";
import { noPlansImg } from "../../../../../assets/businessSettingsAssets";
import ButtonWithSvg from "../../../../../components/button/ButtonWithSvg";

type Props = {
  toggle: () => void;
};

const NoPlans = ({ toggle }: Props) => {
  return (
    <div className="h-full bg-[#003951] bg-opacity-[3%] rounded-xl flex flex-col items-center justify-center py-10 gap-5">
      <img src={noPlansImg} alt="" />
      <p className="text-paraLight font-medium paragraph text-center">
        It looks like you haven’t started yet. Let’s get your business ideas
        polished and ready to impress.
      </p>
      <ButtonWithSvg
        title={"Add New Plan"}
        icon={rightArrowIcon}
        type="primary"
        sm
        bold
        onClick={() => toggle()}
      />
    </div>
  );
};

export default NoPlans;
