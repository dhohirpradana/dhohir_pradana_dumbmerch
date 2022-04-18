/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import { API } from "../config/api";

export default function CategoryAdmin() {
  const [categories, setCategories] = useState([]);
  const [categoryId, setCategoryId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await API.get("/categories", config);
      setCategories(response.data.data.categories);
    } catch (error) {
      console.log(error);
    }
  };

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
      <NavBar page="category-admin" />
      <div className="mx-5 pt-1">
        <div className="fw-bold fs-4 text-light mb-3 mt-4">List Category</div>
        <div className="table-wrapper">
          <Table striped bordered hover variant="dark">
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
                    <Button
                      style={{ width: "100px" }}
                      onClick={() => handleEditClick(category.id)}
                      className="btn-sm btn-success me-3"
                    >
                      Edit
                    </Button>
                    <Button
                      style={{ width: "100px" }}
                      onClick={() => handleDeleteClick(category.id)}
                      className="btn-sm btn-danger"
                      data-mdb-toggle="modal"
                      data-mdb-target="#exampleModal"
                    >
                      Delete
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
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
              <Button
                className="btn-close"
                data-mdb-dismiss="modal"
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              Are you sure you want to delete this data?
            </div>
            <div className="modal-footer">
              <Button
                style={{ width: "100px" }}
                onClick={() => deleteCategory(categoryId)}
                data-mdb-dismiss="modal"
                variant="success"
                size="sm"
              >
                Yes
              </Button>
              <Button
                style={{ width: "100px" }}
                variant="danger"
                size="sm"
                data-mdb-dismiss="modal"
              >
                No
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
