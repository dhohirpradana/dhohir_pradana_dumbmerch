import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import React from "react";
import { useNavigate } from "react-router-dom";

export default function LoginCard() {
  const navigate = useNavigate();
  return (
    <div className="ms-5">
      <MDBCard
        background="dark"
        style={{ width: "18rem", color: "white" }}
        alignment="center"
      >
        <MDBCardBody className="auth">
          <h3 className="mb-4 text-start">Login</h3>
          <input
            type="text"
            id="email"
            className="form-control mb-3"
            placeholder="Email"
          />
          <input
            type="password"
            id="password"
            className="form-control mb-4"
            placeholder="Password"
          />
          <button
            onClick={() => navigate("/")}
            className="btn text-light mt-2 primary-color text-capitalize"
            style={{ width: "100%" }}
          >
            Login
          </button>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
