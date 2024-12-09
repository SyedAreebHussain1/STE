import React, { useContext } from "react";
import { PropTypes } from "prop-types";
import { Switch, Route } from "react-router-dom";
import { ThemeContext } from "./ThemeWrapper";
import Dashboard from "../Templates/Dashboard";
import {
  PersonalDashboard,
  NotFound,
  CurrentSubscribers,
  Wallet,
  EarningHistory,
  Support,
  Packages,
  Checkout,
  ProfilePage,
  LearningCenter,
  CertificateOfSale,
} from "../pageListAsync";

function Application(props) {
  const { history } = props;
  const changeMode = useContext(ThemeContext);
  return (
    <Dashboard history={history} changeMode={changeMode}>
      <Switch>
        {/* Home */}
        <Route exact path="/app" component={PersonalDashboard} />
        <Route
          exact
          path="/app/pages/subscriber"
          component={CurrentSubscribers}
        />
        <Route exact path="/app/pages/wallet" component={Wallet} />
        <Route exact path="/app/pages/checkout/:title" component={Checkout} />
        <Route exact path="/app/pages/earnings" component={EarningHistory} />
        <Route exact path="/app/pages/support" component={Support} />
        <Route exact path="/app/pages/packages" component={Packages} />
        <Route
          exact
          path="/app/pages/certificate"
          component={CertificateOfSale}
        />
        <Route exact path="/app/pages/profile" component={ProfilePage} />
        <Route
          exact
          path="/app/pages/Learning Center"
          component={LearningCenter}
        />

        <Route component={NotFound} />
      </Switch>
    </Dashboard>
  );
}

Application.propTypes = {
  history: PropTypes.object.isRequired,
};

export default Application;
