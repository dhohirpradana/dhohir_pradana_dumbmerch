/* eslint-disable eqeqeq */
import React, { useEffect, useState } from "react";
import { Button, Table } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";
import NumFormat from "../components/NumFormat";
import { API } from "../config/api";

export default function ProductAdmin() {
  const [products, setProducts] = useState([]);
  const [productsId, setproductsId] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();

    return () => {
      // console.log("cleaned up");
    };
  }, []);

  const fetchProducts = async () => {
    try {
      const config = {
        headers: {
          "Content-type": "application/json",
        },
      };

      const response = await API.get("/products", config);
      setProducts(response.data.data.products);
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteClick = (id) => {
    setproductsId(id);
  };

  const deleteProduct = async (id) => {
    const config = {
      headers: {
        "Content-type": "application/json",
      },
    };
    try {
      await API.delete("/product/" + id, config).then(() =>
        setProducts(products.filter((item) => item.id != id))
      );
    } catch (error) {
      console.log(error);
    }
  };

  const handleEditClick = (id) => {
    navigate("/product-edit", {
      state: products.filter((item) => item.id == id)[0],
    });
  };

  const handleAddProductClick = (id) => {
    navigate("/product-add");
  };

  const openInNewTab = (url) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div>
      <NavBar page="product" />
      <div className="mx-5 pt-1">
        <div className="fw-bold fs-4 text-light mb-3 mt-4">List Product</div>
        <Button
          variant="dark"
          className="btn-sm mb-3 primary-color"
          onClick={handleAddProductClick}
        >
          Add Product
        </Button>
        <div className="table-wrapper">
          <Table striped bordered hover variant="dark">
            <thead className="sticky-top">
              <tr>
                <th scope="col" style={{ width: "50px" }}>
                  No
                </th>
                <th scope="col" style={{ width: "5vw" }}>
                  Photo
                </th>
                <th scope="col">Product Name</th>
                <th scope="col">Product Desc</th>
                <th scope="col">Price</th>
                <th scope="col">Qty</th>
                <th scope="col" style={{ width: "300px" }}>
                  Action
                </th>
              </tr>
            </thead>
            <tbody style={{ verticalAlign: "middle" }}>
              {products.map((product, index) => (
                <tr key={index}>
                  <th scope="row">{index + 1}</th>
                  <th scope="row">
                    <img
                      onClick={() => openInNewTab(product.image)}
                      alt={index}
                      src={product.image}
                      style={{ width: "4vw", height: "4vw" }}
                    />
                  </th>
                  <td id="td_no_wrap">{product.name}</td>
                  <td id="td_no_wrap">{product.desc}</td>
                  <td>{NumFormat(product.price)}</td>
                  <td>{product.qty}</td>
                  <td>
                    <Button
                      style={{ width: "100px" }}
                      type="button"
                      onClick={() => handleEditClick(product.id)}
                      className="btn-sm btn-success me-3"
                    >
                      Edit
                    </Button>
                    <Button
                      style={{ width: "100px" }}
                      onClick={() => handleDeleteClick(product.id)}
                      data-mdb-toggle="modal"
                      data-mdb-target="#exampleModal"
                      className="btn-sm btn-danger"
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
                onClick={() => deleteProduct(productsId)}
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
