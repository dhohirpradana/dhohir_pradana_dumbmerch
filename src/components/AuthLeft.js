import React from "react";
import { MDBBtn } from "mdb-react-ui-kit";
import { useNavigate  } from "react-router-dom";

export default function AuthLeft() {
  const navigate = useNavigate ();
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
        <MDBBtn
          className="mt-3 btn-sm primary-color me-3 text-capitalize"
          style={{ width: "100px" }}
        >
          Login
        </MDBBtn>
        <button
          onClick={() => navigate("/register")}
          type="button"
          className="btn btn-sm btn-link text-white text-capitalize"
          data-mdb-ripple-color="dark"
          style={{ backgroundColor: "black" }}
        >
          Register
        </button>
      </div>
    </div>
  );
}
