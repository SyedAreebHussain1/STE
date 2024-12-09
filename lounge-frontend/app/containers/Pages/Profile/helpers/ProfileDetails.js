import React, { useState } from "react";
import { getFromStorage } from "../../../../utils/storage";
import Grid from "@material-ui/core/Grid";
import {
  Button,
  CircularProgress,
  InputAdornment,
  TextField,
} from "@material-ui/core";
import CloudUpload from "@material-ui/icons/CloudUpload";
import GetApp from "@material-ui/icons/GetApp";
import { useDispatch, useSelector } from "react-redux";
import {
  S3api,
  updateProfileApi,
} from "../../../../redux/modules/Profile/actions";
const ProfileDetails = ({ profileImage }) => {
  const s3 = useSelector((state) => state.getIn(["s3"]));
  const updateProfile = useSelector((state) => state.getIn(["updateProfile"]));
  let user = getFromStorage("user");
  const dispatch = useDispatch();
  const [state, setState] = useState({
    name: user.name,
    email: user.email,
    mobileNo: user.phone.split("+92")[1],
    whatsappNo: user.whatsapp_no.split("+92")[1],
  });
  const [resume, setResume] = useState(null);
  const onChange = (value, name) => {
    setState({
      ...state,

      [name]: value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const body = {
      email: state.email,
      phone: `+92${state.mobileNo}`,
      whatsAppNumber: `+92${state.whatsappNo}`,
      name: state.name,
    };

    if (profileImage !== null) {
      body.profileUrl = profileImage;
    }
    if (resume !== null) {
      body.url = resume;
    }

    updateProfileApi(dispatch, body);
  };

  const handleResumeChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file) {
      let formData = new FormData();
      formData.append("profilePic", file);
      S3api(dispatch, formData, onSuccess);
    }
  };
  const onSuccess = (data) => {
    setResume(data.data);
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
                  value={state.mobileNo}
                  onChange={(e) => onChange(e.target.value, "mobileNo")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+92</InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <TextField
                  name="Email"
                  label="Email"
                  required
                  fullWidth
                  value={state.email}
                  onChange={(e) => onChange(e.target.value, "email")}
                />
              </Grid>
              <Grid item md={4} xs={12}>
                <TextField
                  name="Whatsapp"
                  label="Whatsapp"
                  required
                  fullWidth
                  value={state.whatsappNo}
                  onChange={(e) => onChange(e.target.value, "whatsappNo")}
                  InputProps={{
                    startAdornment: (
                      <InputAdornment position="start">+92</InputAdornment>
                    ),
                  }}
                />
              </Grid>
            </Grid>
            <Grid container spacing={3}>
              <Grid item md={4} xs={12}>
                <Button
                  variant="contained"
                  component="label"
                  disabled={s3.loading}
                  fullWidth
                  style={{
                    borderRadius: "8px",
                    marginTop: "2%",
                    height: "45px",
                  }}
                  onClick={() => {
                    document.getElementById("resume-input").click();
                  }}
                >
                  Upload resume &nbsp;&nbsp;
                  <span style={{ marginTop: "-2px" }}>
                    {s3.loading ? (
                      <span style={{ marginTop: "-2px" }}>
                        <CircularProgress size={20} color="white" />
                      </span>
                    ) : (
                      <CloudUpload />
                    )}
                  </span>
                </Button>
              </Grid>
              {user.url !== undefined && user.url !== null && (
                <Grid item md={4} xs={12}>
                  <Button
                    onClick={() => {
                      window.open(user.url);
                    }}
                    variant="contained"
                    component="label"
                    fullWidth
                    style={{
                      borderRadius: "8px",
                      marginTop: "2%",
                      height: "45px",
                    }}
                  >
                    Download resume &nbsp;&nbsp;
                    <span style={{ marginTop: "-2px" }}>
                      <GetApp />
                    </span>
                  </Button>
                </Grid>
              )}
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
            </Grid>
          </form>
        </Grid>
      </Grid>
      <input
        id="resume-input"
        disabled={s3.loading}
        type="file"
        onChange={handleResumeChange}
        style={{ display: "none" }}
      />
    </div>
  );
};

export default ProfileDetails;
