import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg ">
      <div className="container">
        <a className="navbar-brand" href="#"></a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav d-flex">
            <li className="nav-item">
              <a
                className="nav-link"
                href="mailto:extensiveacademy@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                extensiveacademy@gmail.com
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="tel:+2347039404364">
                +2347039404364
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="tel: +2348058594710">
                +2348058594710
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
