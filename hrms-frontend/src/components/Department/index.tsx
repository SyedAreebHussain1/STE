import React, { useState } from "react";
import { PageContainer } from "../../helpers/PageContainer/PageContainer";
import { PageHeader } from "../../helpers/PageHeader/PageHeader";
import DepartmentTable from "./helpers/DepartmentTable";
import useToggle from "../../hooks/useToggle";
import { Button } from "antd";
import AddDepartmentModal from "./helpers/AddDepartmentModal";
import RoundedButton from "../../helpers/button/RoundedButton";

const Department = () => {
  const [modalOpen, setModalOpen] = useState<boolean | number>(false);
  return (
    <React.Fragment>
      {modalOpen && (
        <AddDepartmentModal open={modalOpen} onClose={setModalOpen} />
      )}
      <PageContainer>
        <PageHeader
          title="Department"
          subTitle="All Department"
          className="dark:bg-dark-grayprimary dark:text-dark-secondary"
          extra={
            <RoundedButton
              onClick={() => setModalOpen(true)}
              title={
                <span className="flex items-center ">
                  <span className="text-[16px] pr-2">+</span>
                  Add New Department
                </span>
              }
              className="dark:bg-dark-primary dark:text-white"
            />
          }
        />
        <DepartmentTable />
      </PageContainer>
    </React.Fragment>
  );
};

export default Department;
