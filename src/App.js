import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from "./header/header";
import Upload from "./upload";
import Login from "./login/login";
import Login2 from "./login/login2";
import Employees from "./employees/employees";

export default function App() {
  return (
      <Router>
          <Header />
          <Switch>
              <Route path="/about">
                  <Login2 />
              </Route>
              <Route path="/upload">
                  <Upload />
              </Route>
              <Route path="/login">
                  <Login />
              </Route>
              <Route path="/employees">
                  <Employees />
              </Route>

              <Route path="/">
              </Route>

          </Switch>
      </Router>

  );
}
