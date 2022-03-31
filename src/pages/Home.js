import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import Product from "../components/Product";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => setProducts(JSON.parse(localStorage.getItem("products"))), []);
  return (
    <div>
      <NavBar />
      <div className="mx-5 pt-1">
        <div className="fw-bold fs-4 primary-color-text">Product</div>
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
