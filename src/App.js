/* eslint-disable no-unused-vars */
import "./App.css";
import "./styles/Style.css";
import Login from "./pages/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import ProductDetail from "./pages/ProductDetail";
import Buy from "./components/Buy";
import Profile from "./pages/Profile";
import Category from "./pages/Category";
import Product from "./pages/Product";
import CategoryEdit from "./pages/CategoryEdit";
import ProductEdit from "./pages/ProductEdit";
import ProtectedRoute from "./components/ProtectedRoute";
import Complain from "./pages/Complain";

function App() {
  let products = [
    {
      id: 1,
      name: "Mouse",
      src: "https://mdbcdn.b-cdn.net/img/new/standard/nature/182.webp",
      price: 500000,
      weight: 1000,
      description: `- Wireless Mouse
      - Konektivitas wireless 2.4 GHz
      - Jarak wireless hingga 10 m
      - Plug and Play
      - Baterai tahan hingga 12 bulan
      
      Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.`,
      qty: 600,
    },
    {
      id: 2,
      name: "Keyboard",
      src: "https://images.unsplash.com/photo-1648558846349-5ea5618bb118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      price: 700000,
      weight: 1000,
      description: `- Wireless Mouse
      - Konektivitas wireless 2.4 GHz
      - Jarak wireless hingga 10 m
      - Plug and Play
      - Baterai tahan hingga 12 bulan
      
      Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.`,
      qty: 600,
    },
    {
      id: 3,
      name: "Keyboard",
      src: "https://images.unsplash.com/photo-1648558846349-5ea5618bb118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      price: 700000,
      weight: 1000,
      description: `- Wireless Mouse
      - Konektivitas wireless 2.4 GHz
      - Jarak wireless hingga 10 m
      - Plug and Play
      - Baterai tahan hingga 12 bulan
      
      Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.`,
      qty: 600,
    },
    {
      id: 4,
      name: "Keyboard",
      src: "https://images.unsplash.com/photo-1648558846349-5ea5618bb118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      price: 700000,
      weight: 1000,
      description: `- Wireless Mouse
      - Konektivitas wireless 2.4 GHz
      - Jarak wireless hingga 10 m
      - Plug and Play
      - Baterai tahan hingga 12 bulan
      
      Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.`,
      qty: 600,
    },
    {
      id: 5,
      name: "Keyboard",
      src: "https://images.unsplash.com/photo-1648558846349-5ea5618bb118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      price: 700000,
      weight: 1000,
      description: `- Wireless Mouse
      - Konektivitas wireless 2.4 GHz
      - Jarak wireless hingga 10 m
      - Plug and Play
      - Baterai tahan hingga 12 bulan
      
      Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.`,
      qty: 600,
    },
    {
      id: 6,
      name: "Keyboard",
      src: "https://images.unsplash.com/photo-1648558846349-5ea5618bb118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      price: 700000,
      weight: 1000,
      description: `- Wireless Mouse
      - Konektivitas wireless 2.4 GHz
      - Jarak wireless hingga 10 m
      - Plug and Play
      - Baterai tahan hingga 12 bulan
      
      Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.`,
      qty: 600,
    },
    {
      id: 7,
      name: "Keyboard",
      src: "https://images.unsplash.com/photo-1648558846349-5ea5618bb118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      price: 700000,
      weight: 1000,
      description: `- Wireless Mouse
      - Konektivitas wireless 2.4 GHz
      - Jarak wireless hingga 10 m
      - Plug and Play
      - Baterai tahan hingga 12 bulan
      
      Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.`,
      qty: 600,
    },
    {
      id: 8,
      name: "Keyboard",
      src: "https://images.unsplash.com/photo-1648558846349-5ea5618bb118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      price: 700000,
      weight: 1000,
      description: `- Wireless Mouse
      - Konektivitas wireless 2.4 GHz
      - Jarak wireless hingga 10 m
      - Plug and Play
      - Baterai tahan hingga 12 bulan
      
      Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.`,
      qty: 600,
    },
    {
      id: 9,
      name: "Keyboard",
      src: "https://images.unsplash.com/photo-1648558846349-5ea5618bb118?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80",
      price: 700000,
      weight: 1000,
      description: `- Wireless Mouse
      - Konektivitas wireless 2.4 GHz
      - Jarak wireless hingga 10 m
      - Plug and Play
      - Baterai tahan hingga 12 bulan
      
      Mouse Wireless Alytech AL - Y5D, hadir dengan desain 3 tombol mouse yang ringan dan mudah dibawa. Mouse ini menggunakan frekuensi radio 2.4GHz (bekerja hingga jarak 10m) dan fitur sensor canggih optik pelacakan dengan penerima USB yang kecil. Mouse ini didukung oleh 1x baterai AA (hingga 12 bulan hidup baterai). mendukung sistem operasi Windows 7,8, 10 keatas, Mac OS X 10.8 atau yang lebih baru dan sistem operasi Chrome OS.`,
      qty: 300,
    },
  ];

  let transactions = [
    {
      id: 1,
      date: "Wed Mar 30 2022 13:08:48 GMT+0700 (Waktu Indonesia Barat)",
      price: 500000,
      count: 1,
      discount: 0,
      user_id: 1,
    },
    {
      id: 2,
      date: "Wed Mar 30 2022 13:08:48 GMT+0700 (Waktu Indonesia Barat)",
      price: 600000,
      count: 2,
      discount: 0,
      user_id: 1,
    },
  ];

  const categories = [
    { id: 1, name: "Mouse" },
    { id: 2, name: "Keyboard" },
    { id: 3, name: "Monitor" },
    { id: 4, name: "HDD" },
    { id: 5, name: "HDD" },
    { id: 6, name: "HDD" },
    { id: 7, name: "HDD" },
    { id: 8, name: "HDD" },
  ];

  const user = {
    id: 1,
    name: "Dhohir Pradana",
    email: "contact@dhohirpradana.com",
    phone: "081335343635",
    gender: "Male",
    address: `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's. Grobogan, Indonesia`,
    destinationAddress: [{ city: "Grobogan", cityId: 134 }],
    role: 3,
  };

  // localStorage.setItem("products", JSON.stringify(products));
  // localStorage.setItem("transactions", JSON.stringify(transactions));
  // localStorage.setItem("categories", JSON.stringify(categories));
  localStorage.setItem("user", JSON.stringify(user));

  return (
    <>
      <Router>
        <Routes>
          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />
          <Route element={<PrivateRoute user={user} />}>
            <Route exact path="/" element={<Home />} />
            <Route
              exact
              path="/product-detail/:id"
              element={<ProductDetail />}
            />
            <Route exact path="/buy/:id" element={<Buy />} />
            <Route exact path="/profile" element={<Profile />} />
            <Route exact path="/complain" element={<Complain />} />
            <Route element={<ProtectedRoute user={user} />}>
              <Route exact path="/category" element={<Category />} />
              <Route exact path="/category-edit" element={<CategoryEdit />} />
              <Route exact path="/product" element={<Product />} />
              <Route exact path="/product-edit" element={<ProductEdit />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
