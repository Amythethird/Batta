import React from "react";
import ReactDOM from "react-dom/client";
import "./styles/style.css";
import Main from "./components/layout/Main";
import Header from "./components/layout/Header"
import reportWebVitals from "./reportWebVitals";
import {BrowserRouter} from 'react-router-dom';

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
  <BrowserRouter>
    <Header/>
    <Main/>
  </BrowserRouter>
</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
