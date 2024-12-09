import React, { useEffect } from "react";
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
import { getSalesOrderAndCommissonAction } from "../../redux/modules/Dashboard/action";
import { useDispatch, useSelector } from "react-redux";

function CounterIconWidget(props) {
  const { classes, loungeId } = props;

  const dispatch = useDispatch();

  const getSalesOrderAndCommisson = useSelector((state) =>
    state.getIn(["getSalesOrderAndCommisson"])
  );

  useEffect(() => {
    if (loungeId) {
      getSalesOrderAndCommissonAction(dispatch, loungeId);
    }
  }, [loungeId]);

  return (
    <div className={classes.rootCounterFull}>
      <Grid container spacing={2}>
        <Grid item xs={6} md={4}>
          <CounterWidget
            color={colorfull[0]}
            start={0}
            end={getSalesOrderAndCommisson?.data?.data?.saleOrderCount || 0}
            duration={3}
            title="Sale Orders"
          >
            <SupervisorAccount className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={6} md={4}>
          <CounterWidget
            color={colorfull[1]}
            start={0}
            end={
              getSalesOrderAndCommisson?.data?.data?.salesComissionAmount || 0
            }
            duration={3}
            title="Sales Commission"
          >
            <AttachMoney className={classes.counterIcon} />
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
