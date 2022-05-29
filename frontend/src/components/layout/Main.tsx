import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../landing";
import Login from "../login";
import Shops from "../app/shops";
import User from "../app/user";
import Shop from "../app/shop";

const Main = () => {
  return (
    //Routing for Elements
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/shops" element={<Shops />}></Route>
      <Route path="/user/:id" element={<User />}></Route>
      <Route path="/shop/:id" element={<Shop />}></Route>
    </Routes>
  );
};
export default Main;
