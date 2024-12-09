import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import SubscribersTable from "./helpers/SubscribersTable";
import { Paper, TextField, Typography, makeStyles } from "@material-ui/core";
import classNames from "classnames";
import styles from "../../../../components/PapperBlock/papperStyle-jss";
import DateFnsUtils from "@date-io/date-fns";
import { DatePicker, MuiPickersUtilsProvider } from "@material-ui/pickers";
import { Controller, useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import SelectFieldCustom from "../../../../utils/components/SelectFieldCustom";
import { getAssignEloungeSaleUserApi } from "../../../../redux/modules/VisitManager/action";
import { CLEAR_GET_ASSIGN_ELOUNGE_SALE_USER } from "../../../../redux/modules/VisitManager/contants";

const LeadSubscribers = () => {
  const title = "Subscribers";
  const dispatch = useDispatch();
  const description = "Subscribers";
  const { control } = useForm();
  const [selectedDate, handleDateChange] = React.useState(null);
  const papperBlockStyles = makeStyles(styles);
  const date = new Date(selectedDate);
  const [idSearch, setIdSearch] = React.useState(null);
  const [salelounges, setSaleLounges] = useState([]);
  const [renderAgain, setRenderAgain] = React.useState(false);
  const classes = papperBlockStyles();
  const [openSearch, setOpenSearch] = React.useState(false);
  const getAssignEloungeSaleUser = useSelector((state) =>
    state.getIn(["getAssignEloungeSaleUser"])
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
  function handleResetFilter() {
    dispatch({ type: CLEAR_GET_ASSIGN_ELOUNGE_SALE_USER });
    handleClose();
    setIdSearch(null);
    handleDateChange(null);
    setSaleLounges([]);
    setRenderAgain(true);
    getAssignEloungeSaleUserApi(dispatch, pageLimit, true);
  }
  useEffect(() => {
    if (getAssignEloungeSaleUser?.data) {
      setSaleLounges((prev) => [
        ...prev,
        ...getAssignEloungeSaleUser?.data?.data?.items?.map((item) => ({
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
                <img src={require("../../../../api/icons/l3.png")} />
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
                width: "30%",
                justifyContent: "space-between",
                gap: "10px",
                alignItems: "end",
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
                  loadMore={false}
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

export default LeadSubscribers;
