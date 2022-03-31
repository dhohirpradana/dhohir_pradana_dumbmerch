/* eslint-disable eqeqeq */
import React from "react";
import { Link } from "react-router-dom";

export default function NavBar(props) {
  var user = JSON.parse(localStorage.getItem("user"));
  var page = props.page;

  var li = [
    <li key="complain" className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/complain">
        Complain
      </Link>
    </li>,
    <li key="profile" className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/profile">
        Profile
      </Link>
    </li>,
    <li key="login" className="nav-item">
      <Link className="nav-link active" aria-current="page" to="/login">
        Logout
      </Link>
    </li>,
  ];
  if (user) {
    if (user.role == 3) {
      li = [
        <li key="complain" className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/complain">
            Complain
          </Link>
        </li>,
        <li key="category" className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/category">
            Category
          </Link>
        </li>,
        <li key="product" className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/product">
            Product
          </Link>
        </li>,
        <li key="login" className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/login">
            Logout
          </Link>
        </li>,
      ];
    }
  }
  if (page) {
    li?.find((x) => x.key == page);
    var liIndex = li
      .map(function (e) {
        return e.key;
      })
      .indexOf(page);
    li[liIndex] = (
      <li key={page} className="nav-item">
        <Link
          className="nav-link active primary-color-text text-capitalize"
          aria-current="page"
          to={"/" + page}
        >
          {page}
        </Link>
      </li>
    );
  }
  return (
    <div className="sticky-top">
      <nav
        className="navbar navbar-expand-lg navbar-dark mx-3 mb-4"
        style={{ backgroundColor: "black", maxHeight: "60px" }}
      >
        <div className="container-fluid  pb-2 pt-2">
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
              {li.map((li) => li)}
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
