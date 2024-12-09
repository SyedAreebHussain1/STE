import { Button } from "antd";
import EmployeeFilteration from "../EmployeeFilteration";
import SalaryDetailsTable from "./helpers/SalaryDetailsTable";
import useToggle from "../../../../hooks/useToggle";
import { AddNewSalaryDrawer } from "./helpers/AddNewSalaryDrawer";
import { useState } from "react";
import RoundedButton from "../../../../helpers/button/RoundedButton";

const SalaryDetails = () => {
  const [open, toggle] = useToggle();
  const [name, setName] = useState<any>("");
  const [empolyeeId, setEmpolyeeId] = useState<any>("");
  const [department, setDepartment] = useState<any>("");
  const [startDate, setStartDate] = useState<any>(null);
  const [endDate, setEndDate] = useState<any>(null);

  return (
    <>
      {open && <AddNewSalaryDrawer open={open} onClose={toggle} />}
      <div className="flex items-center gap-4">
        <RoundedButton
          onClick={toggle}
          title={
            <span className="flex items-center">
              <span className="text-[16px] pr-1">+</span>
              Add New Salary
            </span>
          }
          className="dark:bg-dark-primary dark:text-white"
          sm
        />
      </div>
      <EmployeeFilteration
        setName={setName}
        setEmpolyeeId={setEmpolyeeId}
        setDepartment={setDepartment}
        setStartDate={setStartDate}
        setEndDate={setEndDate}
        startDate={startDate}
        endDate={endDate}
        empolyeeId={empolyeeId}
        name={name}
      />
      <SalaryDetailsTable
        empolyeeId={empolyeeId}
        name={name}
        department={department}
        startDate={startDate}
        endDate={endDate}
      />
    </>
  );
};

export default SalaryDetails;
