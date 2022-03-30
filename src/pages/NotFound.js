import React from "react";

export default function NotFound() {
  return (
    <div
      className="d-flex"
      style={{
        width: "100%",
        height: "100vh",
        backgroundColor: "black",
        alignItems: "center",
        justifyContent: "center",
        fontSize:"30px"
      }}
    >
      <p>404, page not found.</p>
    </div>
  );
}
