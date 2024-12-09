import React, { useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Outer from "../Templates/Outer";
import Application from "./Application";
import ThemeWrapper from "./ThemeWrapper";
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
import { useSelector, useDispatch } from "react-redux";
import { getFromStorage } from "../../utils/storage";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from "../../redux/modules/Auth/constants";
import { LoginV2, ResetPassword } from "../pageListAsync";
import axios from "axios";
function App() {
  axios.defaults.baseURL = "https://stagingbackend.propertywallet.pk/v1/";
  // axios.defaults.baseURL = "https://productionbackend.propertywallet.pk/v1/";
  // axios.defaults.baseURL = "https://developmentbackend.propertywa/llet.pk/v1/";
  // axios.defaults.baseURL = "http://192.168.18.139:3000/v1/";
  // axios.defaults.baseURL = "http://192.168.18.138:3000/v1/";
  // axios.defaults.baseURL = "http://192.168.18.22:3000/v1/";
  // axios.defaults.baseURL = "http://192.168.18.103:3000/v1/";
  // axios.defaults.baseURL = "http://192.168.18.253:3000/v1/";
  // axios.defaults.baseURL = "http://192.168.18.246:3000/v1/";
  // axios.defaults.baseURL = "http://192.168.18.138:3000/v1/";

  const dispatch = useDispatch();
  const reducer = "auth";
  const { isAuth } = useSelector((state) => state.getIn([reducer]));

  const handleTokenValidation = (user) => {
    let tokenExpiration = getFromStorage("token").expirationTime;
    const currentTime = Date.now();
    if (currentTime > tokenExpiration) {
      dispatch({ type: LOGIN_FAILURE, error: null });
    } else {
      dispatch({ type: LOGIN_SUCCESS, payload: user });
    }
  };
  useEffect(() => {
    let user = getFromStorage("user");
    if (!user) {
      dispatch({ type: LOGIN_FAILURE, error: null });
    } else {
      handleTokenValidation(user);
    }
  }, [dispatch]);
  return (
    <ThemeWrapper>
      <Switch>
        <Route
          path="/reset-password"
          exact
          render={(props) => {
            return !isAuth ? (
              <>
                <Outer>
                  <ResetPassword {...props} />
                </Outer>
              </>
            ) : (
              <Redirect to="/app" />
            );
          }}
        />
        <Route
          path="/"
          exact
          render={(props) => {
            return !isAuth ? (
              <>
                <Outer>
                  <LoginV2 {...props} />
                </Outer>
              </>
            ) : (
              <Redirect to="/app" />
            );
          }}
        />

        <Route
          path="/app"
          render={(props) =>
            !isAuth ? <Redirect to="/" /> : <Application {...props} />
          }
        />
      </Switch>
    </ThemeWrapper>
  );
}

export default App;
