/* eslint-disable no-unused-vars */
import { MDBCard } from "mdb-react-ui-kit";
import React, { useContext, useRef, useState } from "react";
import { useMutation } from "react-query";
import { API } from "../config/api";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../context/user";

export default function LoginCard() {
  const navigate = useNavigate();
  const form = useRef();
  const [message, setMessage] = useState();
  const [state, dispatch] = useContext(UserContext);

  const handleSubmit = useMutation(async (e) => {
    setMessage(null);
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify({
        email: form.current["email"].value,
        password: form.current["password"].value,
      });

      const response = await API.post("/login", body, config);
      const user = response.data.data;

      if (response.status === 200) {
        dispatch({
          type: "LOGIN_SUCCESS",
          payload: user,
        });

        if (user.role.name === "customer") {
          navigate("/");
        } else {
          navigate("/product-admin");
        }
      }
    } catch (error) {
      const msg = error.response.data.error.message;
      console.log(error.response);
      const alert = (
        <Alert variant="danger" className="py-1 text-start">
          {msg}
        </Alert>
      );
      setMessage(alert);
    }
  });

  return (
    <div className="ms-5">
      <MDBCard
        background="dark"
        style={{ width: "18rem", color: "white" }}
        alignment="center"
      >
        <Card.Body className="auth">
          <h3 className="mb-4 text-start">Login</h3>
          {message}
          <form ref={form} onSubmit={(e) => handleSubmit.mutate(e)}>
            <Form.Control
              type="text"
              name="email"
              className="mb-3"
              placeholder="Email"
            />
            <Form.Control
              type="password"
              name="password"
              className="mb-4"
              placeholder="Password"
            />
            <Button
              type="submit"
              variant="dark"
              className="mt-2 primary-color text-capitalize"
              style={{ width: "100%" }}
            >
              Login
            </Button>
          </form>
        </Card.Body>
      </MDBCard>
    </div>
  );
}
