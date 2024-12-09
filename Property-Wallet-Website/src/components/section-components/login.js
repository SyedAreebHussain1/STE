import React, { useEffect, useState } from "react";
import swal from "sweetalert";
import { useDispatch } from "react-redux";

import { loginAction } from "../../store/action/authAction";

const Login = ({ history }) => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const onSuccuess = (success) => {
    swal({
      title: "Congratulations!",
      text: success?.message,
      icon: "success",
    }).then((isOk) => {
      history.replace("/dashboard/order");
    });
    setLoading(false);
  };

  const onFailure = (fail) => {
    swal("Sorry!", `${fail?.message}`, "error");
    setLoading(false);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && password) {
      setLoading(true);
      dispatch(loginAction({ email, password }, onSuccuess, onFailure));
    } else {
      swal("Sorry!", `Email and Password are required`, "error");
    }
  };
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (user) {
      history.push("/dashboard");
    }
  }, [localStorage]);
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title-area text-center">
              <h1 style={{ fontSize: "28px" }} className="section-title">
                Effortlessly Manage Your Properties with
                <br />
                Our Real Estate Management System Portal.
              </h1>
            </div>
          </div>
        </div>

        <div style={{ marginLeft: "20%", marginRight: "20%" }} className="row">
          <div className="col-lg-12">
            <div className="account-login-inner">
              <form
                method="GET"
                className="ltn__form-box contact-form-box"
                onSubmit={handleSubmit}
              >
                <label
                  style={{
                    marginBottom: "5px",
                    fontWeight: "600",
                    color: "grey",
                  }}
                >
                  Email Address
                </label>
                <input
                  style={{ borderRadius: "8px" }}
                  type="text"
                  name="email"
                  placeholder="Email*"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  style={{
                    marginBottom: "5px",
                    fontWeight: "600",
                    color: "grey",
                  }}
                >
                  Password
                </label>
                <input
                  style={{ borderRadius: "8px" }}
                  type="password"
                  name="password"
                  placeholder="Password*"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <div className="btn-wrapper mt-0">
                  <button
                    style={{ width: "100%", borderRadius: "8px" }}
                    className="custom--login-btn-1 btn"
                    type="submit"
                    disabled={loading}
                  >
                    {loading ? "LOADING..." : "SIGN IN"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
