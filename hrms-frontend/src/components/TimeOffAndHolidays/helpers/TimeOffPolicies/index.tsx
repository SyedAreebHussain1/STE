import { useState } from "react";
import TimeOffPoliciesTable from "./helper/TimeOffPoliciesTable";
import AddTimeOffPolicyDrawer from "./helper/AddTimeOffPolicyDrawer";
import RoundedButton from "../../../../helpers/button/RoundedButton";

const TimeOffPolicies = () => {
  const [openCreate, setOpenCreate] = useState<boolean | undefined>(false);

  return (
    <>
      {openCreate && (
        <AddTimeOffPolicyDrawer open={openCreate} setOpen={setOpenCreate} />
      )}
      <div className="mb-4 mt-1">
        <RoundedButton
          onClick={() => setOpenCreate(true)}
          title={
            <span className="m-[6px] flex items-center">
              <span className="  text-[1rem] pr-2">+</span>
              Add New Policy
            </span>
          }
          className="dark:bg-dark-primary dark:text-white"
        />
      </div>
      <TimeOffPoliciesTable />
    </>
  );
};

export default TimeOffPolicies;
