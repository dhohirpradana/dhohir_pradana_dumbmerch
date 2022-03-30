import React from "react";
import NavBar from "../components/NavBar";
import Product from "../components/Product";

export default function Home() {
  var products = JSON.parse(localStorage.getItem("tb_product"));
  console.log(products);
  let productComponents = [];

  for (const data of products) {
    productComponents.push(<Product key={data.id} dataProduct={data} />);
  }

  return (
    <div>
      <NavBar />
      <div className="mx-5 pt-1">
        <div className="fw-bold primary-color-text">Product</div>
        <div className="mt-3 d-flex">
          <div className="row mb-4">
            {products.map((product, index) => (
              <Product key={index} dataProduct={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
