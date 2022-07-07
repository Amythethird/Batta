import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../state/hooks.state";
import {
  selectShopsFilter,
  setShopsFilter,
} from "../../state/slices/shops-filter.state";
import { selectShops, setShops } from "../../state/slices/shops.state";
import useApi from "../../hooks/useApi";
import { collection, entry, query } from "../../api-utils/query-utils";
import { parseResponse } from "../../api-utils/response-utils";
import React from "react";
import ReactSlider from "react-slider";
import "../../styles/style.css";
// import shopData from "../../testdata/shop.json";
import ShopCard from "./card";
import Rating from "../globals/rating";
import Sorted from "../globals/sorted";
import Categories from "../globals/categories";
import Shop from "../../models/shop";

function FilterShops() {
  const dispatch = useAppDispatch();
  const shops = useAppSelector(selectShops);
  const filter = useAppSelector(selectShopsFilter);

  useApi(
    query(
      collection(
        "shops",
        [
          "name",
          "postal_code",
          "short_description",
          "opening_hours",
          entry("person", [entry("profile_picture", ["url"])]),
        ],
        {
          postal_code: { eq: parseInt(filter, 10) },
        }
      )
    ),
    (response) => {
      dispatch(setShops(parseResponse("shops", response).data as Shop[]));
    },
    [filter]
  );

  //Input Form
  const [input, setCriteria] = React.useState("");
  const categorie: string[] = [];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCriteria(e.currentTarget.value);
    dispatch(setShopsFilter(e.currentTarget.value));
  };

  /*Filter*/
  function get(childvalue: string[]) {
    categorie.push(...childvalue);
  }

  //Filter inklusive aller Komponenten
  let allStatements;
  if (filter) {
    allStatements = (
      <div className="container mb-space-medium">
        <div className="columns is-align-items-flex-start">
          <div className="column is-two-fifths">
            <Categories
              handler={get}
              categorie={[
                "Unverpackt",
                "Made in Germany",
                "Kleidung",
                "Vegan",
                "Vegetarisch",
                "Spielzeug",
              ]}
            />
            <div className="slider mt-5">
              <ReactSlider
                className="horizontal-slider"
                thumbClassName="example-thumb"
                trackClassName="example-track"
                marks
                markClassName="example-mark"
                min={0}
                max={100}
                renderThumb={(props, state) => (
                  <div {...props}>{state.valueNow}</div>
                )}
              />
            </div>
          </div>
          <div className="column">
            <Rating durchschnitt={1} title={true} full={false} ratings={0} />
          </div>
          <div className="column">
            <Sorted
              sortierung={["Beste Treffer", "Entfernung", "A-Z", "Z-A"]}
            />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className=" container mb-space-large mt-space-large">
        <div className="field Shops">
          <p className="control has-icons-left is-flex has-button-right">
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
            <a className="button">
              <FontAwesomeIcon icon={faFilter} color="#257708" />
            </a>
          </p>
        </div>
        {allStatements}
      </div>

      <section className="section is-medium is-flex">
        {shops.map((shop: Shop) => (
          <ShopCard
            key={shop.id}
            name={shop.name ?? "SHOP"}
            tag={shop.labels ?? []}
            oeffnungszeiten={shop.opening_hours}
            text={shop.short_description ?? ""}
            //address={shop.address}
            plz={shop.postal_code?.toString() ?? input}
            img={shop.person.profile_picture}
            id={shop.id}
          />
        ))}
      </section>
    </div>
  );
}
export default FilterShops;
