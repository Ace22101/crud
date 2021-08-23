import React from "react";
import {
  BrowserRouter as Router,
  Route,
  NavLink as Link,
  Switch,
} from "react-router-dom";
import { About } from "./About";
import { News } from "./News";
import { Services } from "./Services";

function Navbar() {
  return (
    <>
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">
            <Link className="navbar-brand" to="/">
              Navbar
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <Link className="nav-link active" aria-current="page" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/services">
                  Services
                </Link>
                <Link className="nav-link" to="/news">
                  Announcements
                </Link>
                <Link className="nav-link" to="/about">
                  About
                </Link>
              </div>
            </div>
          </div>
        </nav>

        <Switch>
          <Route path="/about" component={ About }/>
          <Route path="/news" component={ News }/>
          <Route path="/services" component={ Services }/>
          <Route path="/"/>
        </Switch>
      </Router>
    </>
  );
}

export default Navbar;
