import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { PapperBlock } from "dan-components";
import TokenTable from "./helpers/TokenTable";

const TokenTracking = () => {
  const title = "Token";
  const description = "Token";
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
      <PapperBlock title="Token" desc="All Token">
        <TokenTable />
      </PapperBlock>
    </div>
  );
};

export default TokenTracking;
