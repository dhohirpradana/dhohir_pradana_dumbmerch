import React from "react";
import MyTransaction from "../components/MyTransaction";
import NavBar from "../components/NavBar";

export default function Profile() {
  var transactions = JSON.parse(localStorage.getItem("transactions"));
  return (
    <div>
      <NavBar page="profile" />
      <div className="mx-5 d-flex justify-content-center">
        {/* L */}
        <div className="me-1">
          <div className="fw-bold fs-4 primary-color-text">My Profile</div>
          <div className="d-flex mt-4 align-items-start">
            {/* L */}
            <div className="me-4">
              <img
                src="https://images.unsplash.com/photo-1583692331507-fc0bd348695d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80"
                alt="profilePicture"
                style={{ height: "370px", width: "275px", objectFit: "cover" }}
              ></img>
            </div>
            {/* R */}
            <div className="text-light fw-light">
              <div className="mb-3">
                <div className="primary-color-text">Name</div>
                <div>Dhohir Pradana</div>
              </div>
              <div className="mb-3">
                <div className="primary-color-text">Email</div>
                <div>contact@dhohirpradana.com</div>
              </div>
              <div className="mb-3">
                <div className="primary-color-text">Phone</div>
                <div>081335343635</div>
              </div>
              <div className="mb-3">
                <div className="primary-color-text">Gender</div>
                <div>Male</div>
              </div>
              <div>
                <div className="primary-color-text">Address</div>
                <div id="p_wrap">
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* R */}
        <div style={{ width: "55%" }}>
          <div className="fw-bold fs-4 primary-color-text mb-4">
            My Transaction
          </div>
          {transactions.map((transaction, index) => (
            <MyTransaction key={index} transaction={transaction} />
          ))}
        </div>
      </div>
    </div>
  );
}
