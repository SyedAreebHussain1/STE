import React from "react";
import { Helmet } from "react-helmet";
import { PapperBlock } from "dan-components";
import SignUpsTable from "./helpers/SignUpsTable";
import { Paper } from "@material-ui/core";
import SignUpStatistics from "./helpers/SignUpStatistics";

const SignUps = () => {
  const title = "SignUps";
  const description = "SignUps";
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
        <SignUpStatistics />
      </Paper>
      <br />
      <PapperBlock title="Sign Ups" desc="All Sign Ups">
        <SignUpsTable />
      </PapperBlock>
    </div>
  );
};

export default SignUps;
