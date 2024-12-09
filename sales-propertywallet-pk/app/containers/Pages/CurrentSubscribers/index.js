import React from "react";
import { Helmet } from "react-helmet";

import { PapperBlock } from "dan-components";
import CurrentSubscriberTable from "./helper/CurrentSubscriberTable";

function CurrentSubscribers() {
  const title = "Current subsribers";
  const description = "Subscribers list";
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
      <PapperBlock title="Current subscribers" desc="All Current Subscribers" customIcon={<img src={require("../../../api/icons/0.3.png")} />}>
        <CurrentSubscriberTable />
      </PapperBlock>
    </div>
  );
}

export default CurrentSubscribers;
