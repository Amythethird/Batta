import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/style.css";



function User() {
  //Routing for User
  const { id } = useParams();


  return (
    <main className="mt-space-large">
     {id}
    </main>
  );
}

export default User;
