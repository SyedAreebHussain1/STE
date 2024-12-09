import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import NotFound from "containers/Pages/Standalone/NotFoundDedicated";
import Outer from "../Templates/Outer";
import Auth from "./Auth";
import Application from "./Application";
import LandingCorporate from "./Landing";
import LandingCreative from "./LandingCreative";
import ArticleNews from "./ArticleNews";
import ThemeWrapper from "./ThemeWrapper";
window.__MUI_USE_NEXT_TYPOGRAPHY_VARIANTS__ = true;
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getFromStorage } from "../../utils/storage";
import {
  LOGIN_FAILURE,
  LOGIN_SUCCESS,
} from "../../redux/modules/Auth/constants";
import { LoginV2, RegisterV2 } from "../pageListAsync";
import axios from "axios";
import Onboarding from "../Pages/Onboarding";
function App() {
  // axios.defaults.baseURL = process.env.REACT_APP_BASE_URL_STAGING;
  axios.defaults.baseURL = "https://stagingbackend.propertywallet.pk/v1/";
  const dispatch = useDispatch();
  const reducer = "auth";
  const { isAuth, isOnBoardingComplete } = useSelector((state) => state.getIn([reducer]));

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
          path="/"
          exact
          render={(props) => {
            return !isAuth ? (
              <>
                <Outer>
                  <LoginV2 {...props} />
                </Outer>
              </>
            ) : isAuth && !isOnBoardingComplete ? (
              <Redirect to="/app" />
            ) : <Redirect to="/onboarding" />;
          }}
        />

        <Route
          path="/app"
          render={(props) =>
            !isAuth ? <Redirect to="/" /> : isAuth && !isOnBoardingComplete ? <Redirect to="/onboarding" /> : <Application {...props} />
          }
        />

        <Route
          path="/register"
          exact
          render={(props) => {
            return !isAuth ? (
              <>
                <Outer>
                  <RegisterV2 {...props} />
                </Outer>
              </>
            ) : isAuth && !isOnBoardingComplete ? (
              <Redirect to="/onboarding" />
            ) : <Redirect to="/app" />;
          }}
        />
        <Route
          path="/onboarding"
          exact
          render={(props) => {
            return isAuth && !isOnBoardingComplete ? (
              <>
                  <Onboarding {...props} />
              </>
            ) : (
              <Redirect to="/app" />
            );
          }}
        />
      </Switch>
    </ThemeWrapper>
  );
}

export default App;
