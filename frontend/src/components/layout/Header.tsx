import React from 'react';
import "../../styles/style.css"


function Header() {
  return (
    <header className="AppHeader">
    <nav className="navbar is-fixed-top has-shadow" aria-label="Main navigation">
      <div className="container">
        <div className="navbar-brand">
          <a className="navbar-item" href="/">
            <img src="/assets/logo.svg" alt="Back home" height={ 28 }/>
          </a>

          <button
              role="button"
              className="navbar-burger"
              aria-label="Main menu"
              aria-expanded="false"
          >
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
            <span aria-hidden="true"/>
          </button>
        </div>

        <div className="navbar-menu">
          <div className="navbar-start">
            <a className="navbar-item" href="/shops">Shops</a>
            <a className="navbar-item" href="#foo">Blog</a>
            <a className="navbar-item" href="#bar">Über uns</a>
            <a className="navbar-item" href="#bar">Kontakt</a>
          </div>
          <div className="navbar-end">
            <a className="navbar-item" href="\login">Login</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
  );
}

export default Header;
