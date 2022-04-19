import React, { useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { API } from "../config/api";

export default function CategoryAdd() {
  const form = useRef();
  const [message, setMessage] = useState();
  const navigate = useNavigate();

  const handleSubmit = useMutation(async (e) => {
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const body = JSON.stringify({
        name: form.current.name.value,
      });

      const response = await API.post(`/category`, body, config);

      console.log(response);
      navigate("/category-admin");
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
    <div>
      <NavBar page="category" />
      <div className="mx-5 pt-1 mb-2">
        <div className="fw-bold fs-4 text-light mb-2">Add Category</div>
        {message}
        <form ref={form} onSubmit={(e) => handleSubmit.mutate(e)}>
          <div className="mt-4 Add">
            <Form.Control type="text" name="name" placeholder="Name" />
          </div>
          <div className="mt-5">
            <Button
              type="submit"
              style={{ width: "100%" }}
              className="btn-success text-capitalize"
            >
              Save
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
