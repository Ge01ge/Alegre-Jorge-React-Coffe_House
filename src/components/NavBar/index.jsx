import React from "react";
import { Link } from "react-router-dom";
import CartWidget from "../CartWidget";

export const NavBar = () => {
  return (

    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Aqui va mi marca/logo
          </a>
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
                <li className="nav-item px-4">
                  <Link className="nav-link" to="/">
                    Us
                  </Link>
                </li>
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
                <li className="nav-item px-4">
                  <Link className="nav-link" to="/item/123">
                    Item
                  </Link>
                </li>
                <li className="nav-item">
                  <a className="nav_link px-4" href="#">
                    <CartWidget />
                  </a>
                </li>
                {/* <li className="nav-item px-4">
                  <a className="nav-link disabled" href="#">
                    coming soon...
                  </a>
                </li> */}
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
