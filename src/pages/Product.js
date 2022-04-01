/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import NumFormat from "../components/NumFormat";

export default function Product() {
  const [products, setProducts] = useState(
    JSON.parse(localStorage.getItem("products"))
  );
  const [productsId, setproductsId] = useState("");
  const navigate = useNavigate();

  const handleDeleteClick = (id) => {
    setproductsId(id);
  };

  const deleteProduct = (id) => {
    setProducts(products.filter((item) => item.id != id));
  };

  const handleEditClick = (id) => {
    navigate("/product-edit", {
      state: products.filter((item) => item.id == id)[0],
    });
  };
  return (
    <div>
      <NavBar page="product" />
      <div className="mx-5 pt-1">
        <div className="fw-bold fs-4 text-light mb-3 mt-4">List Product</div>
        <div className="table-wrapper">
          <table className="table table-striped table-dark">
            <thead className="sticky-top">
              <tr>
                <th scope="col" style={{ width: "50px" }}>
                  No
                </th>
                <th scope="col">Photo</th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Desc</th>
                <th scope="col">Price</th>
                <th scope="col">Qty</th>
                <th scope="col" style={{ width: "300px" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">{"product" + (index + 1) + ".jpg"}</th>
                  <td id="td_no_wrap">{product.name}</td>
                  <td id="td_no_wrap">{product.description}</td>
                  <td>{NumFormat(product.price)}</td>
                  <td>{product.qty}</td>
                  <td>
                    <button
                      style={{ width: "100px" }}
                      type="button"
                      onClick={() => handleEditClick(product.id)}
                      className="btn btn-sm btn-success me-3"
                    >
                      Edit
                    </button>
                    <button
                      style={{ width: "100px" }}
                      type="button"
                      onClick={() => handleDeleteClick(product.id)}
                      className="btn btn-sm btn-danger"
                      data-mdb-toggle="modal"
                      data-mdb-target="#exampleModal"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Modal */}
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Delete Data
              </h5>
              <button
                type="button"
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              Are you sure you want to delete this data?
            </div>
            <div className="modal-footer">
              <button
                style={{ width: "100px" }}
                type="button"
                className="btn btn-success btn-sm"
                onClick={() => deleteProduct(productsId)}
                data-mdb-dismiss="modal"
              >
                Yes
              </button>
              <button
                style={{ width: "100px" }}
                type="button"
                className="btn btn-danger btn-sm"
                data-mdb-dismiss="modal"
              >
                No
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
