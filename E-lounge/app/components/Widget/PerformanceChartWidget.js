import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import classNames from "classnames";
import Dvr from "@material-ui/icons/Dvr";
import CheckCircle from "@material-ui/icons/CheckCircle";
import Healing from "@material-ui/icons/Healing";
import FilterCenterFocus from "@material-ui/icons/FilterCenterFocus";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import LinearProgress from "@material-ui/core/LinearProgress";
import LocalActivity from "@material-ui/icons/LocalActivity";
import Typography from "@material-ui/core/Typography";
import "dan-styles/vendors/rechart/styles.css";
import basic from "../../api/icons/basicDiamond(1).png";
import starter from "../../api/icons/starterDiamond(1).png";
import gold from "../../api/icons/goldDiamond(1).png";
import silver from "../../api/icons/silverDiamond(1).png";
import {
  ComposedChart,
  Line,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { dataPerformance } from "dan-api/chart/chartData";
import colorfull from "dan-api/palette/colorfull";
import styles from "./widget-jss";
import PapperBlock from "../PapperBlock/PapperBlock";
import PieCustomShape from "../../containers/Charts/demos/PieCustomShape";
import LineSimple from "../../containers/Charts/demos/LineSimple";
import { useDispatch, useSelector } from "react-redux";
import {
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
} from "@material-ui/core";
import CounterWidget from "../Counter/CounterWidget";
import CountUp from "react-countup";
import moment from "moment";
import { getSaleOrderGraphDataAction } from "../../redux/modules/Dashboard/action";

const color = {
  main: colorfull[2],
  secondary: colorfull[3],
  third: colorfull[0],
  fourth: colorfull[1],
};

function PerformanceChartWidget(props) {
  const { classes, data, loungeId } = props;
  const [selectedMonth, setSelectedMonth] = useState(moment().format("MMMM"));
  const dispatch = useDispatch();
  const getSaleOrderGraphData = useSelector((state) =>
    state.getIn(["getSaleOrderGraphData"])
  );
  useEffect(() => {
    if (loungeId && selectedMonth) {
      getSaleOrderGraphDataAction(dispatch, selectedMonth, loungeId);
    }
  }, [loungeId, selectedMonth]);
  return (
    <div style={{ position: "relative" }}>
      {getSaleOrderGraphData?.loading && (
        <div
          style={{
            width: "100%",
            height: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: 99,
            position: "absolute",
            backgroundColor: "#ffffff69",
          }}
        >
          <CircularProgress />
        </div>
      )}

      <PapperBlock
        overflowX
        whiteBg
        noMargin
        title="PW Inventory"
        icon="ion-ios-analytics-outline"
        desc={"Sales History"}
      >
        <Grid container style={{ marginBottom: 20 }}>
          <Grid item sm={12} md={3}>
            <FormControl fullWidth>
              <InputLabel id="demo-simple-select-label">
                Select Month
              </InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                label="Select Lounge"
                onChange={(e) => setSelectedMonth(e.target.value)}
                value={selectedMonth}
                MenuProps={{
                  anchorOrigin: {
                    vertical: 'bottom',
                    horizontal: 'left',
                  },
                  transformOrigin: {
                    vertical: 'top',
                    horizontal: 'left',
                  },
                  getContentAnchorEl: null,
                }}
              >
                {[
                  "January",
                  "February",
                  "March",
                  "April",
                  "May",
                  "June",
                  "July",
                  "August",
                  "September",
                  "October",
                  "November",
                  "December",
                ].map((item) => {
                  return (
                    <MenuItem key={item} value={item}>
                      {item}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </Grid>
        </Grid>

        <LineSimple />
      </PapperBlock>
    </div>
  );
}

PerformanceChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PerformanceChartWidget);
