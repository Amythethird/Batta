import React from "react";
import "../../styles/style.css";
import HeaderUser from "../globals/headerUser";
import useApi from "../../hooks/useApi";
import { entry, query } from "../../api-utils/query-utils";
import { getAccessTokenPayload } from "../../api-utils/login-utils";
import { parseResponse } from "../../api-utils/response-utils";
import { UserResponse } from "../../api-utils/models/user-response-models";
import { parseUserResponseToCustomer } from "../../api-utils/user-utils";
import { useAppDispatch, useAppSelector } from "../../state/hooks.state";
import { selectCustomer, setCustomer } from "../../state/slices/customer.state";
import Badges from "../globals/elements/badges";
import Favorites from "../globals/elements/favorites";
import ArtikelCard from "../globals/elements/blogPost";
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
          entry("customer", [
            "firstname",
            "lastname",
            "shortDescription",
            entry("profilePicture", ["url"]),
            entry("profileHeaderImage", ["url"]),
            entry("address", [
              "streetName",
              "houseNumber",
              "postalCode",
              "city",
            ]),
            entry("achievements ", [
              "title",
              entry("icon", ["url"]),
              "shortDescription",
            ]),
            entry("favouriteShops", [
              "shopName",
              entry("shopHeaderImage", ["url"]),
            ]),
            entry("coupons", [
              "currentValue",
              "value",
              "boughtAt",
              "expiringDate",
              "couponID",
              entry("shop", ["shopName", entry("shopHeaderImage", ["url"])]),
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
      text: "Lernen Sie mit dem neuen Buch von Alexa Mustermann, frisch und nachhaltig zu kochen. Da ist alles drin! Ob vegan, keto oder vegetarisch.",
      image:
        "https://images.unsplash.com/photo-1583495838052-7da01ba1b9ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
    {
      autor: "Julia Teebeutel",
      title: "Bowls, Bowls, Bowls",
      text: "Der Trend aus Hawaii jezt auch in deutschen Küchen genießen. Julia erklärt, was alles in eine gesunde Bowl gehört und packt auch gleich ein paar Rezepte für deine Bowl dazu.",
      image:
        "https://images.unsplash.com/photo-1567575990843-105a1c70d76e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTl8fHZlZ2FufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=600&q=60",
    },
    {
      autor: "Hannes Gutenbach",
      title: "Vegan forever?",
      text: "Hannes illustriert, was ihn zum veganen Essen antreibt und was du dafür tun musst, um dieser Lebensweise zu folgen. In seinem neuen Buch 'Vegan forever?' steht er dir mit Tipps und Tricks zur Seite.",
      image:
        "https://images.unsplash.com/photo-1583495838052-7da01ba1b9ab?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    },
  ];

  return (
    <main className="mt-space-medium user">
      <HeaderUser />
      <section className="section badges">
        <div className="container">
          <div className="columns is-multiline">
            {customer.achievements?.map((e, i) => (
              <Badges
                key={i}
                title={e.title!}
                icon={e.icon?.url!}
                shortDescription={e.shortDescription!}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <h2 className="title is-2">Deine Gutscheine</h2>
            </div>
            <div className="column has-text-right">
              <a>alle anzeigen</a>
            </div>
          </div>
          <div className="columns is-multiline">
            {customer.coupons?.map((e, i) => (
              <Voucher
                key={i}
                boughtAt={e.boughtAt!}
                expiringDate={e.expiringDate!}
                couponID={e.couponID!}
                currentValue={e.currentValue!}
                value={e.value!}
                shopName={e.shop?.shopName!}
                shopImage={e.shop?.shopHeaderImage?.url!}
                qrCode={"/qr-code.png"}
              />
            ))}
          </div>
        </div>
      </section>
      {/**Statisch */}
      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <h2 className="title is-2">
                {/* {customer.firstname + "s"} Lieblingsstores */}
                Deine Lieblingsstores
              </h2>
            </div>
            <div className="column has-text-right">
              <a>alle anzeigen</a>
            </div>
          </div>

          <div className="columns is-multiline">
            {customer.favouriteShops?.map((e, i) => (
              <Favorites
                key={i}
                shopName={e.shopName!}
                shopImage={e.shopHeaderImage?.url!}
                shopId={e.id!}
                isFavorite={true}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <h2 className="title is-2">
                {/* {customer.firstname + "s"} Lieblingsartikel */}
                Deine Lieblingsartikel
              </h2>
            </div>
            <div className="column has-text-right">
              <a>alle anzeigen</a>
            </div>
          </div>

          <ArtikelCard article={article} />
        </div>
      </section>
    </main>
  );
}

export default User;
