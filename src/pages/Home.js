import React, { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import ProductCard from "../components/ProductCard";
import { API } from "../config/api";

export default function Home() {
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await API.get("/products", config);
      setProducts(response.data.data.products);
    } catch (error) {
      console.log(error);
    }
  };

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
