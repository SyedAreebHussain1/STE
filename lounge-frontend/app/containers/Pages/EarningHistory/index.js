import React from "react";
import { Helmet } from "react-helmet";

import { PapperBlock } from "dan-components";
import CurrentSubscriberTable from "./helper/EarningHistoryTable";

function EarningHistory() {
  const title = "Earning history";
  const description = "All Earnings";
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
      <PapperBlock title="Earning history" desc="All earnings" customIcon={<img src={require("../../../api/icons/0.4.png")} />}>
        <CurrentSubscriberTable />
      </PapperBlock>
    </div>
  );
}

export default EarningHistory;
