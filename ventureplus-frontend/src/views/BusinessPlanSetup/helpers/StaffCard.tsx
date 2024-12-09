import { useNavigate } from "react-router-dom";
import RoundedButton from "../../../components/button/RoundedButton";
import { StaffCardT } from "./StaffSection";
import { useState } from "react";
import { deleteStaffApi } from "../../../services/api/BusinessPlanSetup/Staff";
import { useDispatch, useSelector } from "react-redux";
import { getAllElementsOfPlanSetupApi } from "../../../services/api/BusinessPlanSetup";
import { RootState } from "../../../redux/store";

interface StaffCardI {
  staffInfo: StaffCardT;
}

const StaffCard = ({ staffInfo }: StaffCardI) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false);
  const currentSelectedBusinessPlan = useSelector(
    (state: RootState) => state.currentSelectedBusinessPlan
  );

  const handleDeleteStaff = (id: number) => {
    if (loading) return;
    setLoading(true);
    deleteStaffApi(dispatch, id, onDeleteProduct);
  };

  const onDeleteProduct = () => {
    getAllElementsOfPlanSetupApi(
      dispatch,
      currentSelectedBusinessPlan?.businessPlan?.id
    );
  };

  return (
    <div className="w-[350px] min-w-[350px] h-[140px] rounded-lg p-4 flex gap-2 flex-col bg-[white]  card-hover">
      <h1 className="body-s text-body font-bold">{staffInfo?.name}</h1>
      <div className="flex gap-2 items-center">
        <h1 className="body-xs text-body font-semibold">Members:</h1>
        <p className="body-xs text-primary font-semibold">
          {staffInfo?.noOfStaff} staff members
        </p>
      </div>
      <div className="flex gap-2 items-center">
        <h1 className="body-xs text-body font-semibold">Average salary:</h1>
        <p className="body-xs text-primary font-semibold">
          {staffInfo?.avgSalary} per year
        </p>
      </div>
      <div className="button-block">
        <RoundedButton
          title={"Edit"}
          type="grey"
          xs
          disabled={loading}
          onClick={() =>
            navigate(`/business-plan-setup/staff/${staffInfo?.id}`)
          }
        />
        <RoundedButton
          title={"Delete"}
          type="danger"
          xs
          onClick={() => handleDeleteStaff(staffInfo?.id)}
          loading={loading}
          className={`${loading ? "!cursor-not-allowed" : "!cursor-pointer"}`}
        />
      </div>
    </div>
  );
};

export default StaffCard;
