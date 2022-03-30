/* eslint-disable eqeqeq */
/* eslint-disable no-unused-expressions */
import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { useParams } from "react-router-dom";
import NavBar from "../components/NavBar";
import NotFound from "./NotFound";

export default function ProductDetail() {
  const params = useParams();
  var projects = JSON.parse(localStorage.getItem("products"));
  var project = projects?.find((x) => x.id == params.id);
  return projects ? (
    <div>
      <NavBar />
      <div className="mx-5 px-5">
        <div className="d-flex mx-4 justify-content-center align-items-start">
          <div className="me-4">
            <img
              src={project.src}
              alt={project.id}
              style={{ height: "450px", width: "350px", objectFit: "cover" }}
            ></img>
          </div>
          <div className="ms-3 text-light fw-light mt-4">
            <h3 className="primary-color-text">{project.name}</h3>
            <p>Stock : {project.stock}</p>
            <p id="p_wrap">{project.description}</p>
            <div className="d-flex flex-row-reverse mb-4 mt-4">
              <h5 className="primary-color-text">Rp.{project.price}</h5>
            </div>
            <MDBBtn
              className="primary-color text-capitalize"
              style={{ width: "100%" }}
            >
              Buy
            </MDBBtn>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <NotFound />
  );
}
