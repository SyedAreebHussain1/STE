import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import brand from "dan-api/dummy/brand";
import { Helmet } from "react-helmet";
import { withStyles } from "@material-ui/core/styles";
import Hidden from "@material-ui/core/Hidden";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import Loading from "dan-components/Loading";
import {
  SliderWidget,
  CounterIconsWidget,
  PerformanceChartWidget,
  DateWidget,
  TaskWidget,
  WeatherWidget,
  ContactWidget,
  TimelineWidget,
  FilesWidget,
} from "dan-components";
import styles from "./dashboard-jss";
import { useDispatch, useSelector } from "react-redux";
import {
  getCountsAction,
  getEarningHistory,
} from "../../redux/modules/Dashboard/actions";
import SuspendModal from "../../components/Suspend/SuspendModal";
import { getFromStorage } from "../../utils/storage";
import MilestoneTimeline from "../Pages/Milestone/Milestone";
import PapperBlock from "../../components/PapperBlock/PapperBlock";

function PersonalDashboard(props) {
  const dispatch = useDispatch();
  const [pageLimit, setPageLimit] = useState({
    page: 1,
    limit: 10000,
  });
  const title = brand.name + " - Personal Dashboard";
  const description = brand.desc;
  const { classes } = props;

  const { data: Counts, loading: countsLoading } = useSelector((state) =>
    state.getIn(["soldpackageGraph"])
  );

  const { data: earningHistory, loading: earningLoading } = useSelector(
    (state) => state.getIn(["earningHistory"])
  );

  useEffect(() => {
    getCountsAction(dispatch);
    getEarningHistory(dispatch, pageLimit);
  }, []);
  return (
    <div>
      {getFromStorage("user").isSuspend !== undefined &&
        getFromStorage("user").isSuspend !== null &&
        getFromStorage("user").isSuspend && <SuspendModal classes={classes} />}

      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      {/* 1st Section */}
      {countsLoading ||
      earningLoading ||
      Counts === null ||
      earningHistory === null ? (
        <Loading />
      ) : (
        <>
          <Grid container spacing={3} className={classes.root}>
            <Grid item md={6} xs={12}>
              {/* <Loading /> */}
              <CounterIconsWidget data={Counts} />
            </Grid>
            <Grid item md={6} sm={12} xs={12}>
              <div className={classes.sliderWrap}>
                <SliderWidget />
              </div>
            </Grid>
          </Grid>
          <Divider className={classes.divider} />
          {/* <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12}>
              <PapperBlock
                whiteBg
                noMargin
                title="Goals & Achievements"
                icon="ion-ios-analytics-outline"
                desc=""
              >
                <MilestoneTimeline />
              </PapperBlock>
            </Grid>
          </Grid> */}
          {/* 2nd Section */}
          <Grid container spacing={2} className={classes.root}>
            <Grid item xs={12}>
              <PerformanceChartWidget data={Counts.data} />
            </Grid>
          </Grid>

          {/* 3rd Section */}
          <Grid container spacing={3} className={classes.root}>
            <Grid item md={6} xs={12}>
              <Divider className={classes.divider} />
              {/* <AdvTableDemo /> */}

              <ContactWidget />
              <Divider className={classes.divider} />
              {/* <TaskWidget /> */}
            </Grid>
            <Grid style={{ marginTop: "2%" }} item md={6} xs={12}>
              <DateWidget />
            </Grid>
          </Grid>
        </>
      )}
    </div>
  );
}

PersonalDashboard.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(PersonalDashboard);
