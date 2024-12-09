import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { PapperBlock } from "dan-components";
import SubscribersTable from "./helpers/SubscribersTable";

const Subscribers = () => {
  const title = "Subscribers";
  const description = "Subscribers";
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
        title="Subscribers"
        desc="All Subscribers"
      >
        <SubscribersTable />
      </PapperBlock>
    </div>
  );
};

export default Subscribers;
