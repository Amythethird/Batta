import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/style.css";
import HeaderUser from "../globals/HeaderUser";
import testUser from "../../testdata/user.json";
import useApi from "../../hooks/useApi";
import { entry, query } from "../../api-utils/query-utils";
import { getAccessTokenPayload } from "../../api-utils/login-utils";
import { parseResponse } from "../../api-utils/response-utils";
import { UserResponse } from "../../api-utils/models/user-response-models";
import { parseUserResponseToCustomer } from "../../api-utils/user-utils";

function User() {
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
            entry("customer", ["postal_code", "street_name", "city"]),
          ]),
        ],
        getAccessTokenPayload().id
      )
    ),
    (response) => {
      let userResponse: UserResponse = parseResponse(
        "usersPermissionsUser",
        response
      ).data;

      console.log(parseUserResponseToCustomer(userResponse));
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
