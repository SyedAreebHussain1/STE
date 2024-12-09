import React from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import AccessTime from "@material-ui/icons/AccessTime";
import Call from "@material-ui/icons/Call";
import SupervisorAccount from "@material-ui/icons/SupervisorAccount";
import AttachMoney from "@material-ui/icons/AttachMoney";

import colorfull from "dan-api/palette/colorfull";
import CounterWidget from "../Counter/CounterWidget";
import styles from "./widget-jss";

function CounterIconWidget(props) {
  const { classes, data } = props;

  return (
    <div className={classes.rootCounterFull}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={6}>
          <CounterWidget
            color={colorfull[0]}
            start={0}
            end={
              data !== null && data.data.subscriberCount !== undefined
                ? data.data.subscriberCount
                : 0
            }
            duration={3}
            title="Subscribers"
          >
            <SupervisorAccount className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <CounterWidget
            color={colorfull[1]}
            start={0}
            end={
              data !== null && data.data.fWalletAmount
                ? data.data.fWalletAmount.amount
                : 0
            }
            duration={3}
            title="Available balance"
          >
            <AttachMoney className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <CounterWidget
            color={colorfull[2]}
            start={0}
            end={
              data !== null && data.data.meetSessionCount !== undefined
                ? data.data.meetSessionCount
                : 0
            }
            duration={3}
            title="Available meetings"
          >
            <AccessTime className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={6} md={6}>
          <CounterWidget
            color={colorfull[3]}
            start={0}
            end={
              data !== null && data.data.bookedSessionCount !== undefined
                ? data.data.bookedSessionCount
                : 0
            }
            duration={3}
            title="Booked meetings"
          >
            <Call className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
      </Grid>
    </div>
  );
}

CounterIconWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CounterIconWidget);
