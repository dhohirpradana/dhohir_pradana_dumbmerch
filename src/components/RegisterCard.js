import { MDBCard } from "mdb-react-ui-kit";
import React, { useRef, useState } from "react";
import { Alert, Button, Card, Form } from "react-bootstrap";
import { useMutation } from "react-query";
import { API } from "../config/api";

export default function RegisterCard() {
  const form = useRef();
  const [message, setMessage] = useState();

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
        name: form.current["name"].value,
        email: form.current["email"].value,
        password: form.current["password"].value,
      });

      const response = await API.post("/register", body, config);
      console.log(response.data.data);
    } catch (error) {
      const msg = error.response.data.error.message;
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
          <h3 className="mb-4 text-start">Register</h3>
          {message}
          <form ref={form} onSubmit={(e) => handleSubmit.mutate(e)}>
            <Form.Control
              type="text"
              name="name"
              className="mb-3"
              placeholder="Name"
            />
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
              Register
            </Button>
          </form>
        </Card.Body>
      </MDBCard>
    </div>
  );
}
