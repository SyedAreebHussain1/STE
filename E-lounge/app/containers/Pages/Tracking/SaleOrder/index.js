import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { PapperBlock } from "dan-components";
import SaleOrderTable from "./helpers/SaleOrderTable";

const SaleOrderTracking = () => {
  const title = "Sale Order";
  const description = "Sale Order";
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
      <PapperBlock title="Sale Order" desc="All Sale Order">
        <SaleOrderTable />
      </PapperBlock>
    </div>
  );
};

export default SaleOrderTracking;
