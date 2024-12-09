import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { PapperBlock } from "dan-components";
// import VisitTable from "./helpers/VisitTable";
// import Button from "@material-ui/core/Button";
// import AddCircleOutlineIcon from "@material-ui/icons/AddCircleOutline";
// import { Tab } from "@material-ui/core";
// import Tabs from "../../UiElements/Tabs";
import PropTypes from "prop-types";
import {
  Button,
  Paper,
  Typography,
  makeStyles,
  Hidden,
} from "@material-ui/core";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Box from "@material-ui/core/Box";
import VisitTableForAgent from "./helpers/VisitTableForAgent";
import VisitTableForFreelancer from "./helpers/VisitTableForFreelancer";
import { getAssignEloungeSaleUserApi } from "../../../redux/modules/VisitManager/action";
import { useDispatch, useSelector } from "react-redux";
import styles from "../../../components/PapperBlock/papperStyle-jss";
import SelectFieldCustom from "../../../utils/components/SelectFieldCustom";
import DateFnsUtils from "@date-io/date-fns";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import { CLEAR_GET_ASSIGN_ELOUNGE_SALE_USER } from "../../../redux/modules/VisitManager/contants";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}
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
TabPanel.propTypes = {
  children: PropTypes.node.isRequired,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};
const LeadVisit = () => {
  const [selectedDate, handleDateChange] = React.useState(null);
  const title = "Visit";
  const description = "All Visit";
  const papperBlockStyles = makeStyles(styles);
  const dispatch = useDispatch();
  const [idSearch, setIdSearch] = React.useState(null);
  const [openSearch, setOpenSearch] = React.useState(false);
  const [renderAgain, setRenderAgain] = React.useState(false);
  const [salelounges, setSaleLounges] = useState([]);
  const classes = papperBlockStyles();
  const date = new Date(selectedDate);
  const getAssignEloungeSaleUser = useSelector((state) =>
    state.getIn(["getAssignEloungeSaleUser"])
  );
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const [value, setValue] = useState(0);
  const [titleAndDes, setTitleAndDes] = useState([
    {
      title: "freelancer",
      description: "Freelancer",
    },
    {
      title: "agency",
      description: "All Sign Ups",
    },
  ]);
  const handleChangeOne = (event, val) => {
    setValue(val);
    setIdSearch(null);
    handleDateChange(null);
  };

  const handleChange = (event) => {
    if (event.target.value) {
      setIdSearch(event.target.value);
    }
  };
  const handleClose = () => {
    setOpenSearch(false);
  };

  const handleOpen = () => {
    setOpenSearch(true);
  };

  useEffect(() => {
    if (getAssignEloungeSaleUser?.data) {
      setSaleLounges((prev) => [
        ...prev,
        ...getAssignEloungeSaleUser.data?.data?.items.map((item) => ({
          name: item?.eloungeUser?.fullName,
          value: item?.eloungeUser?.fullName,
        })),
      ]);
    }
  }, [getAssignEloungeSaleUser?.data]);
  useEffect(() => {
    getAssignEloungeSaleUserApi(dispatch, pageLimit, true);
  }, [dispatch, pageLimit]);
  useEffect(() => {
    dispatch({ type: CLEAR_GET_ASSIGN_ELOUNGE_SALE_USER });
    setSaleLounges([]);
    return () => {
      dispatch({ type: CLEAR_GET_ASSIGN_ELOUNGE_SALE_USER });
    };
  }, []);
  function handleResetFilter() {
    setSaleLounges([]);
    handleClose();
    setRenderAgain(true);
    setIdSearch(null);
    handleDateChange(null);
    dispatch({ type: CLEAR_GET_ASSIGN_ELOUNGE_SALE_USER });
    getAssignEloungeSaleUserApi(dispatch, pageLimit, true);
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
      <PapperBlock
        title={"Visit"}
        desc={"All Visit"}
        customIcon={<img src={require("../../../api/icons/0.3.png")} />}
      >
        <Hidden mdUp>
          <Tabs
            value={value}
            onChange={handleChangeOne}
            indicatorColor="primary"
            textColor="primary"
            variant="fullWidth"
          >
            <Tab />
            <Tab />
          </Tabs>
        </Hidden>

        <Hidden smDown>
          <div
            style={{
              display: "flex",
              width: "30%",
              justifyContent: "space-between",
              gap: "10px",
            }}
          >
            <div
              style={{ width: "100%", display: "flex", alignItems: "center" }}
            >
              <SelectFieldCustom
                label={"Select Sales"}
                name={"Select"}
                onChange={handleChange}
                value={idSearch}
                options={salelounges}
                setPageLimit={setPageLimit}
                loading={getAssignEloungeSaleUser?.loading}
                open={openSearch}
                onClose={handleClose}
                onOpen={handleOpen}
              />
            </div>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <DatePicker
                value={selectedDate}
                onChange={handleDateChange}
                label="Date"
              />
            </MuiPickersUtilsProvider>
            {idSearch || selectedDate ? (
              <div style={{ marginTop: "15px", width: "" }}>
                <button onClick={handleResetFilter}>Reset</button>
              </div>
            ) : (
              <></>
            )}
          </div>
          <br />
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
        </Hidden>
        {value === 0 && (
          <TabContainer>
            <VisitTableForFreelancer
              idSearch={idSearch}
              dateValue={selectedDate}
              renderAgain={renderAgain}
              setRenderAgain={setRenderAgain}
            />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <VisitTableForAgent
              idSearch={idSearch}
              dateValue={selectedDate}
              renderAgain={renderAgain}
              setRenderAgain={setRenderAgain}
            />
          </TabContainer>
        )}
      </PapperBlock>
    </div>
  );
};

export default LeadVisit;
