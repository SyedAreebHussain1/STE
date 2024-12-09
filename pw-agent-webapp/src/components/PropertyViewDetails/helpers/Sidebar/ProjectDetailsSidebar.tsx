import { useEffect } from "react";
import VisibilityOnWebsite from "./helpers/VisibilityOnWebsite";
import GenerateImagesPdf from "./helpers/GenerateImagesPdf";
import AssignLeads from "./helpers/AssignLeads";
import { useDispatch, useSelector } from "react-redux";
import { getAssignLeadForInventoryApi } from "../../../../redux/api/InventoryManagement";

type Props = { data: any; id: any };

const ProjectDetailsSidebar = ({ data, id }: Props) => {
  const dispatch = useDispatch();

  const getAssignLead = useSelector(
    (state: any) => state.getAssignLeadForInventory
  );
  useEffect(() => {
    getAssignLeadForInventoryApi(id, dispatch);
  }, []);
  return (
    <div className="bg-white mt-3 rounded-xl p-6 flex flex-col gap-6">
      <VisibilityOnWebsite />
      {/* <GenerateImagesPdf /> */}
      <AssignLeads data={getAssignLead?.data} />
    </div>
  );
};

export default ProjectDetailsSidebar;
