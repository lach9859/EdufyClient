import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  return (
    <div className="navigation">
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <NavLink className="navbar-brand" to="/">
            Edufy :D
          </NavLink>
          <div>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <NavLink className="nav-link" to="/">
                  Home
                  <span className="sr-only">(current)</span>
                </NavLink>
              </li>
              
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/classes">
                  Classes
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/authenticate">
                  Authenticate
                </NavLink>
              </li>
              <a class="btn btn btn-outline-secondary" href="/Login">Sign up</a>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navigation;