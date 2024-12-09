import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { PapperBlock } from "dan-components";
import VisitTable from "./helpers/VisitTable";
import Button from "@material-ui/core/Button";
import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
import FreelancerVisitTable from "./helpers/FreelancerVisitTable";
import { Tab, Tabs, Typography } from "@material-ui/core";
import PropTypes from "prop-types";
import AddVisitModal from "./helpers/AddVisitModal";

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
const Visit = () => {
  const title = "Visit";
  const description = "Visit";
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState(0);
  const handleChangeOne = (event, val) => {
    setValue(val);
  };
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
        title="Visit"
        desc="All Visit"
        button={
          <Button
            color="primary"
            style={{ border: "1px solid" }}
            onClick={toggleModal}
          >
            <AddCircleOutlineIcon style={{ marginRight: 6 }} />
            Add New Visit
          </Button>
        }
      >
        {visible && <AddVisitModal open={visible} close={toggleModal} />}

        <Tabs
          value={value}
          onChange={handleChangeOne}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
        >
          <Tab label="Freelancer" />
          <Tab label="Agency" />
        </Tabs>
        {value === 0 && (
          <TabContainer>
            <FreelancerVisitTable flVisit={true} />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <VisitTable flVisit={false} />
          </TabContainer>
        )}
      </PapperBlock>
    </div>
  );
};

export default Visit;
