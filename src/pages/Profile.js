/* eslint-disable no-unused-vars */
import { useContext, useEffect, useState } from "react";
import MyTransaction from "../components/MyTransaction";
import NavBar from "../components/NavBar";
import { API } from "../config/api";
import { UserContext } from "../context/user";

export default function Profile() {
  const [user, setUser] = useState();
  console.log(user);
  const [transactions, setTransactions] = useState([]);
  const [shippingAddress, setShippingAddress] = useState();
  useEffect(() => {
    fetchMe();
    fetchShippingAddress();
    fetchTransactions();
  }, []);

  const fetchMe = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await API.get("/me", config);
      console.log(response);
      setUser(response.data.data.user);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchShippingAddress = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await API.get("/shipping-address", config);
      console.log(response);
      setShippingAddress(response.data.data.address);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTransactions = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };
      const response = await API.get("/purchases", config);
      console.log(response);
      setTransactions(response.data.data.transactions);
    } catch (error) {
      console.log(error);
    }
  };
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
                <div>{user?.name}</div>
              </div>
              <div className="mb-3">
                <div className="primary-color-text">Email</div>
                <div>{user?.email}</div>
              </div>
              <div className="mb-3">
                <div className="primary-color-text">Phone</div>
                <div>{user?.profiles[0].phone}</div>
              </div>
              <div className="mb-3">
                <div className="primary-color-text">Gender</div>
                <div>{user?.profiles[0].gender.name}</div>
              </div>
              <div>
                <div className="primary-color-text">Address</div>
                <div id="p_wrap">{shippingAddress?.detail}</div>
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
