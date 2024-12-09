import React from "react";
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
import { useSelector } from "react-redux";
import { Paper } from "@material-ui/core";
import CounterWidget from "../Counter/CounterWidget";
import CountUp from "react-countup";

const color = {
  main: colorfull[2],
  secondary: colorfull[3],
  third: colorfull[0],
  fourth: colorfull[1],
};

function PerformanceChartWidget(props) {
  const { classes, data } = props;

  return (
    <>
      <PapperBlock
        whiteBg
        noMargin
        title="Sold Packages"
        icon="ion-ios-analytics-outline"
        desc=""
      >
        <Grid container spacing={2}>
          {data.graphCounts.map((item, i) => {
            return (
              <Grid item xs={12} md={2}>
                <Paper className={classes.root} elevation={2}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '27px 29px', height: 130 }}>
                    <div>
                      <Typography className={classes.counter} style={{ fontSize: '30px', fontWeight: 600, }}>
                        <CountUp
                          start={0}
                          end={item.counts}
                          duration={1}
                          useEasing
                        />
                      </Typography>
                      <Typography className={classes.title} variant="subtitle1" style={{ color: '#0000009e', fontSize: '14px', textTransform: 'uppercase' }}>
                        {item.title}
                      </Typography>
                    </div>
                    <div className={classes.customContent}>
                      <Avatar
                        style={{ backgroundColor: "transparent" }}
                        className={classes.counterIcon}
                      >
                        <img
                          src={
                            item.title.toLowerCase().includes("basic")
                              ? basic
                              : item.title.toLowerCase().includes("starter")
                              ? starter
                              : item.title.toLowerCase().includes("silver")
                              ? silver
                              : gold
                          }
                          style={{ width: "150px" }}
                        />
                      </Avatar>
                    </div>
                  </div>
                </Paper>
              </Grid>
            );
          })}
        </Grid>

        {/* <Grid container spacing={2}>
        <Grid item md={12} xs={12}>
          <LineSimple />
        </Grid>
      </Grid> */}
      </PapperBlock>
      <br />
      <PapperBlock
        overflowX
        whiteBg
        noMargin
        title="Earning history"
        icon="ion-ios-analytics-outline"
        desc={`Available balance PKR ${
          data !== null && data.fWalletAmount ? data.fWalletAmount.amount : 0
        }`}
      >
        <LineSimple />
      </PapperBlock>
    </>
  );
}

PerformanceChartWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PerformanceChartWidget);
