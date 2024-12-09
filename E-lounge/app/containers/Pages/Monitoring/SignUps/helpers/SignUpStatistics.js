import { Grid, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect } from "react";
import CounterWidget from "../../../../../components/Counter/CounterWidget";
import styles from "../../../../../components/Widget/widget-jss";

import { useDispatch, useSelector } from "react-redux";
import { getAllTagetAction } from "../../../../../redux/modules/EarningHistory/action";

const SignUpStatistics = (props) => {
  const { classes } = props;
  const dispatch = useDispatch();
  const getAllTaget = useSelector((state) => state.getIn(["getAllTaget"]));

  useEffect(() => {
    // getAllTagetAction(dispatch);
  }, []);

  return (
    <div className={classes.rootCounterFull}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <CounterWidget
            color={"linear-gradient(45deg, rgb(236, 64, 122), #ef9fba)"}
            start={0}
            end={
              1
              // getAllTaget?.data?.data?.achievedTarget &&
              // getAllTaget?.data?.data?.achievedTarget
            }
            duration={3}
            title="Achieve Target"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <CounterWidget
            color={
              "linear-gradient(45deg, rgb(156, 39, 176), rgb(156 39 176 / 34%))"
            }
            start={0}
            end={
              // getAllTaget?.data?.data?.currentTarget &&
              // getAllTaget?.data?.data?.currentTarget
              100
            }
            duration={3}
            title="Current Target"
          />
        </Grid>
      </Grid>
    </div>
  );
};

SignUpStatistics.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SignUpStatistics);
