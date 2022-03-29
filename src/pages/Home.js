import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <nav
        class="navbar navbar-expand-lg navbar-dark"
        style={{ backgroundColor: "black" }}
      >
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarRightAlignExample">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <Link class="nav-link active" aria-current="page" to="/home">
                  Home
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
