/* eslint-disable eqeqeq */
import React, { useContext } from "react";
import { Nav } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

export default function NavBar(props) {
  // eslint-disable-next-line no-unused-vars
  const [state, dispatch] = useContext(UserContext);
  const user = state.user;
  var page = props.page;

  let navigate = useNavigate();

  const logout = () => {
    dispatch({
      type: "LOGOUT",
    });
    navigate("/login");
  };

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
    <li key="logout" className="nav-item">
      <Nav.Link
        className="nav-link active"
        aria-current="page"
        onClick={logout}
      >
        Logout
      </Nav.Link>
    </li>,
  ];

  if (user.role && user.role.id > 1) {
    li = [
      <li key="complain" className="nav-item">
        <Link className="nav-link active" aria-current="page" to="/complain-admin">
          Complain
        </Link>
      </li>,
      <li key="category" className="nav-item">
        <Link
          className="nav-link active"
          aria-current="page"
          to="/category-admin"
        >
          Category
        </Link>
      </li>,
      <li key="product" className="nav-item">
        <Link
          className="nav-link active"
          aria-current="page"
          to="/product-admin"
        >
          Product
        </Link>
      </li>,
      <li key="logout" className="nav-item">
        <Nav.Link
          className="nav-link active"
          aria-current="page"
          onClick={logout}
        >
          Logout
        </Nav.Link>
      </li>,
    ];
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
                <Link to={"/"}>
                  <img
                    src="/sumbmerch.png"
                    alt="app-logo"
                    style={{ height: "50px" }}
                  />
                </Link>
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
