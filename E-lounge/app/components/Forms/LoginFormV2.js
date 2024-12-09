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

import Paper from "@material-ui/core/Paper";

import brand from "dan-api/dummy/brand";

import styles from "./user-jss";
import { TextFieldRedux, CheckboxRedux } from "./ReduxFormMUI";

import { CircularProgress } from "@material-ui/core";
import { loginAction } from "../../redux/modules/Auth/actions";

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
  const handleClickShowPassword = () => {
    setShowPassword((show) => !show);
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const { classes, deco } = props;
  const reducer = "auth";
  const { loading } = useSelector((state) => state.getIn([reducer]));
  const onChange = (value, name) => {
    setState({
      ...state,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loading) {
      return;
    }
    let body = {
      phone:
        state?.phone[0] === 0
          ? `+92${state?.phone.substr(1, state?.phone.length)}`
          : `+92${state?.phone}`,
      password: state?.password,
    };
    loginAction(body, dispatch);
  };
  const normalizePhone = (value) => {
    return value.slice(0, 11);
  };
  return (
    <Paper className={classNames(classes.sideWrap, deco && classes.petal)}>
      <div className={classes.topBar}>
        <NavLink to="/" className={classes.brand}>
          <img
            src={require("../../../public/favicons/logo.png")}
            alt={brand.name}
          />
          Property wallet
        </NavLink>
      </div>
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

        <section className={classes.pageFormSideWrap}>
          <form onSubmit={handleSubmit}>
            <div>
              <FormControl className={classes.formControl}>
                <Field
                  name="text"
                  component={TextFieldRedux}
                  placeholder="Your Phone no"
                  label="Your Phone no"
                  required
                  className={classes.field}
                  autoComplete="off"
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+92</InputAdornment>
                    ),
                  }}
                  normalize={normalizePhone}
                  value={state.phone}
                  onChange={(e) => onChange(e.target.value, "phone")}
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
