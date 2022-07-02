import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../landing";
import Login from "../login";
import Shops from "../app/shops";
import User from "../app/user";
import Shop from "../app/shop";
import { isLoggedIn } from "../../api-utils/login-utils";
import ProtectedElement from "./protected-route";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />}></Route>
      <Route path="/shops" element={<Shops />}></Route>
      <Route
        path="/user"
        element={
          <ProtectedElement
            isAuthenticated={isLoggedIn()}
            protectedElement={<User />}
            redirectPath={"/login"}
          />
        }
      ></Route>
      <Route path="/shop/:id" element={<Shop />}></Route>
    </Routes>
  );
};
export default Main;
