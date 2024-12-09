import React, { useState } from "react";
import { Helmet } from "react-helmet";

import { PapperBlock } from "dan-components";
import LoungeTable from "./helper/LoungeTable";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import PropTypes from "prop-types";
import Hidden from "@material-ui/core/Hidden";
import Call from "@material-ui/icons/Call";
import AccessTime from "@material-ui/icons/AccessTime";
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
function Lounge() {
  const title = "Lounge";
  const description = "Lounge Tabs";
  const [value, setValue] = useState(0);

  const handleChange = (event, val) => {
    setValue(val);
  };

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
      <PapperBlock
        title="Lounge"
        desc="Lounge Tabs"
        customIcon={<img src={require("../../../api/icons/0.6.png")} />}
      >
        <AppBar position="static" color="default">
          <Hidden mdUp>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab />
              <Tab />
            </Tabs>
          </Hidden>
          <Hidden smDown>
            <Tabs
              value={value}
              onChange={handleChange}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
            >
              <Tab label="Lounges Details" />
              <Tab label="Lounges Request" />
              <Tab label="Assigned Lounges" />
            </Tabs>
          </Hidden>
        </AppBar>
        {value === 0 && (
          <TabContainer>
            <LoungeTable />
          </TabContainer>
        )}
        {/* {value === 1 && (
          <TabContainer>
            <Bookedsessions />
          </TabContainer>
        )} */}
      </PapperBlock>
    </div>
  );
}

export default Lounge;
