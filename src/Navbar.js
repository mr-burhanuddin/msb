import React from "react";

function Navbar() {
  return (
    <div className="container col-sm-4 col-md|lg|xl-6  my-1 border border-warning rounded-pill">
      <div className="row">
        <nav className="nav nav-pills justify-content-evenly my-2 mx-2 flex-row flex-sm-row">
          <button className="btn btn-outline-warning btn-sm">
            <i className="bi bi-stars"></i>
          </button>
          <button className="btn btn-outline-warning btn-sm">
            <i className="bi bi-person-fill"></i>
          </button>
          <button className="btn btn-outline-warning btn-sm">
            <i className="bi bi-house-fill"></i>
          </button>
          <button className="btn btn-outline-warning btn-sm">
            <i className="bi bi-journal-album"></i>
          </button>
          <button className="btn btn-outline-warning btn-sm">
            <i className="bi bi-newspaper"></i>
          </button>
          <button className="btn btn-outline-warning btn-sm">
            <i className="bi bi-truck"></i>
          </button>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
