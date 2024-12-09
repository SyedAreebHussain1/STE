import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { connect, useDispatch, useSelector } from "react-redux";
import { Field, reduxForm } from "redux-form/immutable";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import ArrowForward from "@material-ui/icons/ArrowForward";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { TextFieldRedux } from "./ReduxFormMUI";
import styles from "./user-jss";
import OtpInput from "react-otp-input";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import {
  changePasswordAction,
  forgotPasswordVerifyOtpAction,
  forgotPasswordWIthEmailAction,
} from "../../redux/modules/ForgotPassword/actions";
import { CircularProgress, InputAdornment } from "@material-ui/core";
import { errorMessage } from "../../utils/message";

// validation functions
const required = (value) => (value === null ? "Required" : undefined);
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email"
    : undefined;

function ResetForm(props) {
  const { classes, handleSubmit, pristine, submitting, deco } = props;
  const [verification, setVerification] = useState(false);
  const [isPasswordChangeUIVisible, setIsPasswordChangeUIVisible] = useState(
    false
  );
  const [OTP, setOTP] = useState("");
  const forgotPasswordOtpVerify = useSelector((state) =>
    state.getIn(["forgotPasswordOtpVerify"])
  );
  const changePassword = useSelector((state) =>
    state.getIn(["changePassword"])
  );
  const forgotPasswordWithEmail = useSelector((state) =>
    state.getIn(["forgotPasswordWithEmail"])
  );
  const [state, setState] = useState({
    phone: "",
    newPassword: "",
    confirmPassword: "",
  });
  const history = useHistory();
  const dispatch = useDispatch();
  const onChange = (value, name) => {
    setState({
      ...state,

      [name]: value,
    });
  };
  function onSuccessReset() {
    setVerification(true);
    setState((prev) => ({
      ...prev,
      newPassword: "",
      confirmPassword: "",
    }));
  }
  function onSuccessOTP() {
    setVerification(false);
    setIsPasswordChangeUIVisible(true);
    setState((prev) => ({
      ...prev,
      newPassword: "",
      confirmPassword: "",
    }));
  }
  function onSuccessChange() {
    setIsPasswordChangeUIVisible(false);
    history.push("/app");
  }
  const handleChange = (values) => {
    // console.log("VALUES", values);
    setOTP(values);
  };

  function handleSubmitReset(e) {
    e.preventDefault();
    const body = {
      phone:
        state?.phone[0] === 0
          ? `+92${state?.phone.substr(1, state?.phone.length)}`
          : `+92${state?.phone}`,
    };
    forgotPasswordWIthEmailAction(body, onSuccessReset, dispatch);
  }
  function handleSubmitOTP(e) {
    e.preventDefault();
    if (OTP === "") {
      errorMessage("OTP is Required");
      return;
    } else if (OTP.length < 4) {
      errorMessage("Please Enter Complete OTP");
      return;
    }
    // Call API
    const body = {
      code: OTP,
    };
    forgotPasswordVerifyOtpAction(body, onSuccessOTP, dispatch);
  }
  function handleSubmitChange(e) {
    e.preventDefault();
    if (state.newPassword !== state.confirmPassword) {
      errorMessage("New Password and Confirm Password does not match");
      return;
    }
    const body = {
      password: state.newPassword,
    };
    changePasswordAction(
      body,
      onSuccessChange,
      dispatch,
      forgotPasswordOtpVerify.data.data.token
    );
  }
  const normalizePhone = (value) => {
    return value.slice(0, 11);
  };
  return (
    <Paper className={classNames(classes.paperWrap, deco && classes.petal)}>
      {verification ? (
        <>
          <Typography variant="h4" className={classes.title} gutterBottom>
            OTP Verification
          </Typography>
          <Typography
            variant="caption"
            className={classes.subtitle}
            gutterBottom
            align="center"
          >
            Please Enter Verification Code send to your email and phone number
          </Typography>
          <section className={classes.formWrap}>
            <form onSubmit={handleSubmitOTP}>
              <div>
                <FormControl className={classes.formControl} required>
                  <OtpInput
                    value={OTP}
                    focusStyle={{
                      outline: "none",
                    }}
                    onChange={handleChange}
                    numInputs={4}
                    separator={<span>-</span>}
                    inputStyle={{
                      width: "3rem",
                      height: "3rem",
                      margin: "0 1rem",
                      fontSize: "2rem",
                      borderRadius: "5px",
                      border: "1px solid rgba(0, 0, 0, 0.3)",
                    }}
                    isInputNum={true}
                    containerStyle={{
                      justifyContent: "center",
                      marginTop: "40px",
                      marginBottom: "40px",
                    }}
                  />
                </FormControl>
              </div>
              <div className={classes.btnArea}>
                <Button variant="contained" color="primary" type="submit">
                  {forgotPasswordOtpVerify.loading ? (
                    <span>
                      <CircularProgress size={20} color="white" />
                    </span>
                  ) : (
                    <>
                      Submit OTP
                      <ArrowForward
                        className={classNames(
                          classes.rightIcon,
                          classes.iconSmall
                        )}
                        disabled={submitting || pristine}
                      />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </section>
        </>
      ) : isPasswordChangeUIVisible ? (
        <>
          <Typography variant="h4" className={classes.title} gutterBottom>
            Change Password
          </Typography>
          <Typography
            variant="caption"
            className={classes.subtitle}
            gutterBottom
            align="center"
          >
            Please enter your new Password
          </Typography>
          <section className={classes.formWrap}>
            <form onSubmit={handleSubmitChange}>
              <div>
                <FormControl className={classes.formControl}>
                  <Field
                    name="newPassword"
                    component={TextFieldRedux}
                    placeholder="Your New Password"
                    label="Your New Password"
                    required
                    type="password"
                    value={state.newPassword}
                    onChange={(e) => onChange(e.target.value, "newPassword")}
                    validate={[required]}
                    className={classes.field}
                  />
                </FormControl>
              </div>
              <div>
                <FormControl className={classes.formControl}>
                  <Field
                    name="confirmPassword"
                    component={TextFieldRedux}
                    placeholder="Your Confirm Password"
                    label="Your Confirm Password"
                    value={state.confirmPassword}
                    onChange={(e) =>
                      onChange(e.target.value, "confirmPassword")
                    }
                    required
                    type="password"
                    validate={[required]}
                    className={classes.field}
                  />
                </FormControl>
              </div>
              <div className={classes.btnArea}>
                <Button variant="contained" color="primary" type="submit">
                  {changePassword.loading ? (
                    <span style={{ marginTop: "-2px" }}>
                      <CircularProgress size={20} color="white" />
                    </span>
                  ) : (
                    <>
                      Change Password
                      <ArrowForward
                        className={classNames(
                          classes.rightIcon,
                          classes.iconSmall
                        )}
                        disabled={submitting || pristine}
                      />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </section>
        </>
      ) : (
        <>
          <Typography variant="h4" className={classes.title} gutterBottom>
            Reset Password
          </Typography>
          <Typography
            variant="caption"
            className={classes.subtitle}
            gutterBottom
            align="center"
          >
            Send reset password link to Your phone no
          </Typography>
          <section className={classes.formWrap}>
            <form onSubmit={handleSubmitReset}>
              <div>
                <FormControl className={classes.formControl}>
                  <Field
                    name="phone"
                    component={TextFieldRedux}
                    placeholder="Your phone no"
                    label="Your Phone"
                    required
                    // validate={[required, email]}
                    value={state.phone}
                    normalize={normalizePhone}
                    onChange={(e) => onChange(e.target.value, "phone")}
                    className={classes.field}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">+92</InputAdornment>
                      ),
                    }}
                  />
                </FormControl>
              </div>
              <div className={classes.btnArea}>
                <Button variant="contained" color="primary" type="submit">
                  {forgotPasswordWithEmail.loading ? (
                    <span style={{ marginTop: "-2px" }}>
                      <CircularProgress size={20} color="white" />
                    </span>
                  ) : (
                    <>
                      Reset Password
                      <ArrowForward
                        className={classNames(
                          classes.rightIcon,
                          classes.iconSmall
                        )}
                        disabled={submitting || pristine}
                      />
                    </>
                  )}
                </Button>
              </div>
            </form>
          </section>
        </>
      )}
    </Paper>
  );
}

ResetForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
};

const ResetFormReduxed = reduxForm({
  form: "immutableEResetFrm",
  enableReinitialize: true,
})(ResetForm);

const reducer = "ui";
const RegisterFormMapped = connect((state) => ({
  force: state,
  deco: state.getIn([reducer, "decoration"]),
}))(ResetFormReduxed);

export default withStyles(styles)(RegisterFormMapped);
