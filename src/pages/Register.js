import React from "react";
import RegisterCard from "../components/RegisterCard";
import AuthLeft from "../components/AuthLeft";

export default function Register() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "100vh" }}
    >
      <AuthLeft />
      <RegisterCard />
    </div>
  );
}
