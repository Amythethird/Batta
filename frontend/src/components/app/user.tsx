import React from "react";
import "../../styles/style.css";
import HeaderUser from "../globals/HeaderUser";
import useApi from "../../hooks/useApi";
import { entry, query } from "../../api-utils/query-utils";
import { getAccessTokenPayload } from "../../api-utils/login-utils";
import { parseResponse } from "../../api-utils/response-utils";
import { UserResponse } from "../../api-utils/models/user-response-models";
import { parseUserResponseToCustomer } from "../../api-utils/user-utils";
import { useAppDispatch, useAppSelector } from "../../state/hooks.state";
import { selectCustomer, setCustomer } from "../../state/slices/customer.state";

function User() {
  const dispatch = useAppDispatch();
  const customer = useAppSelector(selectCustomer);

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
            entry("profile_picture", ["url"]),
            entry("customer", [
              "street_name",
              "house_number",
              "postal_code",
              "city",
            ]),
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

      dispatch(setCustomer(parseUserResponseToCustomer(userResponse)));
    },
    []
  );
  return (
    <main className="mt-space-medium">
      <HeaderUser
        text={customer.short_description!}
        username={customer.firstname!}
        name={customer.lastname!}
        vorname={customer.firstname!}
        email={customer.email!}
        image={customer.profile_picture!}
        isPrivate={false}
      />
    </main>
  );
}

export default User;
