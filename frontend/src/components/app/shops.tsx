import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../state/hooks.state";
import {
  selectShopsFilter,
  setShopsFilter,
} from "../../state/slices/shops-filter.state";
import { selectShops, setShops } from "../../state/slices/shops.state";
import useApi from "../../hooks/useApi";
import { collection, entry, query } from "../../apiUtils/query-utils";
import { parseResponse } from "../../apiUtils/response-utils";
import React from "react";
import ReactSlider from "react-slider";
import "../../styles/style.css";
// import shopData from "../../testdata/shop.json";
//import ShopCard from "../globals/elements/shopCard";
import Rating from "../globals/elements/rating";
import Sorted from "../globals/sorted";
import Categories from "../globals/categories";
import Shop from "../../models/shop";
import { parseShopOwnerResponseToShopOwner } from "../../apiUtils/user-utils";
import MapBox from "../globals/elements/mapBox";

function FilterShops() {
  const dispatch = useAppDispatch();
  const shops = useAppSelector(selectShops);
  const filter = useAppSelector(selectShopsFilter);
  const [input, setCriteria] = React.useState("");

  useApi(
    query(
      collection(
        "shops",
        [
          "shopName",
          entry("address", [
            "streetName, postalCode, houseNumber, city, country",
          ]),
          entry("openingHours", [
            "openTime",
            "closeTime",
            "breakTimeStart",
            "breakTimeEnd",
          ]),
          "coordinateLat",
          "coordinateLng",
          "description",
          entry("shopHeaderImage", ["url"]),
          entry("shopOwner", [
            entry("customer", [entry("profilePicture", ["url"])]),
          ]),
        ],
        {
          address: { postalCode: { eq: filter } },
        }
      )
    ),
    (response) => {
      let shops = parseResponse("shops", response).data as Shop[];

      shops.forEach((shop) => {
        shop.shopOwner = parseShopOwnerResponseToShopOwner(shop.shopOwner!);
      });
      dispatch(setShops(shops));
    },
    [filter],
    false
  );

  //Input Form

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
      <div className="search-filter-wrapper">
        <div className="columns">
          <div className="column is-half">
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

            <h3 className="title is-3 mgb-05 mgt-1">Entfernung</h3>
            <div className="range-slider is-flex">
              <ReactSlider
                className="horizontal-slider"
                thumbClassName="slider-thumb"
                trackClassName="slider-track"
                marks
                markClassName="slider-mark"
                min={0}
                max={100}
                renderThumb={(props, state) => (
                  <div className="slider-value" {...props}>
                    {state.valueNow}
                  </div>
                )}
              />
              <span className="slider-unit">km</span>
            </div>
          </div>
          <div className="column">
            <h3 className="title is-3 mgb-05">Bewertung</h3>
            <Rating durchschnitt={1} title={true} full={false} ratings={0} />
          </div>
          <div className="column">
            <h3 className="title is-3 mgb-05">Sortierung</h3>
            <Sorted
              sortierung={["Beste Treffer", "Entfernung", "A-Z", "Z-A"]}
            />
          </div>
        </div>
      </div>
    );
  }

  type Coordinates = {
    lat: number;
    lng: number;
  };

  let coordinates: Coordinates = {
    lat: 0,
    lng: 0,
  };
  shops.map((coord) => {
    (coordinates.lat = coord.coordinateLat!),
      (coordinates.lng = coord.coordinateLng!);
  });

  return (
    <main>
      <section className="section">
        <div className="container content">
          <div className="columns searchbar">
            <div className="column">
              <input
                className="search-bar input"
                type="text"
                placeholder="PLZ oder Adresse"
                name="email"
                value={input}
                onChange={handleChange}
              />
              <span className="search-icon">
                <FontAwesomeIcon icon={faSearch} color="#257708" />
              </span>
              <span className="search-filter">
                <FontAwesomeIcon icon={faFilter} color="#257708" />
              </span>
            </div>
          </div>
          {allStatements}
        </div>
      </section>
      <section className="mapBox  pdt-0">
        <div className="">
          <MapBox coords={[{ lat: coordinates.lat, lng: coordinates.lng }]} />
        </div>
      </section>

      {/*   <section className="section pdt-0">
        <div className="container">
          <div className="columns is-multiline">
            {shops.map((shop: Shop) => (
              <ShopCard key={shop.id} shop={shop} />
            ))}
          </div>
        </div>
      </section> */}
    </main>
  );
}
export default FilterShops;
