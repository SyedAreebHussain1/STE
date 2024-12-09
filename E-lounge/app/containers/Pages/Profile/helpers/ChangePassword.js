import React, { useState } from "react";

import Grid from "@material-ui/core/Grid";
import {
  Button,
  CircularProgress,
  IconButton,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { Visibility, VisibilityOff } from "@material-ui/icons";
import { errorMessage } from "../../../../utils/message";
import { updatePasswordApi } from "../../../../redux/modules/Profile/actions";
import { useDispatch, useSelector } from "react-redux";

const ChangePassword = () => {
  const updatePassword = useSelector((state) =>
    state.getIn(["updatePassword"])
  );
  const dispatch = useDispatch();
  const [state, setState] = useState({
    password1: "",
    password2: "",
    password3: "",
  });

  // password 1
  const [showPassword1, setShowPassword1] = useState(false);
  const handleClickShowPassword1 = () => {
    setShowPassword1((show) => !show);
  };
  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };
  // password 2
  const [showPassword2, setShowPassword2] = useState(false);
  const handleClickShowPassword2 = () => {
    setShowPassword2((show) => !show);
  };
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };
  // password 3
  const [showPassword3, setShowPassword3] = useState(false);
  const handleClickShowPassword3 = () => {
    setShowPassword3((show) => !show);
  };
  const handleMouseDownPassword3 = (event) => {
    event.preventDefault();
  };

  const onChange = (value, name) => {
    setState({
      ...state,

      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    if (state.password2 !== state.password3) {
      errorMessage("New Password and Confirm Password does not match");
      return;
    }
    const body = {
      oldPassword: state.password1,
      password: state.password2,
    };

    // call api
    updatePasswordApi(dispatch, body, onSuccess);
  };
  const onSuccess = () => {
    setState({
      // ...state,
      password1: "",
      password2: "",
      password3: "",
    });
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item md={4} xs={12}>
          <h2
            style={{
              fontSize: "18px",
              color: "#2B2B2B",
              fontWeight: 600,
              marginBottom: 0,
            }}
          >
            Change Password
          </h2>
          <p style={{ fontSize: "15px", color: "#667085", marginBottom: 0 }}>
            Update your account password.
          </p>
        </Grid>
        <Grid item md={8} xs={12}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item md={5} xs={12}>
                <TextField
                  name="password1"
                  type={showPassword1 ? "text" : "password"}
                  label="Current Password"
                  value={state.password1}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={handleClickShowPassword1}
                          onMouseDown={handleMouseDownPassword1}
                        >
                          {showPassword1 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  required
                  onChange={(e) => onChange(e.target.value, "password1")}
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item md={5} xs={12}>
                <TextField
                  name="password2"
                  type={showPassword2 ? "text" : "password"}
                  label="New Password"
                  value={state.password2}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={handleClickShowPassword2}
                          onMouseDown={handleMouseDownPassword2}
                        >
                          {showPassword2 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  required
                  onChange={(e) => onChange(e.target.value, "password2")}
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item md={5} xs={12}>
                <TextField
                  name="password3"
                  value={state.password3}
                  type={showPassword3 ? "text" : "password"}
                  label="New Confirm Password"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="Toggle password visibility"
                          onClick={handleClickShowPassword3}
                          onMouseDown={handleMouseDownPassword3}
                        >
                          {showPassword3 ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  required
                  onChange={(e) => onChange(e.target.value, "password3")}
                  style={{ width: "100%" }}
                />
              </Grid>
            </Grid>

            <Grid container spacing={3}>
              <Grid item md={5} xs={12}>
                <Button
                  disabled={updatePassword?.loading}
                  variant="contained"
                  type="submit"
                  color="primary"
                  fullWidth
                  style={{
                    borderRadius: "8px",
                    marginTop: "2%",
                    height: "45px",
                  }}
                >
                  {updatePassword.loading ? (
                    <span style={{ marginTop: "-2px" }}>
                      <CircularProgress size={20} color="white" />
                    </span>
                  ) : (
                    "Update password"
                  )}
                </Button>
              </Grid>
            </Grid>
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default ChangePassword;
