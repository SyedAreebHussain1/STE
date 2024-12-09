import React from "react";
import UserTable from "./helpers/UserTable";
import { PageContainer } from "../../../utils/helpers/PageContainer/PageContainer";
import { PageHeader } from "../../../utils/helpers/PageHeader/PageHeader";

const User = () => {
  return (
    <PageContainer>
      <PageHeader title="All Users" subTitle="Manage all users" />
      <UserTable />
    </PageContainer>
  );
};

export default User;
