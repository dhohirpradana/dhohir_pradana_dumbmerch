/* eslint-disable eqeqeq */
import { MDBCard, MDBCardBody } from "mdb-react-ui-kit";
import React from "react";
import DayDate from "./DayDate";
import NumFormat from "./NumFormat";

export default function MyTransaction(props) {
  var transaction = props.transaction;
  var product = transaction.product;
  var price = NumFormat(transaction.price, "Rp.");
  var subTotal = NumFormat(transaction.total, "Rp.");
  var date = DayDate(transaction.createdAt);
  return (
    <div>
      <MDBCard
        className="mb-3"
        background="dark"
        style={{ width: "100%", color: "white", borderRadius: "0" }}
        alignment="center"
      >
        <MDBCardBody className="d-flex" style={{ padding: "10px 20px" }}>
          <div className="d-flex" style={{ width: "80%" }}>
            <div className="me-2">
              <img
                style={{ height: "100px", width: "70px" }}
                src={product.image}
                alt={transaction.id}
              ></img>
            </div>
            <div className="text-start">
              <div className="primary-color-text" style={{ fontSize: 14 }}>
                {product.name}
              </div>
              <div className="d-flex">
                <div
                  className="primary-color-text me-1"
                  style={{ fontSize: 10, fontWeight: "bold" }}
                >
                  {date.day + ","}
                </div>
                <div
                  className="primary-color-text"
                  style={{ fontSize: 10, fontWeight: "lighter" }}
                >
                  {date.date + " " + date.month + " " + date.year}
                </div>
              </div>
              <div
                className="mt-1"
                style={{ fontSize: 10, fontWeight: "lighter" }}
              >
                Price : {price} " x" {transaction.total}
              </div>
              <div
                className="mt-1"
                style={{ fontSize: 10, fontWeight: "lighter" }}
              >
                x{transaction.total}
              </div>
              <div
                className="mt-4"
                style={{ fontSize: 12, fontWeight: "bold" }}
              >
                Sub Total : {subTotal}
              </div>
            </div>
          </div>
          <div
            className="d-flex flex-row-reverse align-items-center"
            style={{ width: "20%" }}
          >
            {transaction.paymentStatus}
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
