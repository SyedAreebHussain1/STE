import React from "react";
import { auth, signInWithGoogle, logout } from "../config/firebaseConfig";

const Mainpage = () => {
  return (
    <div>
      Welcome
      <>
        Welcome {auth.currentUser.email}
        <button style={{ marginLeft: "20px" }} onClick={logout}>
          Logout
        </button>
      </>
    </div>
  );
};

export default Mainpage;
