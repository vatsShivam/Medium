import React, { Fragment } from "react";
import { Route, Switch, Redirect } from "react-router-dom";

// Forms

import Login from "./Login";
import Register from "./Register";
import View from "./View";
import Dashboard from "./Dashbord";
// import InterviewView from "./Elements/Interview/InterviewView"

// Layout

const User = ({ match }) => (
  <Fragment>
    <div className="app-main__outer">
      <div className="app-main__inner">
        <Switch>
          {/* Form Elements */}
          <Route exact path={`${match.url}/login`} component={Login} />
          <Route exact path={`${match.url}/register`} component={Register} />
          <Route exact path={`${match.url}/dashboard`} component={Dashboard} />
          <Route exact path={`${match.url}/view`} component={View} />
        </Switch>
      </div>
      {/* <AppFooter/> */}
    </div>
  </Fragment>
);

export default User;
