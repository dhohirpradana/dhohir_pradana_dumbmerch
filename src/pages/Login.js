import React from "react";
import LoginCard from "../components/LoginCard";
import AuthLeft from "../components/AuthLeft";

export default function Login() {
  return (
    <div className="d-flex p-2 justify-content-center">
      <AuthLeft />
      <LoginCard />
    </div>
  );
}
