import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import classNames from "classnames";
import { connect, useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form/immutable";
import Button from "@material-ui/core/Button";
import FormControl from "@material-ui/core/FormControl";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import ArrowForward from "@material-ui/icons/ArrowForward";
import AllInclusive from "@material-ui/icons/AllInclusive";
import Brightness5 from "@material-ui/icons/Brightness5";
import People from "@material-ui/icons/People";
import Icon from "@material-ui/core/Icon";
import brand from "dan-api/dummy/brand";
import logo from "dan-images/logo.svg";
import { TextFieldRedux, CheckboxRedux } from "./ReduxFormMUI";
import styles from "./user-jss";
import {
  Checkbox,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import FullScreenDialog from "../../containers/UiElements/FullScreenDialog";
import MapLocationSelect from "./helpers/MapLocationSelect";
import Notification from "../Notification/Notification";
import { change } from "redux-form";
import {
  signupAction,
  verifyOtpAction,
} from "../../redux/modules/Auth/actions";
import OtpInput from "react-otp-input";
import { errorMessage, infoMessage } from "../../utils/message";
import { Visibility, VisibilityOff } from "@material-ui/icons";

// import TextField from '@material-ui/core/TextField';

// validation functions
const required = (value) => (value === null ? "Required" : undefined);
const email = (value) =>
  value && !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ? "Invalid email"
    : undefined;

const passwordsMatch = (value, allValues) => {
  if (value !== allValues.get("password")) {
    return "Passwords dont match";
  }
  return undefined;
};

const LinkBtn = React.forwardRef(function LinkBtn(props, ref) {
  // eslint-disable-line
  return <NavLink to={props.to} {...props} innerRef={ref} />; // eslint-disable-line
});

function RegisterFormV2(props) {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { classes, pristine, submitting, deco } = props;
  const [verification, setVerification] = useState(false);
  const [OTP, setOTP] = useState("");
  const { loading } = useSelector((state) => state.getIn(["auth"]));
  const [state, setState] = useState({
    username: "",
    email: "",
    password: "",
    phone: "",
    whatsapp: "",
    address: "",
    sameAsPhone: false,
  });
  const dispatch = useDispatch();
  const onChange = (value, name) => {
    setState({
      ...state,

      [name]: value,
    });
  };
  const handleChange = (values) => {
    // console.log("VALUES", values);
    setOTP(values);
  };
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = useState("");
  const [mapdata, setMapData] = useState({
    lat: null,
    lng: null,
    city: null,
    address: null,
  });
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    setState((prev) => ({
      ...prev,
      address: mapdata.address,
    }));
  }, [mapdata]);

  function onSuccess() {
    setVerification(true);
  }
  function handleSubmit(e) {
    e.preventDefault();
    if (!state.address) {
      errorMessage("Please Select Location");
      return;
    }
    const body = {
      email: state.email,
      password: state.password,
      phone: `+92${state.phone}`,
      whatsapp_no: `+92${state.whatsapp}`,
      name: state.username,
      profileUrl: "",
      address: state.address,
      lat: mapdata.lat,
      long: mapdata.lng,
      url: "",
    };
    signupAction(body, dispatch, onSuccess);
  }
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
  function sameAsPhoneFunction() {
    setState((prev) => ({
      ...prev,
      sameAsPhone: !prev.sameAsPhone,
      whatsapp: prev.phone,
    }));
  }
  return (
    <div
      style={{
        height: "100%",
        overflowY: "scroll",
        // boxShadow: "none",
      }}
    >
      {open && (
        <FullScreenDialog
          title={"Select Location"}
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          saveDisabled={mapdata.address === null}
        >
          <MapLocationSelect setMapData={setMapData} mapdata={mapdata} />
        </FullScreenDialog>
      )}
      <Paper
        className={classNames(classes.sideWrap, deco && classes.petal)}
        style={{ height: "auto", boxShadow: "none" }}
      >
        <div
          className={
            window.innerWidth <= 500 ? "signup_mobile" : classes.topBar
          }
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
            to="/"
          >
            <Icon className={classes.icon}>arrow_forward</Icon>
            Already have account ?
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
              Register
            </Typography>
            <Typography
              variant="caption"
              className={classes.subtitle}
              gutterBottom
              align="center"
            >
              Please fill out required fields
            </Typography>

            <section>
              <form onSubmit={handleSubmit}>
                <div>
                  <FormControl className={classes.formControl}>
                    <TextField
                      name="username"
                      placeholder="Full Name"
                      label="Full Name"
                      required
                      className={classes.field}
                      value={state.username}
                      onChange={(e) => onChange(e.target.value, "username")}
                    />
                  </FormControl>
                </div>
                <div>
                  <FormControl className={classes.formControl}>
                    <TextField
                      name="email"
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
                    <TextField
                      name="password"
                      label="Your Password"
                      type={showPassword ? "text" : "password"}
                      required
                      validate={[required, passwordsMatch]}
                      className={classes.field}
                      value={state.password}
                      onChange={(e) => onChange(e.target.value, "password")}
                      InputProps={{
                        endAdornment: (
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="Toggle password visibility"
                              onClick={handleClickShowPassword}
                              onMouseDown={handleMouseDownPassword}
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        ),
                      }}
                    />
                  </FormControl>
                </div>
                <div>
                  <FormControl className={classes.formControl}>
                    <TextField
                      name="phone"
                      placeholder="Your Phone Number"
                      label="Your Phone Number"
                      required
                      validate={[required]}
                      className={classes.field}
                      value={state.phone}
                      onChange={(e) => onChange(e.target.value, "phone")}
                      onKeyPress={(event) => {
                        if (!/[0-9,.]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      disabled={state.sameAsPhone}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">+92</InputAdornment>
                        ),
                      }}
                    />
                  </FormControl>
                </div>
                <div>
                  <FormControl className={classes.formControl}>
                    <TextField
                      name="whatsapp"
                      placeholder="Your Whatsapp Number"
                      label="Your Whatsapp Number"
                      required
                      validate={[required]}
                      className={classes.field}
                      value={state.whatsapp}
                      disabled={state.sameAsPhone}
                      onChange={(e) => onChange(e.target.value, "whatsapp")}
                      onKeyPress={(event) => {
                        if (!/[0-9,.]/.test(event.key)) {
                          event.preventDefault();
                        }
                      }}
                      InputProps={{
                        startAdornment: (
                          <InputAdornment position="start">+92</InputAdornment>
                        ),
                      }}
                    />

                    <div style={{ display: "flex", alignItems: "center" }}>
                      <FormControlLabel
                        control={<Checkbox onClick={sameAsPhoneFunction} />}
                        label="Same as Phone"
                      />
                    </div>
                  </FormControl>
                </div>
                <div style={{ display: state.address ? "block" : "none" }}>
                  <FormControl className={classes.formControl}>
                    <TextField
                      name="address"
                      // component={TextFieldRedux}
                      placeholder="Enter Address"
                      label="Enter Address"
                      className={classes.field}
                      value={state.address}
                      onChange={(e) => onChange(e.target.value, "address")}
                    />
                  </FormControl>
                </div>

                <div className={classes.btnArea}>
                  <Button
                    variant="contained"
                    fullWidth
                    color="default"
                    onClick={handleClickOpen}
                  >
                    {mapdata.address ? "Change Location" : "Select Location"}
                  </Button>
                </div>
                {/* <div>
                  <FormControlLabel
                    control={
                      <Field
                        name="checkbox"
                        component={CheckboxRedux}
                        required
                        className={classes.agree}
                      />
                    }
                    label="Agree with"
                  />
                  <a href="#" className={classes.link}>
                    Terms &amp; Condition
                  </a>
                </div> */}
                <div className={classes.btnArea}>
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
              </form>
            </section>
          </>
        )}
      </Paper>
    </div>
  );
}

RegisterFormV2.propTypes = {
  classes: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
  deco: PropTypes.bool.isRequired,
};

const RegisterFormReduxed = reduxForm({
  form: "immutableExample",
  enableReinitialize: true,
})(RegisterFormV2);

const reducer = "ui";
const RegisterFormMapped = connect(
  (state) => ({
    force: state,
    deco: state.getIn([reducer, "decoration"]),
  }),
  { change }
)(RegisterFormReduxed);

export default withStyles(styles)(RegisterFormMapped);
