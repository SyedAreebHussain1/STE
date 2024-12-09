import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { PapperBlock } from "dan-components";
import WalletStatistics from "./helpers/WalletStatistics";
import WalletTable from "./helpers/WalletTable";
import { Paper } from "@material-ui/core";

const Wallet = () => {
  const title = "Wallet";
  const description = "Wallet";
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
        <WalletStatistics />
      </Paper>
      <br />
      <PapperBlock
        title="Wallet Requests"
        desc="All Wallet Requests"
        customIcon={<img src={require("../../../api/icons/walleticon.png")} />}
      >
        <WalletTable />
      </PapperBlock>
    </div>
  );
};

export default Wallet;
