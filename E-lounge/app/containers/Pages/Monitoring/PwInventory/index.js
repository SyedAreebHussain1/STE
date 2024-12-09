import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import PwInventoryTable from "./helpers/PwInventoryTable";
import { Paper, Typography, makeStyles } from "@material-ui/core";
import classNames from "classnames";
import styles from "../../../../components/PapperBlock/papperStyle-jss";
import { useDispatch, useSelector } from "react-redux";
import SelectFieldCustom from "../../../../utils/components/SelectFieldCustom";
import { getAssignEloungeSaleUserApi } from "../../../../redux/modules/VisitManager/action";
import { CLEAR_GET_ASSIGN_ELOUNGE_SALE_USER } from "../../../../redux/modules/VisitManager/contants";

const LeadPwInventory = () => {
  const title = "PwInventory";
  const description = "PwInventory";
  const dispatch = useDispatch();
  const [selectedDate, handleDateChange] = React.useState(null);
  const [idSearch, setIdSearch] = React.useState(null);
  const [salelounges, setSaleLounges] = useState([]);
  const papperBlockStyles = makeStyles(styles);
  const [renderAgain, setRenderAgain] = React.useState(false);
  const date = new Date(selectedDate);
  const classes = papperBlockStyles();
  const getAssignEloungeSaleUser = useSelector((state) =>
    state.getIn(["getAssignEloungeSaleUser"])
  );
  const [openSearch, setOpenSearch] = React.useState(false);
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
  function handleResetFilter() {
    setSaleLounges([]);
    handleClose();
    setIdSearch(null);
    setRenderAgain(true);
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
                  Pw Inventory
                </Typography>
                <Typography component="p" className={classes.description}>
                  All Pw Inventory
                </Typography>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                width: "30%",
                justifyContent: "space-between",
                gap: "10px",
                alignItems: "center",
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
              {/* <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <DatePicker
                  value={selectedDate}
                  onChange={handleDateChange}
                  label="Select Date"
                />
              </MuiPickersUtilsProvider> */}
              {idSearch ? (
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
            <PwInventoryTable
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

export default LeadPwInventory;
