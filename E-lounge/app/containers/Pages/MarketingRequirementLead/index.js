import React from "react";
import { Helmet } from "react-helmet";
import { PapperBlock } from "dan-components";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import MarketingRequirementLeadTable from "./helpers/MarketingRequirementLeadTable";

function TabContainer(props) {
  const { children } = props;
  return (
    <Typography component="div" style={{ padding: 8 * 3 }}>
      {children}
    </Typography>
  );
}
TabContainer.propTypes = {
  children: PropTypes.node.isRequired,
};
const MarketingRequirementLead = () => {
  const title = "Requirement";
  const description = "Requirement";
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
        title="Marketing Requirement"
        desc="All Marketing Requirement"
      >
        <br />
        <MarketingRequirementLeadTable />
      </PapperBlock>
    </div>
  );
};

export default MarketingRequirementLead;
