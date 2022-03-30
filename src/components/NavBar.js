import React from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <div className="sticky-top pt-2 pb-2">
      <nav
        className="navbar navbar-expand-lg navbar-dark mx-3 mb-4"
        style={{ backgroundColor: "black", maxHeight: "50px" }}
      >
        <div className="container-fluid">
          <div className="collapse navbar-collapse" id="navbarLeftAlign">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <img
                  src="/sumbmerch.png"
                  alt="app-logo"
                  style={{ height: "50px" }}
                />
              </li>
            </ul>
          </div>
          <div className="collapse navbar-collapse" id="navbarRightAlign">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/complain"
                >
                  Complain
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/profile"
                >
                  Profile
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  className="nav-link active"
                  aria-current="page"
                  to="/login"
                >
                  Logout
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
