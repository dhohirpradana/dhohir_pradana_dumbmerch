/* eslint-disable eqeqeq */
import { Outlet, Navigate } from "react-router-dom";

export default function ProtectedRoute(props) {
  return props.user.role == 3 ? <Outlet /> : <Navigate to="/login" />;
}
