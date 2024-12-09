import React from "react";
import { Helmet } from "react-helmet";
import { PapperBlock } from "dan-components";
import AgenciesTable from "./helper/AgenciesTable";

const AssignedAgencies = () => {
  const title = "Assigned Agencies";
  const description = "AssignedAgencies";
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <br />
      <PapperBlock title="Assigned Agencies" desc="All Assigned Agencies">
        <AgenciesTable />
      </PapperBlock>
    </div>
  );
};

export default AssignedAgencies;
