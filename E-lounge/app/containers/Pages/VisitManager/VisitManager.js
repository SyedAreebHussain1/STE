import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { PapperBlock } from "dan-components";
import {
  Button,
  Paper,
  Typography,
  makeStyles,
  Hidden,
  Tab,
  Tabs,
} from "@material-ui/core";
import PropTypes from "prop-types";

import VisitManagerTable from "./helpers/VisitManagerTable";
import SelectFieldCustom from "../../../utils/components/SelectFieldCustom";
import styles from "../../../components/PapperBlock/papperStyle-jss";
import { MuiPickersUtilsProvider, DatePicker } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";
import { useDispatch, useSelector } from "react-redux";
import { getAssignEloungeSaleUserApi } from "../../../redux/modules/VisitManager/action";
import { CLEAR_GET_ASSIGN_ELOUNGE_SALE_USER } from "../../../redux/modules/VisitManager/contants";
import AgencyVisitTable from "./helpers/AgencyVisitTable";
import {
  getAllAssignSaleUserByLeadIdForEloungeUsersApi,
  getLeadListForDropDownApi,
} from "../../../redux/modules/Tracking/action";
import { CLEAR_GET_LEAD_LIST_FOR_DROP_DOWN } from "../../../redux/modules/Tracking/constants";
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
const VisitManager = () => {
  const [selectedDate, handleDateChange] = React.useState(null);
  const title = "Visit";
  const description = "All Visit";
  const papperBlockStyles = makeStyles(styles);
  const dispatch = useDispatch();
  const [idSearch, setIdSearch] = React.useState(null);
  const [openSearch, setOpenSearch] = React.useState(false);
  const [salelounges, setSaleLounges] = useState([]);
  const classes = papperBlockStyles();
  const date = new Date(selectedDate);
  const [renderAgain, setRenderAgain] = React.useState(false);

  const [leadSearch, setLeadSearch] = React.useState(null);
  const [saleLoungesForLead, setSaleLoungesForLead] = useState([]);
  const [openSearchLead, setOpenSearchLead] = React.useState(false);

  const getLeadListForDropDown = useSelector((state) =>
    state.getIn(["getLeadListForDropDown"])
  );
  const getAllAssignSaleUserByLeadIdForEloungeUsers = useSelector((state) =>
    state.getIn(["getAllAssignSaleUserByLeadIdForEloungeUsers"])
  );
  const getAssignEloungeSaleUser = useSelector((state) =>
    state.getIn(["getAssignEloungeSaleUser"])
  );
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
  const [value, setValue] = useState(0);
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
  const handleCloseLead = () => {
    setOpenSearchLead(false);
  };
  const handleChangeLead = (event) => {
    if (event.target.value) {
      setLeadSearch(event.target.value);
    }
  };
  const handleOpenLead = () => {
    setOpenSearchLead(true);
  };
  function handleResetFilter() {
    dispatch({ type: CLEAR_GET_LEAD_LIST_FOR_DROP_DOWN });
    dispatch({ type: CLEAR_GET_ASSIGN_ELOUNGE_SALE_USER });
    dispatch({ type: CLEAR_GET_LEAD_LIST_FOR_DROP_DOWN });
    dispatch({ type: CLEAR_GET_ASSIGN_ELOUNGE_SALE_USER });
    setLeadSearch(null);
    handleClose();
    handleCloseLead();
    setIdSearch(null);
    setSaleLoungesForLead([]);
    setSaleLounges([]);
    handleDateChange(null);
    setRenderAgain(true);
    getLeadListForDropDownApi(dispatch);
    getAssignEloungeSaleUserApi(dispatch, pageLimit);
  }
  useEffect(() => {
    if (leadSearch) {
      getAllAssignSaleUserByLeadIdForEloungeUsersApi(dispatch, leadSearch);
    }
  }, [leadSearch]);
  useEffect(() => {
    if (getAllAssignSaleUserByLeadIdForEloungeUsers.data) {
      setSaleLounges([]);
      setSaleLounges((prev) => [
        ...prev,
        ...getAllAssignSaleUserByLeadIdForEloungeUsers.data.data.map(
          (item) => ({
            name: item?.eloungeUser.fullName,
            value: item?.eloungeUser.fullName,
          })
        ),
      ]);
    }
  }, [getAllAssignSaleUserByLeadIdForEloungeUsers?.data]);
  useEffect(() => {
    if (getAssignEloungeSaleUser?.data) {
      setSaleLounges((prev) => [
        ...prev,
        ...getAssignEloungeSaleUser.data.data.items.map((item) => ({
          name: item?.eloungeUser?.fullName,
          value: item?.eloungeUser?.fullName,
        })),
      ]);
    }
  }, [getAssignEloungeSaleUser?.data]);
  useEffect(() => {
    if (getLeadListForDropDown?.data) {
      setSaleLoungesForLead((prev) => [
        ...prev,
        ...getLeadListForDropDown?.data?.data?.map((item) => ({
          name: item?.eloungeUser?.fullName,
          value: item?.eLoungUserId,
        })),
      ]);
    }
  }, [getLeadListForDropDown?.data]);
  useEffect(() => {
    getAssignEloungeSaleUserApi(dispatch, pageLimit);
  }, [dispatch, pageLimit]);
  useEffect(() => {
    dispatch({ type: CLEAR_GET_ASSIGN_ELOUNGE_SALE_USER });
    setSaleLounges([]);
    return () => {
      dispatch({ type: CLEAR_GET_ASSIGN_ELOUNGE_SALE_USER });
    };
  }, []);
  useEffect(() => {
    getLeadListForDropDownApi(dispatch);
  }, [dispatch]);
  useEffect(() => {
    dispatch({ type: CLEAR_GET_LEAD_LIST_FOR_DROP_DOWN });
    setSaleLoungesForLead([]);
    return () => {
      dispatch({ type: CLEAR_GET_LEAD_LIST_FOR_DROP_DOWN });
    };
  }, []);
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
              width: "70%",
              alignItems: "end",
              justifyContent: "end",
              gap: "10px",
            }}
          >
            <div
              style={{ width: "70%", display: "flex", alignItems: "center" }}
            >
              <SelectFieldCustom
                label={"Select Lead"}
                name={"Select"}
                onChange={handleChangeLead}
                value={leadSearch}
                options={saleLoungesForLead}
                setPageLimit={setPageLimit}
                loading={getLeadListForDropDown?.loading}
                open={openSearchLead}
                onClose={handleCloseLead}
                onOpen={handleOpenLead}
              />
            </div>
            <div
              style={{ width: "70%", display: "flex", alignItems: "center" }}
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
              <div style={{ marginTop: "15px", width: "15%" }}>
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
            <VisitManagerTable
              idSearch={idSearch}
              dateValue={selectedDate}
              flVisit={true}
              renderAgain={renderAgain}
              setRenderAgain={setRenderAgain}
            />
          </TabContainer>
        )}
        {value === 1 && (
          <TabContainer>
            <AgencyVisitTable
              idSearch={idSearch}
              dateValue={selectedDate}
              flVisit={false}
              renderAgain={renderAgain}
              setRenderAgain={setRenderAgain}
            />
          </TabContainer>
        )}
      </PapperBlock>
    </div>
  );
};

export default VisitManager;
