/* eslint-disable eqeqeq */
import { MDBCardBody } from "mdb-react-ui-kit";
import React from "react";

export default function MyTransaction(props) {
  var products = JSON.parse(localStorage.getItem("tb_product"));
  var product = products?.find((x) => x.id == props.transaction.id);
  return (
    <div>
      <MDBCardBody className="d-flex" style={{ padding: "10px 20px" }}>
        <div className="me-2">
          <img
            style={{ height: "110px", width: "75px" }}
            src={product.src}
            alt={props.transaction.id}
          ></img>
        </div>
        <div className="text-start">
          <div className="primary-color-text" style={{ fontSize: 14 }}>
            {product.name}
          </div>
          <div className="primary-color-text" style={{ fontSize: 10 }}>
            {props.transaction.date}
          </div>
        </div>
      </MDBCardBody>
    </div>
  );
}
