import React from "react";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "../styles/styles.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <div>
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center align-items-center">
              <div className="">
                <Link className="footer-brand" to="/src/pages/Home.jsx">
                  <img
                    src="/assets/extensive-logo.png"
                    alt="Logo"
                    className="logo"
                  />
                </Link>
              </div>
            </div>
            {/* <div className="col-lg-4 col-md-6 col-sm-12 mb-4 pt-5 d-flex justify-content-center align-items-center">
              <div className="col-md-4 col-12 contact-info P-4">
                <p>
                  Plot 15, Jesus Avenue, Ologbun, Simawa <br /> Lukosi Road,
                  Ogun State
                </p>
                <p>
                  07039404364 <br />
                  08058594710
                </p>
                <p>extensiveacademy@gmail.com</p>
              </div>
            </div> */}
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4 d-flex justify-content-center align-items-center"></div>
          </div>
          <div className="copyright p-0 m-0 d-flex justify-content-center">
            <p className="">
              © Copyrights 2025 Extensive Academy | Designed by{" "}
              <a href="https://wa.link/8k0f7s" target="_blank" rel="nofollow">
                Hazael Audi
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
