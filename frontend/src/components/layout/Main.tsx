import { Routes, Route } from "react-router-dom";
import React from "react";
import Home from "../app/landing";
import Login from "../app/login";
import Shops from "../app/shops";
import User from "../app/user";
import Shop from "../app/shopansicht";
import { isLoggedIn } from "../../api-utils/login-utils";
import ProtectedElement from "./protected-route";
import Payment from "../app/payment";

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
            isAuthenticated={isLoggedIn}
            protectedElement={<User />}
            redirectPath={"/login?postLoginRedirect=user"}
          />
        }
      ></Route>
      <Route path="/shop/:id" element={<Shop />}></Route>
      <Route path="/payment" element={<Payment />}></Route>
    </Routes>
  );
};
export default Main;
