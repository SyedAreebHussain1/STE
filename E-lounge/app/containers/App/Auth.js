import React from "react";
import { Switch, Route } from "react-router-dom";
import Outer from "../Templates/Outer";
import { LoginV2, NotFound } from "../pageListAsync";

function Auth() {
  return (
    <Outer>
      <Switch>
        <Route path="/login-v2" component={LoginV2} />
        <Route component={NotFound} />
      </Switch>
    </Outer>
  );
}

export default Auth;
