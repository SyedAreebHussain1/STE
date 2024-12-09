import { useNavigate } from "react-router-dom";
import { circularPlusIcon } from "../../../assets";
import ButtonWithSvg from "../../../components/button/ButtonWithSvg";
import StaffCard from "./StaffCard";
import CardSkeleton from "../../../components/skeletons/CardSkeleton";
import NoContent from "./NoContent";

interface StaffSectionI {
  staffing: StaffCardT[];
}

export type StaffCardT = {
  id: number;
  name: string;
  businessPlanId: number;
  noOfStaff: any;
  avgSalary: any;
  createdAt: string;
  updatedAt: string;
  deletedAt: any;
  createdBy: number;
  updatedBy: any;
};

const StaffSection = ({ staffing }: StaffSectionI) => {
  const navigate = useNavigate();
  return (
    <div className="mb-4 w-full flex flex-col gap-4">
      <div className="flex justify-between items-center w-full">
        <h1 className="heading-s font-semibold">Staffing</h1>
        <ButtonWithSvg
          title={"Add Staff"}
          icon={circularPlusIcon}
          sm
          type="primary"
          onClick={() => navigate("/business-plan-setup/add-staff")}
        />
      </div>
      {staffing ? (
        <div className="flex flex-wrap gap-4 overflow-x-auto custom-scrollbar">
          {staffing?.map((st) => (
            <StaffCard key={st?.id} staffInfo={st} />
          ))}
        </div>
      ) : (
        <CardSkeleton />
      )}

      {staffing?.length === 0 && <NoContent />}
    </div>
  );
};

export default StaffSection;
