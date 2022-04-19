/* eslint-disable no-unused-vars */
import "./App.css";
import "./styles/Style.css";
import Login from "./pages/Login";
import { Route, Routes, useNavigate } from "react-router-dom";
import Register from "./pages/Register";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import Buy from "./components/Buy";
import Profile from "./pages/Profile";
import CategoryAdmin from "./pages/CategoryAdmin";
import ProductAdmin from "./pages/ProductAdmin";
import CategoryEdit from "./pages/CategoryEdit";
import ProductEdit from "./pages/ProductEdit";
import Complain from "./pages/Complain";
import NotFound from "./pages/NotFound";
import ProductAdd from "./pages/ProductAdd";
import { useContext, useEffect } from "react";
import { UserContext } from "./context/user";
import { API, setAuthToken } from "./config/api";
import ComplainAdmin from "./pages/ComplainAdmin";
import CategoryAdd from "./pages/CategoryAdd";

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  let navigate = useNavigate();
  const [state, dispatch] = useContext(UserContext);

  useEffect(() => {
    if (localStorage.token) {
      setAuthToken(localStorage.token);
    }

    if (state.isLogin === false) {
      navigate("/login");
    } else {
      if (
        state.user.role.name === "admin" ||
        state.user.role.name === "super admin" ||
        state.user.role.name === "seller"
      ) {
        navigate("/product-admin");
      } else if (state.user.role.name === "customer") {
        navigate("/profile");
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const checkUser = async () => {
    try {
      const response = await API.get("/me");

      if (response.status === 404) {
        return dispatch({
          type: "AUTH_ERROR",
        });
      }

      let payload = response.data.data.user;
      payload.token = localStorage.token;

      dispatch({
        type: "AUTH_SUCCESS",
        payload,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (localStorage.token) {
      checkUser();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Routes>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/" element={<Home />} />
        <Route exact path="/product/:id" element={<ProductDetail />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/buy/:id" element={<Buy />} />
        <Route exact path="/complain" element={<Complain />} />
        <Route exact path="/complain-admin" element={<ComplainAdmin />} />
        <Route exact path="/category-admin" element={<CategoryAdmin />} />
        <Route exact path="/category-edit" element={<CategoryEdit />} />
        <Route exact path="/category-add" element={<CategoryAdd />} />
        <Route exact path="/product-admin" element={<ProductAdmin />} />
        <Route exact path="/product-add" element={<ProductAdd />} />
        <Route exact path="/product-edit" element={<ProductEdit />} />
        <Route exact path="/not-found" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
