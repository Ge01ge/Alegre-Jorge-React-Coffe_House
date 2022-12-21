import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

export const NavBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand px-2" to="/">
            Coffe-House
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse justify-content-md-end px-2" id="navbarNavAltMarkup">
            <div class="navbar-nav">
              <ul className="navbar-nav">
                <li className="nav-item px-4">
                  <Link className="nav-link" to="/category/accesorio">
                    Accesorios
                  </Link>
                </li>
                <li className="nav-item px-4">
                  <Link className="nav-link" to="/category/insumo">
                    Insumos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav_link px-4" to="/cart">
                    <CartWidget />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>

      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            Coffe-House
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-md-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <ul className="navbar-nav">
                {/* <li className="nav-item px-4">
                  <Link className="nav-link" to="/">
                    Us
                  </Link>
                </li> */}
      {/* <li className="nav-item px-4">
                  <Link className="nav-link" to="/category/accesorio">
                    Accesorios
                  </Link>
                </li>
                <li className="nav-item px-4">
                  <Link className="nav-link" to="/category/insumo">
                    Insumos
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav_link px-4" to="/cart">
                    <CartWidget />
                  </Link>
                </li>
              </ul> */}
      {/* </div>
          </div>
        </div>
      </nav> */}
    </div>
  );
};
export default NavBar;
