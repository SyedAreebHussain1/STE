import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { PapperBlock } from "dan-components";
// import WalletStatistics from "./helpers/WalletStatistics";
// import WalletTable from "./helpers/WalletTable";
import { Paper } from "@material-ui/core";
import DivisionTable from "./helpers/DivisionTable";
import DivisionStatistics from "./helpers/DivisionStatistics";
const Division = () => {
  const title = "Division";
  const description = "All Division";
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

      <Paper elevation={0} style={{ padding: 24 }}>
        <DivisionStatistics />
      </Paper>
      <br />
      <PapperBlock
        title="Division"
        desc="All Division"
        customIcon={
          <img src={require("../../../../api/icons/walleticon.png")} />
        }
      >
        <DivisionTable />
      </PapperBlock>
    </div>
  );
};

export default Division;
