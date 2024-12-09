import { Grid, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React from "react";
import CounterWidget from "../../../../../components/Counter/CounterWidget";
import styles from "../../../../../components/Widget/widget-jss";
import AttachMoney from "@material-ui/icons/AttachMoney";
import { useSelector } from "react-redux";
const DivisionStatistics = (props) => {
  const { classes } = props;
  const getPoolDivision = useSelector((state) =>
    state.getIn(["getPoolDivision"])
  );
  return (
    <div className={classes.rootCounterFull}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <CounterWidget
            color={"linear-gradient(45deg, rgb(236, 64, 122), #ef9fba)"}
            start={0}
            end={
              getPoolDivision.data &&
              getPoolDivision?.data?.data?.eloungeWalletAmount
            }
            duration={3}
            title="Elounge Wallet Amount"
            // beforeCounter={
            //   <Button
            //     // onClick={toggleModal}
            //     variant="outlined"
            //     style={{ color: "#fff", borderColor: "#fff" }}
            //     size="small"
            //   >
            //     Withdraw Amount
            //   </Button>
            // }
          >
            <AttachMoney className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
      </Grid>
    </div>
  );
};

DivisionStatistics.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DivisionStatistics);
