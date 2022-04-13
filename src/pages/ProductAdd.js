import React, { useEffect, useRef, useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";
import { useMutation } from "react-query";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { API } from "../config/api";

export default function ProductAdd() {
  const form = useRef();
  const navigate = useNavigate();
  const [file, setFile] = useState();
  const [message, setMessage] = useState();
  const [preview, setPreview] = useState();

  useEffect(() => {
    if (!file) {
      setPreview(null);
      return;
    }

    const objectUrl = URL.createObjectURL(file);
    setPreview(objectUrl);

    return () => URL.revokeObjectURL(objectUrl);
  }, [file]);

  const handleSubmit = useMutation(async (e) => {
    setMessage(null);
    try {
      e.preventDefault();

      const config = {
        headers: {
          "Content-type": "multipart/form-data",
        },
      };

      const formData = new FormData();
      if (file) formData.set("image", file, file.name);
      formData.set("name", form.current.name.value);
      formData.set("desc", form.current.desc.value);
      formData.set("price", form.current.price.value);
      formData.set("qty", form.current.qty.value);

      const response = await API.post(`/product`, formData, config);

      console.log(response);
      navigate("/product-admin");
    } catch (error) {
      const msg = !file
        ? error.response.data.message
        : error.response.data.error.message;
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
      <NavBar page="product" />
      <div className="mx-5 pt-1 mb-2">
        <div className="fw-bold fs-4 text-light mb-2">Add Product</div>
        {message}
        <form ref={form} onSubmit={(e) => handleSubmit.mutate(e)}>
          <div className="mt-4 mb-5 edit">
            {file && (
              <img src={preview} alt="preview" style={{ width: "10vw" }} />
            )}
            <Form.Control
              accept="image/png, image/jpeg, image/jpg"
              type="file"
              name="image"
              className="mt-2 mb-4"
              single
              onChange={(e) => {
                setFile(e.target.files[0]);
              }}
            />
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
            <Form.Control type="text" name="qty" placeholder="Qty" />
          </div>
          <Button
            style={{ width: "100%" }}
            type="submit"
            className="btn-success text-capitalize mb-4"
          >
            Save
          </Button>
        </form>
      </div>
    </div>
  );
}
