import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light  " style={{"fontFamily":"inherit","font-size":"1.2em"}}>
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav" style={{"font-weight":"bold"}}>
          <ul className="navbar-nav">
          <li className="nav-item">
              <Link to="/" className="nav-link" aria-current="page">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/create" className="nav-link" aria-current="page">
                Insert Record
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/read" className="nav-link active" aria-current="page">
                View Records
              </Link>
            </li>
            <li className="nav-item">
              <Link to='/find' className="nav-link active" aria-current="page">
                Find Records
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;