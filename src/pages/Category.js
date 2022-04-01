/* eslint-disable eqeqeq */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function Category() {
  const [categories, setCategories] = useState(
    JSON.parse(localStorage.getItem("categories"))
  );
  const [categoryId, setCategoryId] = useState("");
  const navigate = useNavigate();

  const handleDeleteClick = (id) => {
    setCategoryId(id);
  };
  
    const deleteCategory = (id) => {
      setCategories(categories.filter((item) => item.id != id));
    };

  const handleEditClick = (id) => {
    navigate("/category-edit", {
      state: categories.filter((item) => item.id == id)[0],
    });
  };

  return (
    <div>
      <NavBar page="category" />
      <div className="mx-5 pt-1">
        <div className="fw-bold fs-4 text-light mb-3 mt-4">List Category</div>
        <div className="table-wrapper">
          <table className="table table-striped table-dark">
            <thead className="sticky-top">
              <tr>
                <th style={{ width: "15%" }} scope="col">
                  No
                </th>
                <th scope="col">Category Name</th>
                <th style={{ width: "30%" }} scope="col">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {categories.map((category, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <td>{category.name}</td>
                  <td>
                    <button
                      style={{ width: "100px" }}
                      type="button"
                      onClick={() => handleEditClick(category.id)}
                      className="btn btn-sm btn-success me-3"
                    >
                      Edit
                    </button>
                    <button
                      style={{ width: "100px" }}
                      type="button"
                      onClick={() => handleDeleteClick(category.id)}
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
                onClick={() => deleteCategory(categoryId)}
                data-mdb-dismiss="modal"
                className="btn btn-success btn-sm"
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
