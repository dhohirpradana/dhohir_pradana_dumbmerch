import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function ProductEdit() {
  const { state } = useLocation();
  const editForm = useRef(null);
  var products = JSON.parse(localStorage.products);
  const navigate = useNavigate();

  console.log(state);

  const handleSave = () => {
    const form = editForm.current;
    for (var i = 0; i < products.length; i++) {
      if (state.id === products[i].id) {
        products[i].name = form["name"].value;
        products[i].description = form["description"].value;
        products[i].price = form["price"].value;
        products[i].qty = form["qty"].value;
        break;
      }
    }
    localStorage.setItem("products", JSON.stringify(products));
    navigate("/product");
  };

  return (
    <div>
      <NavBar page="product" />
      <div className="mx-5 pt-1">
        <div className="fw-bold fs-4 text-light mt-4">Edit Product</div>
        <form ref={editForm}>
          <div className="mt-4 edit">
            <input
              type="text"
              name="name"
              className="form-control mb-4"
              placeholder="Name"
              defaultValue={state.name}
            />
            <textarea
              rows={7}
              type="text"
              name="description"
              className="form-control mb-4"
              placeholder="Description"
              defaultValue={state.description}
            />
            <input
              type="text"
              name="price"
              className="form-control mb-4"
              placeholder="Price"
              defaultValue={state.price}
            />
            <input
              type="text"
              name="qty"
              className="form-control"
              placeholder="Qty"
              defaultValue={state.qty}
            />
          </div>
          <div className="mt-5">
            <button
              style={{ width: "100%" }}
              type="button"
              onClick={handleSave}
              className="btn btn-success text-capitalize"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
