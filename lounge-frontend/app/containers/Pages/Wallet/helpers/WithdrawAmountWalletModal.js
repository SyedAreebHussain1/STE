import React, { useEffect, useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {
  CircularProgress,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  Select,
  Typography,
  withStyles,
} from "@material-ui/core";
import styles from "../../../../components/Forms/user-jss";
import {
  getBanksListAction,
  getUserPorfileApi,
  postWithdrawAmountAction,
} from "../../../../redux/modules/Wallet/actions";
import { useDispatch, useSelector } from "react-redux";
import { CLEAR_USER_PROFILE } from "../../../../redux/modules/Wallet/constants";
import { errorMessage } from "../../../../utils/message";

function WithdrawAmountWalletModal({ open, close, classes, toggleSuccessModal }) {
  const handleClose = () => {
    close();
  };

  const required = (value) => (value === null ? "Required" : undefined);

  const [state, setState] = useState({
    withdrawAmount: "",
    accountNo: "",
    accountTitle: "",
    cnic: "",
    phone: "",
    email: "",
    bank: "",
  });
  const dispatch = useDispatch();
  const banks = useSelector((state) => state.getIn(["banks"]));
  const userDetail = useSelector((state) => state.getIn(["userDetail"]));
  const withdrawRequest = useSelector((state) =>
    state.getIn(["withdrawRequest"])
  );
  function hasFalsyValue(obj) {
    for (const key in obj) {
      if (obj.hasOwnProperty(key) && !obj[key]) {
        return true;
      }
    }
    return false;
  }
  function onSuccess() {
    handleClose();
    toggleSuccessModal()
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (Number(state.withdrawAmount) < 3000) {
      errorMessage("Minimum withdraw amount is 3000 PKR");
      return;
    } else {
      let body = {
        amount: parseFloat(state.withdrawAmount),
        bankName: state.bank,
        accountNo: state.accountNo,
        accountTitleName: state.accountTitle,
        cnic: state.cnic,
      };
      postWithdrawAmountAction(body, dispatch, onSuccess);
    }
  }

  const onChange = (value, name) => {
    setState({
      ...state,

      [name]: value,
    });
  };

  useEffect(() => {
    getUserPorfileApi(dispatch);
    getBanksListAction(dispatch);

    return () => {
      dispatch({ type: CLEAR_USER_PROFILE });
    };
  }, []);
  useEffect(() => {
    if (userDetail.data) {
      setState((prev) => {
        return {
          ...prev,
          accountNo: userDetail.data.data.accountNumber,
          accountTitle: userDetail.data.data.accountTitle,
          cnic: userDetail.data.data.cnic,
          phone: userDetail.data.data.freeLancer.phone,
          email: userDetail.data.data.freeLancer.email,
          bank: userDetail.data.data.bankName,
        };
      });
    }
  }, [userDetail.data]);
  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
        fullWidth="500"
      >
        <form onSubmit={handleSubmit}>
          <DialogTitle id="form-dialog-title">WithDraw Amount</DialogTitle>
          <DialogContent>
            <FormControl className={classes.formControl} required>
              <TextField
                autoFocus
                validate={[required]}
                margin="dense"
                id="withdrawAmount"
                label="Withdraw Amount"
                fullWidth
                size="medium"
                required
                value={state.withdrawAmount}
                onChange={(e) => onChange(e.target.value, "withdrawAmount")}
                onKeyPress={(event) => {
                  if (!/[0-9,.]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">PKR</InputAdornment>
                  ),
                }}
                onPasteCapture={(e) => {
                  const pastedText = e.clipboardData.getData('text')
                  if (/[^0-9]/g.test(pastedText)) {
                    e.preventDefault()
                  }
                }}
              />
            </FormControl>
            <Typography>Account Information</Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} md={4}>
                <FormControl className={classes.formControl} required>
                  <InputLabel htmlFor="bank-simple">Select Bank</InputLabel>
                  <Select
                    inputProps={{
                      name: "bank",
                      id: "bank-simple",
                    }}
                    value={state.bank}
                    onChange={(e) => onChange(e.target.value, "bank")}
                    required
                    margin="dense"
                    fullWidth
                  >
                    <MenuItem value="">
                      <em>None</em>
                    </MenuItem>
                    {banks.data &&
                      banks.data.data.map((item) => {
                        return (
                          <MenuItem value={item.bank}>{item.bank}</MenuItem>
                        );
                      })}
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl className={classes.formControl} required>
                  <TextField
                    id="accountNo"
                    label="Account No"
                    type="text"
                    required
                    fullWidth
                    size="medium"
                    value={state.accountNo}
                    onChange={(e) => onChange(e.target.value, "accountNo")}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl className={classes.formControl}>
                  <TextField
                    id="acountNo"
                    label="Account Title"
                    placeholder="Your Account Title"
                    type="text"
                    value={state.accountTitle}
                    onChange={(e) => onChange(e.target.value, "accountTitle")}
                    required
                    fullWidth
                    size="medium"
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl className={classes.formControl}>
                  <TextField
                    name="cnic"
                    placeholder="Your CNIC Number"
                    label="CNIC Number"
                    type="text"
                    required
                    value={state.cnic}
                    onChange={(e) => onChange(e.target.value, "cnic")}
                    size="medium"
                    onKeyPress={(event) => {
                      if (!/[0-9,.]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl className={classes.formControl}>
                  <TextField
                    name="phone"
                    placeholder="Your Phone Number"
                    label="Phone Number"
                    type="text"
                    required
                    size="medium"
                    value={state.phone}
                    onChange={(e) => onChange(e.target.value, "phone")}
                    onKeyPress={(event) => {
                      if (!/[0-9,.]/.test(event.key)) {
                        event.preventDefault();
                      }
                    }}
                    disabled
                  />
                </FormControl>
              </Grid>
              <Grid item xs={12} md={4}>
                <FormControl className={classes.formControl}>
                  <TextField
                    id="email"
                    label="Email"
                    placeholder="Your Email"
                    type="text"
                    value={state.email}
                    onChange={(e) => onChange(e.target.value, "email")}
                    required
                    fullWidth
                    size="medium"
                    disabled
                  />
                </FormControl>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Cancel
            </Button>
            <Button color="primary" type="submit">
              {withdrawRequest.loading ? (
                <CircularProgress
                  className={classes.progress}
                  size={20}
                  color="white"
                />
              ) : (
                <>Send Request</>
              )}
            </Button>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}

export default withStyles(styles)(WithdrawAmountWalletModal);
