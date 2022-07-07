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
import Badges from "../globals/elements/badges";
import badge from "../../assets/badge.png";
import Favorites from "../globals/elements/favorites";
import Artikel from "../article";
import Voucher from "../globals/elements/voucher";

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

  const article = [
    {
      autor: "T. Danke",
      title: "Frischer geht immer",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque tempora asperiores minima voluptatibus optio rerum eveniet voluptate obcaecati perspiciatis, voluptates reiciendis eos quis, porro sit? Facilis fuga voluptatum necessitatibus numquam!",
      image:
        "https://images.unsplash.com/photo-1583495838052-7da01ba1b9ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      autor: "Julia Teebeutel",
      title: "Bowls, Bowls, Bowls",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque tempora asperiores minima voluptatibus optio rerum eveniet voluptate obcaecati perspiciatis, voluptates reiciendis eos quis, porro sit? Facilis fuga voluptatum necessitatibus numquam!",
      image:
        "https://images.unsplash.com/photo-1567575990843-105a1c70d76e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHZlZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      autor: "Hannes Gutenbach",
      title: "Vegan Forever?",
      text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Itaque tempora asperiores minima voluptatibus optio rerum eveniet voluptate obcaecati perspiciatis, voluptates reiciendis eos quis, porro sit? Facilis fuga voluptatum necessitatibus numquam!",
      image:
        "https://images.unsplash.com/photo-1583495838052-7da01ba1b9ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];
  return (
    <main className="mt-space-medium user">
      <HeaderUser
        text={customer.short_description!}
        username={customer.firstname!}
        name={customer.lastname!}
        vorname={customer.firstname!}
        email={customer.email!}
        image={customer.profile_picture!}
        isPrivate={false}
      />
      <section className="section badges is-flex is-justify-content-space-between">
        <Badges
          src={badge}
          award_name="Green Hero"
          award_text="Beim einkaufen 20Kg Kunststoff gespart."
          number={3}
        />
        <Badges
          src={badge}
          award_name="Local Hero"
          award_text="Shop in deiner Nähe geholfen."
          number={1}
        />
        <Badges
          src={badge}
          award_name="Smart Vegan"
          award_text="Keine tierischen Produkte beim einkauf."
          number={2}
        />
        <Badges
          src={badge}
          award_name="Made in Germany"
          award_text="Local hergestellte Kleidung gekauft."
          number={4}
        />
      </section>
      <section className="section">
        <Voucher />
      </section>
      {/**Statisch */}
      <section className="section ">
        <h2 className="is-size-4 is-size-5-mobile mb-5">
          {customer.firstname + "s"} Lieblingsstores
        </h2>
        <div className="is-flex favorites is-justify-content-space-between">
          <Favorites
            isShop={true}
            name="Lisas Klamotten"
            isFavorite={true}
            url={
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
          />
          <Favorites
            isShop={true}
            name="Verpacknix"
            isFavorite={true}
            url={
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
          />
          <Favorites
            isShop={true}
            name="Klammer Affe Köln"
            isFavorite={true}
            url={
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
          />
          <Favorites
            isShop={true}
            name="La Cusiné"
            isFavorite={true}
            url={
              "https://images.unsplash.com/photo-1441986300917-64674bd600d8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            }
          />
        </div>
      </section>

      <section className="section">
        <h2 className="is-size-4 mb-5">
          {customer.firstname + "s"} Lieblingsstories
        </h2>
        <Artikel article={article} />
      </section>
    </main>
  );
}

export default User;
