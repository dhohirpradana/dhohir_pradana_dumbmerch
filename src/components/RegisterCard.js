import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import React from "react";

export default function RegisterCard() {
  return (
    <div className="ms-5">
      <MDBCard
        background="dark"
        style={{ width: "18rem", color: "white" }}
        alignment="center"
      >
        <MDBCardBody className="auth">
          <h3 className="mb-4 text-start">Register</h3>
          <input
            type="text"
            id="name"
            className="form-control mb-3"
            placeholder="Name"
          />
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
            className="btn text-light mt-2 primary-color text-capitalize"
            style={{ width: "100%" }}
          >
            Register
          </button>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
