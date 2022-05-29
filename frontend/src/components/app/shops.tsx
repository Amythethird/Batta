import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ReactSlider from "react-slider";
import "rc-slider/assets/index.css";
import "../../styles/style.css";
//import Shop from './shop'
import shopData from "../../testdata/shop.json";
import ShopCard from "./shopCard";

function Shops() {
  let ergebniss = [];
  const [input, setCriteria] = React.useState("");

  ergebniss = shopData.filter((e) => e.plz === input);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCriteria(e.currentTarget.value);
  };

  /*Slider*/

  return (
    <div>
      <section className="section is-medium mt-space-medium">
        <form>
          <div className="field">
            <p className="control has-icons-left has-icons-right">
              <input
                className="input"
                type="text"
                placeholder="PLZ oder Adresse"
                name="email"
                value={input}
                onChange={handleChange}
              />
              <span className="icon is-small is-left">
                <FontAwesomeIcon icon={faSearch} color="#257708" />
              </span>
              <span className="icon is-small is-right">
                <FontAwesomeIcon icon={faFilter} color="#257708" />
              </span>
            </p>
          </div>
          <div className="categories">
            <p className="has-text-weight-medium mb-2">Kategorien</p>
            <div className="is-flex">
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
          <div className="slider">
            <ReactSlider
              className="horizontal-slider"
              thumbClassName="example-thumb"
              trackClassName="example-track"
              renderThumb={(props, state) => (
                <div {...props}>{state.valueNow}</div>
              )}
            />
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
