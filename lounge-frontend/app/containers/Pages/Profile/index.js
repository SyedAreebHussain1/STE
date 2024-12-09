import React, { useState } from "react";
import { Helmet } from "react-helmet";
import ProfileHeader from "./helpers/ProfileHeader";
import ProfileDetails from "./helpers/ProfileDetails";
import ChangePassword from "./helpers/ChangePassword";

const Profile = () => {
  const [profileImage, setProfileImage] = useState(null);
  const title = "Profile";
  const description = "Freelancer Profile";
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
        <ProfileHeader
          setProfileImage={setProfileImage}
          profileImage={profileImage}
        />
      </div>
      <div
        style={{
          padding: "40px 30px",
          backgroundColor: "#fff",
          marginTop: 10,
          borderRadius: "8px",
        }}
      >
        <ProfileDetails profileImage={profileImage} />
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
