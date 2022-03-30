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
      description: `- Wireless Mouse
      - Konektivitas wireless 2.4 GHz
      - Jarak wireless hingga 10 m
      - Plug and Play
      - Baterai tahan hingga 12 bulan
      
      Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.`,
      stock: 600,
    },
    {
      id: 2,
      name: "Keyboard",
      src: "https://images.unsplash.com/photo-1648558846349-5ea5618bb118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      price: "700.000",
      description: `- Wireless Mouse
      - Konektivitas wireless 2.4 GHz
      - Jarak wireless hingga 10 m
      - Plug and Play
      - Baterai tahan hingga 12 bulan
      
      Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.`,
      stock: 600,
    },
  ];
  localStorage.setItem("products", JSON.stringify(products));
  let productComponents = [];

  for (const data of products) {
    productComponents.push(<Product key={data.id} dataProduct={data} />);
  }

  return (
    <div>
      <NavBar />
      <div className="mx-5 pt-1">
        <div className="fw-bold primary-color-text">Product</div>
        <div className="mt-3 d-flex">{productComponents}</div>
      </div>
    </div>
  );
}
