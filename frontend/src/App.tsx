//import React from 'react';
import logo from './logo.svg';
import "./styles/style.css"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Dies ist ein  normaler p Tag
        </p>
        <li>Die ist ein listen element</li>
        <a
          className="App-link"
          href="https://ads-medienmanufaktur.de"
          target="_blank"
          rel="noopener noreferrer"
        >
          Ich bin ein a Tag
        </a>
      </header>
    </div>
  );
}

export default App;
