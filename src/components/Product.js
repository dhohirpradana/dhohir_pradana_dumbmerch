import React from "react";
import { useNavigate } from "react-router-dom";
import NumFormat from "./NumFormat";

export default function Product(props) {
  const dataProduct = props.dataProduct;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/product-detail/" + dataProduct.id)}
      className="card text-white bg-dark m-2 p-0"
      style={{ width: "10.3rem" }}
    >
      <img
        src={dataProduct.src}
        className="card-img-top"
        alt="Sunset Over the Sea"
        style={{ height: "12rem" }}
      />
      <div className="px-2 py-2">
        <div
          className="fw-bold primary-color-text"
          style={{ fontSize: "14px" }}
        >
          {dataProduct.name}
        </div>
        <div className="fw-light mt-1" style={{ fontSize: "11px" }}>
          {NumFormat(dataProduct?.price, "Rp.")}
        </div>
        <div className="fw-light" style={{ fontSize: "11px" }}>
          Stock &nbsp;:&nbsp; {dataProduct?.stock ?? " -"}
        </div>
      </div>
    </div>
  );
}
