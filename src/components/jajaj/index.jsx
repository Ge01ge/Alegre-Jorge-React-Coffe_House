import React from "react";

import CartWidget from "../CartWidget";

export const NavBar = () => {
  return (

    <div>
        {/* nav manual */}
      {/* <nav className="nav">
        <div className="nav_brand">
          <a className="nav_link" href="#">
            MiMarca
          </a>
        </div>
        <ul className="nav_list">
          <li>
            <a className="nav_link" href="#">
              Us
            </a>
          </li>
          <li>
            <a className="nav_link" href="#">
              Contact
            </a>
          </li>
          <li>
            <a className="nav_link" href="#">
              <CartWidget />
            </a>
          </li>
        </ul>
      </nav> */}

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
                  <a className="nav-link" href="#">
                    Us
                  </a>
                </li>
                <li className="nav-item px-4">
                  <a className="nav-link" href="#">
                    Contact
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav_link px-4" href="#">
                    <CartWidget />
                  </a>
                </li>
                <li className="nav-item px-4">
                  <a className="nav-link disabled" href="#">
                    coming soon...
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};
export default NavBar;
