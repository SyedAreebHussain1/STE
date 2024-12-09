import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { PapperBlock } from "dan-components";
import TransactionsTable from "./helpers/TransactionsTable";

const LeadTransactions = () => {
  const title = "Transactions";
  const description = "Transactions";
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
      <PapperBlock title="Transactions" desc="All Transactions">
        <TransactionsTable />
      </PapperBlock>
    </div>
  );
};

export default LeadTransactions;
