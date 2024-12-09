import { Button, Grid, withStyles } from "@material-ui/core";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import CounterWidget from "../../../../components/Counter/CounterWidget";
import styles from "../../../../components/Widget/widget-jss";
import AttachMoney from "@material-ui/icons/AttachMoney";

import WithdrawAmountWalletModal from "./WithdrawAmountWalletModal";
import { useDispatch, useSelector } from "react-redux";
import SuccessModal from "../../../../components/SuccessModal/SuccessModal";
import { getWalletBalanceNotForSaleUserAction } from "../../../../redux/modules/WalletNotForSaleUser/actions";

const WalletStatistics = (props) => {
  const { classes } = props;
  const [open, setOpen] = React.useState(false);
  const [successModalVisible, setSuccessModal] = useState(false);
  const dispatch = useDispatch();
  const walletBalance = useSelector((state) =>
    state.getIn(["getWalletBalanceNotForSaleUser"])
  );

  function toggleModal() {
    setOpen((prev) => !prev);
  }
  function toggleSuccessModal() {
    setSuccessModal((prev) => !prev);
  }
  const withdrawRequest = useSelector((state) =>
    state.getIn(["addWithdrawRequestNotForSaleUser"])
  );

  useEffect(() => {
    getWalletBalanceNotForSaleUserAction(dispatch);
  }, [withdrawRequest]);

  return (
    <div className={classes.rootCounterFull}>
      {SuccessModal && (
        <SuccessModal
          visible={successModalVisible}
          close={toggleSuccessModal}
        />
      )}
      {open && (
        <WithdrawAmountWalletModal
          open={open}
          close={toggleModal}
          toggleSuccessModal={toggleSuccessModal}
        />
      )}
      <Grid container spacing={2}>
        <Grid item xs={12} md={4}>
          <CounterWidget
            color={"linear-gradient(45deg, rgb(236, 64, 122), #ef9fba)"}
            start={0}
            end={
              walletBalance.data && walletBalance?.data?.data?.Result?.amount
            }
            duration={3}
            title="Wallet Balance"
            beforeCounter={
              <Button
                onClick={toggleModal}
                variant="outlined"
                style={{ color: "#fff", borderColor: "#fff" }}
                size="small"
              >
                Withdraw Amount
              </Button>
            }
          >
            <AttachMoney className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
        <Grid item xs={12} md={4}>
          <CounterWidget
            color={
              "linear-gradient(45deg, rgb(156, 39, 176), rgb(156 39 176 / 34%))"
            }
            start={0}
            end={
              walletBalance.data &&
              walletBalance?.data?.data?.withdrawTotalAmount?.withdrawAmount
            }
            duration={3}
            title="Withdraw Amount"
          >
            <AttachMoney className={classes.counterIcon} />
          </CounterWidget>
        </Grid>
      </Grid>
    </div>
  );
};

WalletStatistics.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(WalletStatistics);
