import React from "react";
// import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar shadow fixed-top navbar-expand-sm navbar-dark bg-primary">
      <div className="container">
        <animate href="/" className="navbar-brand">
          Contact Book
        </animate>
        <div>
          <a href="/contacts/add" className="btn btn-light ml-auto">
            Create Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
