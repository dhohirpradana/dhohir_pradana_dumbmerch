import React from "react";
import NavBar from "../components/NavBar";
import Product from "../components/Product";

export default function Home() {
  let products = [
    {
      id: 1,
      name: "Mouse",
      src: "https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp",
      price: "500.000",
      stock: 600,
    },
    {
      id: 2,
      name: "Keyboard",
      src: "https://images.unsplash.com/photo-1648558846349-5ea5618bb118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      price: "700.000",
      stock: 600,
    },
  ];
  let productComponents = [];

  for (const data of products) {
    productComponents.push(<Product key={data.id} dataProduct={data} />);
  }

  return (
    <div>
      <NavBar />
      <div className="mx-5 mt-4 pt-1">
        <div className="fw-bold primary-color-text">Product</div>
        <div className="mt-3 d-flex">{productComponents}</div>
      </div>
    </div>
  );
}
