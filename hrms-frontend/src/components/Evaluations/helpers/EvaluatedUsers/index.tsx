import React from "react";
import EvaluatedUsersTable from "./helpers/EvaluatedUsersTable";

const EvaluatedUsers = ({ forApiCalling }: any) => {
  return <EvaluatedUsersTable forApiCalling={forApiCalling} />;
};

export default EvaluatedUsers;
