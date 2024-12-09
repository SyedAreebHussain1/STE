import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ProfileDetails from "./helpers/ProfileDetails";
import ChangePassword from "./helpers/ChangePassword";

const Profile = () => {
  const title = "Profile";
  const description = "User Profile";
  return (
    <div>
      <Helmet>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
      </Helmet>
      <div
        style={{
          padding: "40px 30px",
          backgroundColor: "#fff",
          marginTop: 10,
          borderRadius: "8px",
        }}
      >
        <ProfileDetails />
      </div>
      <div
        style={{
          padding: "40px 30px",
          backgroundColor: "#fff",
          marginTop: 10,
          borderRadius: "8px",
        }}
      >
        <ChangePassword />
      </div>
    </div>
  );
};

export default Profile;
