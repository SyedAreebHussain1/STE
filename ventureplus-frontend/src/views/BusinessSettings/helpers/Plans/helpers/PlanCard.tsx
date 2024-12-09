import { MdModeEditOutline } from "react-icons/md";
import { businessSettingPlanImage } from "../../../../../assets";

interface PlanCardI {
  plan: {
    id: number;
    title: string;
    description: string;
  };
  selectedPlanId: number | null;
  onSetSelectedPlan: (planId: number) => void;
  edit: () => void;
}

const PlanCard = ({
  plan,
  selectedPlanId,
  onSetSelectedPlan,
  edit,
}: PlanCardI) => {
  return (
    <div
      className={` rounded-lg overflow-hidden  flex  flex-col sm:w-[200px] w-full h-full cursor-pointer ${
        selectedPlanId === plan?.id && "border-primary bg-green-100"
      }`}
      onClick={() => onSetSelectedPlan(plan?.id)}
    >
      <div
        className="relative  flex items-center justify-center border-[#CDD4DF] border-[1px] sm:w-[200px] w-full sm:h-[170px] h-full rounded-lg"
        style={{
          backgroundImage:
            "radial-gradient(rgba(1, 106, 112, 0.3),rgba(122, 90, 248, 0.1))",
        }}
      >
        <img src={businessSettingPlanImage} />
        <button
          className="absolute top-2 right-2 w-[32px] h-[32px] rounded-full flex justify-center items-center bg-[#FFFFFF]"
          style={{ boxShadow: "0px 2px 6px 0px rgba(0, 42, 45, 0.16)" }}
          onClick={edit}
        >
          <MdModeEditOutline className="text-[18px] text-[#016A70]" />
        </button>
      </div>
      <div className="p-[8px] ">
        <h1 className="text-[#212838] font-medium text-[18px] leading-[24px] break-words ">
          {plan?.title}
        </h1>
        <p className="text-[12px] leading-[16px] font-medium text-[#4A5366] line-clamp-3 mt-[8px]">
          {plan?.description}
        </p>
      </div>
    </div>
  );
};
export default PlanCard;
