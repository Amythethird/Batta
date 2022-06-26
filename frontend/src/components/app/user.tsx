import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/style.css";
import HeaderUser from "../globals/headerUser";
import testUser from "../../testdata/user.json"




function User() {
  //Routing for User
  const { id } = useParams();
  let user = testUser.filter((e)=> e.id == parseInt(id ?? "0"))
  return (
    <main className="mt-space-medium">
     {
      user.map((userdata)=> (
        <HeaderUser text={userdata.text} username={userdata.accountname} name={userdata.name} vorname={userdata.vorname} email={userdata.mail} key={userdata.id} image={userdata.profileImage} isPrivate={false} />
      ))
     }
    </main>
  );
}

export default User;
