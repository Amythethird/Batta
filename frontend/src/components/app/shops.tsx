import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFilter, faSearch } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ReactSlider from "react-slider";
import "../../styles/style.css";
// import shopData from "../../testdata/shop.json";
import ShopCard from "./shopCard";
import Rating from "../globals/rating";
import Sorted from "../globals/sorted";
import Categories from "../globals/categories";

/*e.tag.some((tag) => categorie.includes(tag))*/
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
      dispatch(setShops(parseResponse("shops", response).data as Shop[]));
    },
    [filter]
  );
  const [input, setCriteria] = React.useState("");
  const categorie: string[] = [];

  ergebniss = shopData.filter((e) => e.plz === input);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCriteria(e.currentTarget.value);
    dispatch(setShopsFilter(e.currentTarget.value));
  };

  /*Filter*/
  const [filter, setFilter] = React.useState(false);
  const onClick = (event: any) => {
    event.preventDefault();
    setFilter(!filter);
  };

  function get(childvalue: string[]) {
    categorie.push(...childvalue);
  }

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
            <Rating durchschnitt={1} title={true} full={true} />
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
        <div className="field shops">
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
            <a className="button" onClick={onClick}>
              <FontAwesomeIcon icon={faFilter} color="#257708" />
            </a>
          </p>
        </div>
        {allStatements}
      </div>

      <div className="container is-medium is-flex">
        {ergebniss.map((e, shops) => (
          <ShopCard
            key={shops}
            shopName={e.name}
            tag={e.tag}
            oeffnungszeiten={e.oeffnungszeiten}
            text={e.text}
            adresse={e.adresse}
            plz={e.plz}
            img={e.image}
            id={e.id}
          />
        ))}
      </div>
    </div>
  );
}
export default Shops;
