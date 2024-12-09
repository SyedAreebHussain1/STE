import React, { useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { NavLink, useHistory } from "react-router-dom";
import { Field, reduxForm } from "redux-form/immutable";
import Button from "@material-ui/core/Button";
import { connect, useDispatch, useSelector } from "react-redux";
import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import Typography from "@material-ui/core/Typography";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import AllInclusive from "@material-ui/icons/AllInclusive";
import Brightness5 from "@material-ui/icons/Brightness5";
import People from "@material-ui/icons/People";
import ArrowForward from "@material-ui/icons/ArrowForward";
import Paper from "@material-ui/core/Paper";
import Icon from "@material-ui/core/Icon";
import brand from "dan-api/dummy/brand";
import logo from "dan-images/logo.svg";
import styles from "./user-jss";
import { TextFieldRedux, CheckboxRedux } from "./ReduxFormMUI";
import { ContentDivider } from "../Divider";
import { CircularProgress } from "@material-ui/core";
import {
  loginAction,
  sendOtpAction,
  verifyOtpAction,
} from "../../redux/modules/Auth/actions";
import { errorMessage } from "../../utils/message";
import OtpInput from "react-otp-input";

// validation functions
const required = (value) => (value === null ? "Required" : undefined);
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email"
    : undefined;

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function LoginFormV2(props) {
  const [showPassword, setShowPassword] = useState(false);
  const [state, setState] = useState({});
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);
  const history = useHistory();
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const [verification, setVerification] = useState(false);
  const [OTP, setOTP] = useState("");
  const { classes, pristine, submitting, deco } = props;
  const reducer = "auth";
  const { loading } = useSelector((state) => state.getIn([reducer]));
  const onChange = (value, name) => {
    setState({
      ...state,

      [name]: value,
    });
  };
  function onSuccessSendOtp() {
    setVerification(true);
  }
  function onLoginUnverifiedSuccess(phone) {
    let body = {
      phoneNumber: phone,
    };
    sendOtpAction(body, onSuccessSendOtp, dispatch);
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    let body = {
      email: state.email,
      password: state.password,
    };
    loginAction(body, dispatch, onLoginUnverifiedSuccess);
  };
  function onSubmitVerification(e) {
    e.preventDefault();
    if (OTP === "") {
      errorMessage("OTP is Required");
      return;
    } else if (OTP.length < 4) {
      errorMessage("Please Enter Complete OTP");
      return;
    }
    let body = {
      otpCode: OTP,
    };
    verifyOtpAction(body, dispatch);
  }
  const handleChange = (values) => {
    // console.log("VALUES", values);
    setOTP(values);
  };
  return (
    <Paper className={classNames(classes.sideWrap, deco && classes.petal)}>
      <div
        className={window.innerWidth <= 500 ? "login_mobile" : classes.topBar}
      >
        <NavLink to="/" className={classes.brand}>
          <img
            src={require("../../../public/favicons/logo.png")}
            alt={brand.name}
          />
          Property wallet
        </NavLink>
        <Button
          size="small"
          className={classes.buttonLink}
          component={LinkBtn}
          to="/register"
        >
          <Icon className={classes.icon}>arrow_forward</Icon>
          Create new account
        </Button>
      </div>
      {verification ? (
        <div
          style={{
            display: "flex",
            height: "calc(100% - 20%)",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <form onSubmit={onSubmitVerification}>
            <Typography variant="h4" className={classes.title} gutterBottom>
              Verify
            </Typography>
            <Typography
              variant="caption"
              className={classes.subtitle}
              gutterBottom
              align="center"
            >
              Please Enter Verification Code
            </Typography>
            <section>
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
              <div>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  type="submit"
                >
                  {loading ? (
                    <CircularProgress
                      className={classes.progress}
                      size={20}
                      color="white"
                    />
                  ) : (
                    <>Submit</>
                  )}
                </Button>
              </div>
            </section>
          </form>
        </div>
      ) : (
        <>
          <Typography variant="h4" className={classes.title} gutterBottom>
            Sign In
          </Typography>
          <Typography
            variant="caption"
            className={classes.subtitle}
            gutterBottom
            align="center"
          >
            Enter your credentials below
          </Typography>
          {/* <section className={classes.socmedSideLogin}>
            <div className={classes.btnArea}>
              <Button
                variant="outlined"
                size="small"
                className={classes.redBtn}
                type="button"
              >
                <AllInclusive
                  className={classNames(classes.leftIcon, classes.iconSmall)}
                />
                Socmed 1
              </Button>
              <Button
                variant="outlined"
                size="small"
                className={classes.blueBtn}
                type="button"
              >
                <Brightness5
                  className={classNames(classes.leftIcon, classes.iconSmall)}
                />
                Socmed 2
              </Button>
              <Button
                variant="outlined"
                size="small"
                className={classes.cyanBtn}
                type="button"
              >
                <People
                  className={classNames(classes.leftIcon, classes.iconSmall)}
                />
                Socmed 3
              </Button>
            </div>
            <ContentDivider content="sign in with email" />
          </section> */}
          <section className={classes.pageFormSideWrap}>
            <form onSubmit={handleSubmit}>
              <div>
                <FormControl className={classes.formControl}>
                  <Field
                    name="email"
                    component={TextFieldRedux}
                    placeholder="Your Email"
                    label="Your Email"
                    required
                    validate={[required, email]}
                    className={classes.field}
                    value={state.email}
                    onChange={(e) => onChange(e.target.value, "email")}
                  />
                </FormControl>
              </div>
              <div>
                <FormControl className={classes.formControl}>
                  <Field
                    name="password"
                    component={TextFieldRedux}
                    type={showPassword ? "text" : "password"}
                    label="Your Password"
                    InputProps={{
                      endAdornment: (
                        <InputAdornment position="end">
                          <IconButton
                            aria-label="Toggle password visibility"
                            onClick={handleClickShowPassword}
                            onMouseDown={handleMouseDownPassword}
                          >
                            {showPassword ? <VisibilityOff /> : <Visibility />}
                          </IconButton>
                        </InputAdornment>
                      ),
                    }}
                    required
                    validate={required}
                    className={classes.field}
                    onChange={(e) => onChange(e.target.value, "password")}
                  />
                </FormControl>
              </div>
              {/* <div className={classes.optArea}>
                <FormControlLabel
                  className={classes.label}
                  control={<Field name="checkbox" component={CheckboxRedux} />}
                  label="Remember"
                />
              </div> */}
              <div className={classes.optArea}>
                <Button
                  size="small"
                  component={LinkBtn}
                  to="/reset-password"
                  className={classes.buttonLink}
                >
                  Forgot Password
                </Button>
              </div>
              <div className={classes.btnArea}>
                <Button
                  variant="contained"
                  fullWidth
                  color="primary"
                  size="large"
                  type="submit"
                  // disabled={loading}
                >
                  {loading ? (
                    <CircularProgress
                      className={classes.progress}
                      size={20}
                      color="white"
                    />
                  ) : (
                    <>Submit</>
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

LoginFormV2.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
};

const LoginFormReduxed = reduxForm({
  form: "immutableExample",
  enableReinitialize: true,
})(LoginFormV2);

const reducerLogin = "login";
const reducerUi = "ui";
const FormInit = connect((state) => ({
  force: state,
  initialValues: state.getIn([reducerLogin, "usersLogin"]),
  deco: state.getIn([reducerUi, "decoration"]),
}))(LoginFormReduxed);

export default withStyles(styles)(FormInit);
