import React, { useRef } from "react";
import { Button, Form } from "react-bootstrap";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { API } from "../config/api";

export default function ProductAdd() {
  const form = useRef();
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
        name: form.current["name"].value,
        desc: form.current["desc"].value,
        price: form.current["price"].value,
        qty: form.current["qty"].value,
      });

      const response = await API.post(`/product`, body, config);

      console.log(response);
      navigate("/product");
    } catch (error) {
      // const msg = error.response.data.error.message;
      console.log(error.response.data);
    }
  });

  return (
    <div>
      <NavBar page="product" />
      <div className="mx-5 pt-1">
        <div className="fw-bold fs-4 text-light mt-4">Add Product</div>
        <form ref={form} onSubmit={(e) => handleSubmit.mutate(e)}>
          <div className="mt-4 mb-5 edit">
            <Form.Control
              type="text"
              name="name"
              className="mb-4"
              placeholder="Name"
            />
            <Form.Control
              as="textarea"
              rows={7}
              type="text"
              name="desc"
              className="mb-4"
              placeholder="Description"
            />
            <Form.Control
              type="text"
              name="price"
              className="mb-4"
              placeholder="Price"
            />
            <Form.Control
              type="text"
              name="qty"
              placeholder="Qty"
            />
          </div>
          <Button
            style={{ width: "100%" }}
            type="submit"
            className="btn-success text-capitalize"
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  );
}
