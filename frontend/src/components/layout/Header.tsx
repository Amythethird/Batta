import React from "react";
import { Link } from "react-router-dom";
import "../../styles/style.css";

function Header() {
  return (
    <header className="AppHeader">
      <nav
        className="navbar is-fixed-top has-shadow"
        aria-label="Main navigation"
      >
        <div className="container">
          <div className="navbar-brand">
            <Link className="navbar-item" to="/">
              <img src="/assets/logo.svg" alt="Back home" height={28} />
            </Link>

            <button
              role="button"
              className="navbar-burger"
              aria-label="Main menu"
              aria-expanded="false"
            >
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </button>
          </div>

          <div className="navbar-menu">
            <div className="navbar-start">
              <Link className="navbar-item" to="/shops">
                Shops
              </Link>
              <Link className="navbar-item" to="#foo">
                Blog
              </Link>
              <Link className="navbar-item" to="#bar">
                Über uns
              </Link>
              <Link className="navbar-item" to="#bar">
                Kontakt
              </Link>
            </div>
            <div className="navbar-end">
              <Link className="navbar-item" to="/login">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
