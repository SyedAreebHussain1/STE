import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import SubscribersTable from "./helpers/SubscribersTable";
import SelectFieldCustom from "../../../../utils/components/SelectFieldCustom";
import { Paper, Typography, makeStyles } from "@material-ui/core";
import classNames from "classnames";
import styles from "../../../../components/PapperBlock/papperStyle-jss";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { useForm } from "react-hook-form";
import { CLEAR_GET_ASSIGN_ELOUNGE_SALE_USER } from "../../../../redux/modules/VisitManager/contants";
import { getAssignEloungeSaleUserApi } from "../../../../redux/modules/VisitManager/action";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllAssignSaleUserByLeadIdForEloungeUsersApi,
  getLeadListForDropDownApi,
} from "../../../../redux/modules/Tracking/action";
import { CLEAR_GET_LEAD_LIST_FOR_DROP_DOWN } from "../../../../redux/modules/Tracking/constants";
const SubscribersTracking = () => {
  const title = "Subscribers";
  const description = "Subscribers";
  const [selectedDate, handleDateChange] = React.useState(null);
  const papperBlockStyles = makeStyles(styles);
  const [renderAgain, setRenderAgain] = React.useState(false);
  const dispatch = useDispatch();
  const date = new Date(selectedDate);
  const [leadSearch, setLeadSearch] = React.useState(null);
  const [saleLoungesForLead, setSaleLoungesForLead] = useState([]);
  const [idSearch, setIdSearch] = React.useState(null);
  const [salelounges, setSaleLounges] = useState([]);
  const getAssignEloungeSaleUser = useSelector((state) =>
    state.getIn(["getAssignEloungeSaleUser"])
  );
  const classes = papperBlockStyles();
  const [openSearch, setOpenSearch] = React.useState(false);
  const [openSearchLead, setOpenSearchLead] = React.useState(false);

  const getLeadListForDropDown = useSelector((state) =>
    state.getIn(["getLeadListForDropDown"])
  );
  const getAllAssignSaleUserByLeadIdForEloungeUsers = useSelector((state) =>
    state.getIn(["getAllAssignSaleUserByLeadIdForEloungeUsers"])
  );
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10,
  });
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
      <div>
        <Paper className={classNames(classes.root)} elevation={0}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div className={classes.descBlock}>
              <span className={classes.iconTitle}>
                {/* <img src={require("../../../api/icons/l3.png")} /> */}
              </span>
              <div className={classes.titleText}>
                <Typography
                  variant="h6"
                  component="h2"
                  className={classes.title}
                >
                  Subscribers
                </Typography>
                <Typography component="p" className={classes.description}>
                  All Subscribers
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "70%",
                justifyContent: "space-between",
                gap: "10px",
                alignItems: "center",
              }}
            >
              <div
                style={{ width: "90%", display: "flex", alignItems: "center" }}
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
                style={{ width: "90%", display: "flex", alignItems: "center" }}
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
          </div>
          <br />
          <section className={classNames(classes.content, classes.whiteBg)}>
            <SubscribersTable
              fullName={idSearch}
              dateValue={selectedDate}
              renderAgain={renderAgain}
              setRenderAgain={setRenderAgain}
            />
          </section>
        </Paper>
      </div>
    </div>
  );
};

export default SubscribersTracking;
