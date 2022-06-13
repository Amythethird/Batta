import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/style.css";
import HeaderUser from "../globals/headerUser";

function User() {
  //Routing for User
  const { id } = useParams();

  return (
    <main className="mt-space-large">
      <HeaderUser UserId={id} />
    </main>
  );
}

export default User;
