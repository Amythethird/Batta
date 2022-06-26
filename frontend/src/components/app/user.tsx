import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/style.css";
import HeaderUser from "../globals/HeaderUser";
import testUser from "../../testdata/user.json";
import { selectLogin } from "../../state/slices/login.state";
import { useAppSelector } from "../../state/hooks.state";
import useApi from "../../hooks/useApi";
import { entry, query } from "../../api-utils/query-utils";

function User() {
  //Routing for User

  // const dispatch = useAppDispatch();
  const loginData = useAppSelector(selectLogin);

  useApi(
    query(
      entry(
        "usersPermissionsUser",
        [
          "username",
          "email",
          entry("person", [
            "firstname",
            "lastname",
            entry("customer", ["postal_code", "street", "city"]),
          ]),
        ],
        loginData.user.id
      )
    ),
    (response) => {
      console.log(response);
    },
    []
  );

  const { id } = useParams();
  let user = testUser.filter((e) => e.id == parseInt(id ?? "0"));
  return (
    <main className="mt-space-medium">
      {user.map((userdata) => (
        <HeaderUser
          text={userdata.text}
          username={userdata.accountname}
          name={userdata.name}
          vorname={userdata.vorname}
          email={userdata.mail}
          key={userdata.id}
          image={userdata.profileImage}
          isPrivate={false}
        />
      ))}
    </main>
  );
}

export default User;
