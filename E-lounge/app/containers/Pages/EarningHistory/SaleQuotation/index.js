import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { PapperBlock } from "dan-components";
import SaleQuotationTable from "./helpers/SaleQuotationTable";

const SaleQuotation = () => {
  const title = "Sale Quotation";
  const description = "Sale Quotation";
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
        title="Sale Quotation"
        desc="All Sale Quotation"
      >
        <SaleQuotationTable />
      </PapperBlock>
    </div>
  );
};

export default SaleQuotation;
