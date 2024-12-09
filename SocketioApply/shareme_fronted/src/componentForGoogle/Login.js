import React from "react";
import { auth, provider, signInWithGoogle } from "../config/firebaseConfig";

const Login = () => {
  // Sign in with google
  //   const signin = () => {
  //     auth.signInWithPopup(provider).catch(alert);
  //   };

  return (
    <div>
      {/* <center>
        <button style={{ marginTop: "200px" }} onClick={signin}>
          Sign In with Google
        </button>
      </center> */}
      <button onClick={signInWithGoogle}>Sign in with Google</button>
    </div>
  );
};

export default Login;
