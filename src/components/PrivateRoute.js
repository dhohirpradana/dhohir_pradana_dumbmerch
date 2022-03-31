/* eslint-disable eqeqeq */
import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute(props) {
  return props.user ? <Outlet /> : <Navigate to="/login" />;
}
