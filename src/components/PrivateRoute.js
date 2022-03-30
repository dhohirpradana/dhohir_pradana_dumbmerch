import { Outlet, Navigate } from "react-router-dom";

export default function PrivateRoute() {  
  const isLogin = true;
  return isLogin ? <Outlet /> : <Navigate to="/login" />;
}
