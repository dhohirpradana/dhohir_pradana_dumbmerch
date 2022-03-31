import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";

export default function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => setProducts(JSON.parse(localStorage.getItem("products"))), []);
  return (
    <div>
      <NavBar />
      <div className="mx-5 pt-1">
        <div className="fw-bold fs-4 primary-color-text mb-3">Product</div>
        <div className="d-flex">
          <div className="row mb-4">
            {products.map((product, index) => (
              <ProductCard key={index} dataProduct={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
