import React from "react";
import "./styles/style.css";
import Footer from "./components/layout/footer";
import Main from "./components/layout/Main";
// import Header from "./components/layout/header";
import Nav from "./components/layout/nav";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faFontAwesome,
} from "@fortawesome/free-solid-svg-icons";

library.add(fab, faCheckSquare, faCoffee, faFontAwesome);

function App() {
  return (
    <>
      <Nav />
      <Main />
      <Footer />
    </>
  );
}

export default App;
