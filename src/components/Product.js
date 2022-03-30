import React from "react";
import { useNavigate } from "react-router-dom";

export default function Product(props) {
  const dataProduct = props.dataProduct;
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate("/product-detail/" + dataProduct?.id)}
      className="card text-white bg-dark me-2"
      style={{ width: "10rem" }}
    >
      <img
        src={dataProduct?.src}
        className="card-img-top"
        alt="Sunset Over the Sea"
        style={{ height: "12rem" }}
      />
      <div className="px-2 py-2">
        <div
          className="fw-bold primary-color-text"
          style={{ fontSize: "14px" }}
        >
          {dataProduct?.name}
        </div>
        <div className="fw-light mt-1" style={{ fontSize: "11px" }}>
          Rp.{dataProduct?.price}
        </div>
        <div className="fw-light" style={{ fontSize: "11px" }}>
          Stock &nbsp;:&nbsp; {dataProduct?.stock ?? " -"}
        </div>
      </div>
    </div>
  );
}
