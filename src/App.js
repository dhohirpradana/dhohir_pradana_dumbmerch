import "./App.css";
import "./styles/Style.css";
import Login from "./pages/Login";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import PrivateRoute from "./components/PrivateRoute";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route element={<PrivateRoute />}>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/product-detail/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
