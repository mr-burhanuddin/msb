import React from "react";
import Navbar from "./Navbar";

function Header() {
  return (
    <div className="container-fluid">
      <img
        src="https://www.baazarpeth.com/wp-content/uploads/2020/04/msb-institute.jpg"
        className="img-fluid"
        alt="msb banner"
      />
      <Navbar />
    </div>
  );
}

export default Header;
