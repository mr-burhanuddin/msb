import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="container col-sm-4 col-md|lg|xl-6  my-1 border border-warning rounded-pill">
      <div className="row">
        <nav className="nav nav-pills justify-content-evenly my-2 mx-2 flex-row flex-sm-row">
          <Link to="/about">
            <button className="btn btn-outline-warning btn-sm">
              <i className="bi bi-stars"></i>
            </button>
          </Link>
          <Link to="/facilities">
            <button className="btn btn-outline-warning btn-sm">
              <i className="bi bi-person-fill"></i>
            </button>
          </Link>
          <Link to="/">
            <button className="btn btn-outline-warning btn-sm">
              <i className="bi bi-house-fill"></i>
            </button>
          </Link>
          <Link to="/contact">
            <button className="btn btn-outline-warning btn-sm">
              <i className="bi bi-journal-album"></i>
            </button>
          </Link>
          <Link to="/news">
            <button className="btn btn-outline-warning btn-sm">
              <i className="bi bi-newspaper"></i>
            </button>
          </Link>
          <Link to="/transport">
            <button className="btn btn-outline-warning btn-sm">
              <i className="bi bi-truck"></i>
            </button>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
