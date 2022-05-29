import React from "react";
import "../../styles/style.css";
//import Shop from './shop'
import shopData from "../../testdata/shop.json";
import ShopCard from "./shopCard";

function Shops() {
  /* Ergebniss speichert die Shops zum Input */
  let ergebniss = [];
  const [input, setCriteria] = React.useState("");

  ergebniss = shopData.filter((e) => e.plz === input);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCriteria(e.currentTarget.value);
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
    </div>
  );
}
export default Shops;
