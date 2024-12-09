import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { PapperBlock } from "dan-components";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import { Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import AddMarketingRequirement from "./helpers/AddMarketingRequirement";
import MarketingRequirementTable from "./helpers/MarketingRequirementTable";

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
const MarketingRequirement = () => {
  const title = "Requirement";
  const description = "Requirement";
  const [visible, setVisible] = useState(false);
  function toggleModal() {
    setVisible((prev) => !prev);
  }
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
        button={
          <Button
            color="primary"
            style={{ border: "1px solid" }}
            onClick={toggleModal}
          >
            <AddCircleOutlineIcon style={{ marginRight: 6 }} />
            Add New Marketing Requirement
          </Button>
        }
      >
        {visible && (
          <AddMarketingRequirement open={visible} close={toggleModal} />
        )}
        <br />
        <MarketingRequirementTable />
      </PapperBlock>
    </div>
  );
};

export default MarketingRequirement;
