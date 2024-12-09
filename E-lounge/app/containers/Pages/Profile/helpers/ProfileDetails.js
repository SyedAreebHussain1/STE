import React, { useState } from "react";
import { getFromStorage } from "../../../../utils/storage";
import Grid from "@material-ui/core/Grid";
import {
  Button,
  CircularProgress,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { updateProfileApi } from "../../../../redux/modules/Profile/actions";
const ProfileDetails = () => {
  const updateProfile = useSelector((state) => state.getIn(["updateProfile"]));
  let user = getFromStorage("user");
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: user.name,
    email: user.email,
    mobileNo: user.phone.split("+92")[1],
  });
  const onChange = (value, name) => {
    setState({
      ...state,
      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      fullName: state.name,
    };

    if (body.fullName !== "" && user?.id)
      updateProfileApi(dispatch, body, user?.id);
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
            Public profile
          </h2>
          <p style={{ fontSize: "15px", color: "#667085", marginBottom: 0 }}>
            This will be displayed on your profile.
          </p>
        </Grid>
        <Grid item md={8} xs={12}>
          <form onSubmit={handleSubmit}>
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <TextField
                  name="Name"
                  label="Name"
                  required
                  disabled
                  fullWidth
                  value={state.name}
                  onChange={(e) => onChange(e.target.value, "name")}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  name="Mobile"
                  label="Mobile"
                  required
                  fullWidth
                  disabled
                  value={"+92" + state.mobileNo}
                  onChange={(e) => onChange(e.target.value, "mobileNo")}
                  // InputProps={{
                  //   startAdornment: (
                  //     <InputAdornment position="start">+92</InputAdornment>
                  //   ),
                  // }}
                />
              </Grid>
            </Grid>
            {/*
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <TextField
                  name="Email"
                  label="Email"
                  required
                  fullWidth
                  disabled
                  value={state.email}
                  onChange={(e) => onChange(e.target.value, "email")}
                />
              </Grid>
            </Grid>
             <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <Button
                  disabled={updateProfile.loading}
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
                  {updateProfile.loading ? (
                    <span style={{ marginTop: "-2px" }}>
                      <CircularProgress size={20} color="white" />
                    </span>
                  ) : (
                    "Update profile"
                  )}
                </Button>
              </Grid>
            </Grid> */}
          </form>
        </Grid>
      </Grid>
    </div>
  );
};

export default ProfileDetails;
