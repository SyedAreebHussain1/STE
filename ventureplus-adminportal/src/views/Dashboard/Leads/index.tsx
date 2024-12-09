import React from "react";
import { PageContainer } from "../../../utils/helpers/PageContainer/PageContainer";
import { PageHeader } from "../../../utils/helpers/PageHeader/PageHeader";
import LeadsTable from "./helpers/LeadsTable";

const Chatper = () => {
  return (
    <React.Fragment>
      <PageContainer>
        <PageHeader title="Leads" subTitle="Manage all your leads" />
        <LeadsTable />
      </PageContainer>
    </React.Fragment>
  );
};

export default Chatper;
