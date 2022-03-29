import React from "react";
import LoginCard from "../components/LoginCard";
import AuthLeft from "../components/AuthLeft";

export default function Login() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <AuthLeft />
      <LoginCard />
    </div>
  );
}
