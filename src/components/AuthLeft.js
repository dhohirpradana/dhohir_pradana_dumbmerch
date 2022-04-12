import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Button } from "react-bootstrap";

export default function AuthLeft() {
  const location = useLocation().pathname;
  const button = {
    login: {
      style: {
        width: "100px",
        backgroundColor: location === "/register" ? "black" : "",
      },
      class:
        location === "/login"
          ? "mt-3 btn-sm primary-color me-3 text-capitalize"
          : "mt-3 btn-sm me-3 text-capitalize",
    },
    register: {
      style: {
        width: "100px",
        backgroundColor: location === "/login" ? "black" : "",
      },
      class:
        location === "/register"
          ? "mt-3 btn-sm primary-color me-3 text-capitalize"
          : "mt-3 btn-sm me-3 text-capitalize",
    },
  };
  const navigate = useNavigate();
  return (
    <div className="d-inline-bloc me-5">
      <div className="pt-5">
        <img
          className="mt-3"
          src="sumbmerch.png"
          alt="dummerch-logo"
          height="180px"
        />
      </div>
      <div className="text-white mt-4">
        <h1>Easy, Fast and Reliable</h1>
      </div>
      <div className="mb-5">
        <div>Go shopping for merchandise, just go to dumb merch</div>
        <span>shopping. the biggest merchandise in </span>
        <span className="fw-bold">Indonesia</span>
      </div>
      <div>
        <Button
          variant="dark"
          onClick={() => navigate("/login")}
          className={button.login.class}
          style={button.login.style}
        >
          Login
        </Button>
        <Button
          variant="dark"
          onClick={() => navigate("/register")}
          className={button.register.class}
          style={button.register.style}
        >
          Register
        </Button>
      </div>
    </div>
  );
}
