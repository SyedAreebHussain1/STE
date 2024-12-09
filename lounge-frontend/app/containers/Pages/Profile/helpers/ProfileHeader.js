import React, { useEffect, useState } from "react";
import { getFromStorage } from "../../../../utils/storage";
import Grid from "@material-ui/core/Grid";
import { useDispatch, useSelector } from "react-redux";
import { S3api } from "../../../../redux/modules/Profile/actions";
import { CircularProgress } from "@material-ui/core";
const ProfileHeader = ({ profileImage, setProfileImage }) => {
  const { loading } = useSelector((state) => state.getIn(["s3"]));
  const dispatch = useDispatch();
  const user = getFromStorage("user");

  const handleImageChange = (e) => {
    e.preventDefault();
    const file = e.target.files[0];

    if (file) {
      let formData = new FormData();
      formData.append("profilePic", file);
      S3api(dispatch, formData, onSuccess);
    }
  };

  const onSuccess = (data) => {
    setProfileImage(data.data);
  };
  return (
    <div>
      <Grid container spacing={3}>
        <Grid item md={2} xs={6}>
          <div
            style={{
              backgroundImage: `url(${profileImage ||
                user.profilePic ||
                require("../../../../api/icons/avtar.png")})`,
              backgroundSize: "cover",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              cursor: "pointer",
              position: "relative",
            }}
            onClick={() => {
              // Trigger the hidden file input when the user clicks the picture
              document.getElementById("file-input").click();
            }}
          >
            {loading ? (
              <div style={{ position: "absolute", right: 70, bottom: 60 }}>
                <CircularProgress size={20} color="secondary" />
              </div>
            ) : (
              <img
                src={require("../../../../api/icons/edit-icon.png")}
                alt=""
                style={{ position: "absolute", right: 0, bottom: 0 }}
              />
            )}
          </div>
          <input
            id="file-input"
            disabled={loading}
            type="file"
            accept="image/png, image/jpeg, image/jpg"
            onChange={handleImageChange}
            style={{ display: "none" }}
          />
        </Grid>
        <Grid
          style={{
            display: "flex",
            alignItems: "center",
          }}
          item
          md={6}
          xs={6}
        >
          <div>
            <h2
              style={{
                fontSize: "24px",
                fontWeight: "600",
                color: "#2B2B2B",
                marginBottom: 0,
              }}
            >
              {user.name}
            </h2>
            <h2
              style={{
                color: "#667085",
                fontSize: "15px",
                fontWeight: "500",
                marginBottom: 0,
              }}
            >
              Freelancer
            </h2>
          </div>
        </Grid>
      </Grid>
      <p
        style={{
          fontSize: "15px",
          color: "#667085",
          marginTop: "25px",
          marginBottom: "25px",
        }}
      >
        Update your freelance profile and details here.
      </p>
    </div>
  );
};

export default ProfileHeader;
