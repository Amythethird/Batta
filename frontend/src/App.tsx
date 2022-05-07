import React from 'react';
import "./styles/style.css"


function App() {
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
            <a className="navbar-item" href="#about">About</a>
            <a className="navbar-item" href="#foo">Foo</a>
            <a className="navbar-item" href="#bar">Bar</a>
          </div>
        </div>
      </div>
    </nav>
  </header>
  );
}

export default App;
