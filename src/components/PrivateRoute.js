import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {
  let user = JSON.parse(localStorage.getItem("user"));
  return user ? <Outlet /> : <Navigate to="/login" />;
}
