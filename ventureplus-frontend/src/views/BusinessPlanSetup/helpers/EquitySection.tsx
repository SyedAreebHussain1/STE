import { useNavigate } from "react-router-dom";
import { circularPlusIcon } from "../../../assets";
import ButtonWithSvg from "../../../components/button/ButtonWithSvg";
import EquityCard from "./EquityCard";
import CardSkeleton from "../../../components/skeletons/CardSkeleton";
import NoContent from "./NoContent";

interface EquitySectionI {
  equity: EquityT[];
}

export type EquityT = {
  id: number;
  name: string;
  businessPlanId: number;
  share: any;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  createdBy: number;
  updatedBy: any;
};

const EquitySection = ({ equity }: EquitySectionI) => {
  const navigate = useNavigate();
  return (
    <div className="mb-4 w-full flex flex-col gap-4">
      <div className="flex justify-between items-center w-full">
        <h1 className="heading-s font-semibold">Equity</h1>
        <ButtonWithSvg
          title={"Add Equity"}
          icon={circularPlusIcon}
          sm
          type="primary"
          onClick={() => navigate("/business-plan-setup/add-equity")}
        />
      </div>
      {equity ? (
        <div className="flex flex-wrap gap-4 overflow-x-auto custom-scrollbar">
          {equity?.map((eq) => (
            <EquityCard key={eq?.id} equity={eq} />
          ))}
        </div>
      ) : (
        <CardSkeleton />
      )}

      {equity?.length === 0 && <NoContent />}
    </div>
  );
};

export default EquitySection;
