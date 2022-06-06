import React from "react";
import { collection, query } from "../../api-utils/query-utils";
import useApi from "../../hooks/useApi";
import { useAppDispatch, useAppSelector } from "../../state/hooks.state";
import {
  selectShopsFilter,
  set as setShopsFilter,
} from "../../state/slices/shops-filter.state";
import { selectShops } from "../../state/slices/shops.state";
import "../../styles/style.css";
import shopData from "../../testdata/shop.json";
import ShopCard from "./shopCard";

function Shops() {
  const dispatch = useAppDispatch();

  const shops = useAppSelector(selectShops);
  const filter = useAppSelector(selectShopsFilter);

  useApi(
    query(
      collection("shops", ["name"], {
        postal_code: { eq: parseInt(filter, 10) },
      })
    ),
    (response) => {
      console.log(response);
    },
    [filter]
  );

  let ergebniss = [];
  const [input, setCriteria] = React.useState("");

  ergebniss = shopData.filter((e) => e.plz === input);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCriteria(e.currentTarget.value);
    dispatch(setShopsFilter(e.currentTarget.value));
  };

  return (
    <div>
      <section className="section background_light shopSearch is-medium mt-space-medium">
        <form>
          <div className="columns">
            <div className="column">
              <h1 className="is-size-4   has-text-left">
                Finde Shops in deiner nähe
              </h1>
              <p>
                ... und unterstütze Cum sociis natoque penatibus et magnis dis
                parturient montes, nascetur ridiculus mus. Nulla vitae elit
                libero, a pharetra augue.
              </p>
              <div className="field is-grouped mt-4">
                <div className="control is-expanded">
                  <input
                    className="input is-normal"
                    type="text"
                    placeholder="PLZ oder Adresse"
                    name="email"
                    value={input}
                    onChange={handleChange}
                  />
                </div>
                <div className="control">
                  <a className="button is-primary" type="submit">
                    Finden
                  </a>
                </div>
              </div>
              <div className="categories is-flex">
                <div className="field mr-4">
                  <div className="control">
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        id="unverpackt"
                        name="category"
                        className="mr-1"
                      />
                      Unverpackt
                    </label>
                  </div>
                  <div className="control">
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        id="made_in_Germany"
                        name="category"
                        className="mr-1"
                      />
                      Made in Germany
                    </label>
                  </div>
                  <div className="control">
                    <label className="checkbox">
                      <input
                        type="checkbox"
                        id="vegan"
                        name="category"
                        value="Vegan"
                        className="mr-1"
                      />
                      Vegan
                    </label>
                  </div>
                </div>
                <div className="field">
                  <div className="control">
                    <label className="checkbox">
                      <input type="checkbox" name="category" className="mr-1" />
                      Vegetarisch
                    </label>
                  </div>
                  <div className="control">
                    <label className="checkbox">
                      <input type="checkbox" name="category" className="mr-1" />
                      Fair Trade
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="column">
              <h1 className=" has-text-left">Highlights in Köln</h1>
            </div>
          </div>
        </form>
      </section>

      <section className="section is-medium is-flex">
        {ergebniss.map((e, shops) => (
          <ShopCard
            key={shops}
            name={e.shopname}
            tag={e.tag}
            oeffnungszeiten={e.oeffnungszeiten}
            text={e.text}
            adresse={e.adresse}
            plz={e.plz}
            img={e.image}
            id={e.id}
          />
        ))}
      </section>

      {/* shops with redux demo section */}
      <section className="section is-medium is-flex">
        {shops.map((shop, index) => (
          <div key={index}>Hello {shop.name}</div>
        ))}
      </section>
    </div>
  );
}
export default Shops;
