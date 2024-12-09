import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { PapperBlock } from "dan-components";
import PwInventoryTable from "./helpers/PwInventoryTable";

const PwInventory = () => {
  const title = "PwInventory";
  const description = "PwInventory";
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
      <PapperBlock
        title="PwInventory"
        desc="All PwInventory"
      >
        <PwInventoryTable />
      </PapperBlock>
    </div>
  );
};

export default PwInventory;
