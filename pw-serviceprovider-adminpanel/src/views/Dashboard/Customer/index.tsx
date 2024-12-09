import React from "react";
import { PageContainer } from "../../../utils/helpers/PageContainer/PageContainer";
import { PageHeader } from "../../../utils/helpers/PageHeader/PageHeader";
import CustomerTable from "./helpers/CustomerTable";

const Customer = () => {
  return (
    <React.Fragment>
      <PageContainer>
        <PageHeader title="Customer" subTitle="All Customers" />
        <CustomerTable />
      </PageContainer>
    </React.Fragment>
  );
};

export default Customer;
