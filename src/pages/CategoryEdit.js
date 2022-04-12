import React, { useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NavBar from "../components/NavBar";

export default function CategoryEdit() {
  const { state } = useLocation();
  const editForm = useRef();
  var categories = JSON.parse(localStorage.categories);

  const navigate = useNavigate();

  const handleSave = () => {
    const form = editForm.current;
    for (var i = 0; i < categories.length; i++) {
      if (state.id === categories[i].id) {
        categories[i].name = form["name"].value;
        break;
      }
    }
    localStorage.setItem("categories", JSON.stringify(categories));
    navigate("/category");
  };

  return (
    <div>
      <NavBar page="category" />
      <div className="mx-5 pt-1">
        <div className="fw-bold fs-4 text-light mt-4">Edit Category</div>
        <form ref={editForm}>
          <div className="mt-4 edit">
            <input
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              defaultValue={state.name}
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
