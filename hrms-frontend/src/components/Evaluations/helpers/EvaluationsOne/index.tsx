import React from "react";
import RoundedButton from "../../../../helpers/button/RoundedButton";
import EvaluationsOneTable from "./helpers/EvaluationsOneTable";
import { CreateEvalutionDrawer } from "./helpers/CreateEvalutionDrawer";
import useToggle from "../../../../hooks/useToggle";
import CreateEvaluateUserDrawer from "./helpers/CreateEvaluateUserDrawer";

const EvaluationsOne = ({ forApiCalling }: any) => {
  const [open, toggle] = useToggle();
  const [openUser, toggleUser] = useToggle();
  return (
    <React.Fragment>
      {open && <CreateEvalutionDrawer open={open} onClose={toggle} />}
      {openUser && (
        <CreateEvaluateUserDrawer open={openUser} onClose={toggleUser} />
      )}
      <div className="flex items-center gap-4">
        <RoundedButton
          onClick={toggle}
          title={
            <span className="flex items-center">
              <span className="text-[16px] pr-1">+</span>
              Create Evaluation
            </span>
          }
          className="dark:bg-white dark:text-dark-primary  bg-light-primary text-white"
          sm
        />
        <RoundedButton
          onClick={toggleUser}
          title={
            <span className="flex items-center">
              <span className="text-[16px] pr-1">+</span>
              Evaluate User
            </span>
          }
          className="dark:bg-dark-primary dark:text-white"
          sm
        />
      </div>

      <EvaluationsOneTable forApiCalling={forApiCalling} />
    </React.Fragment>
  );
};

export default EvaluationsOne;
