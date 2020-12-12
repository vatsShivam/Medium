import {
  Route,
  Switch,
  Redirect,
  BrowserRouter,
  Router,
} from "react-router-dom";
import React, { Suspense } from "react";

const Login = React.lazy(() => import("./Container/Dashboard/index"));

function RenderComponent({ path, component }) {
  return (
    <Suspense
      fallback={
        <div className="loader-container">
          <div className="loader-container-inner">
            <h6 className="mt-5">
              Please wait while we load all the Components examples
              <small>
                Because this is a demonstration we load at once all the
                Components examples. This wouldn't happen in a real live app!
              </small>
            </h6>
          </div>
        </div>
      }
    >
      {" "}
      <BrowserRouter>
        <Route path={path} component={component} />
      </BrowserRouter>
    </Suspense>
  );
}

function RenderAllComponent({ user }) {
  if (user) {
    return (
      <div>
        <div>
          {/* Admin */}
          <RenderComponent path="/user" component={Login} />

          {/* Client */}
        </div>
      </div>
    );
  }
}

const AppMain = () => {
  return (
    <>
      <RenderAllComponent user="SUPER_USER" />

      {/* <ToastContainer /> */}
    </>
  );
};

export default AppMain;
