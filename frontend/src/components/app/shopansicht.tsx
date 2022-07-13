import React from "react";
import "../../styles/style.css";
import { useParams } from "react-router-dom";
import Rating from "../globals/elements/rating";
import RatingData from "../../testdata/Rating.json";
import Kommentar from "../globals/elements/comment";
import HeaderUser from "../globals/headerShop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as StarSolid } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../state/hooks.state";
import { selectShops, setShops } from "../../state/slices/shops.state";
import useApi from "../../hooks/useApi";
import { collection, query } from "../../api-utils/query-utils";
import { parseResponse } from "../../api-utils/response-utils";
import ShopModel, { Highlights } from "../../models/shop";
import Masonry from "../globals/elements/masonry";
import Artikel from "../globals/elements/article";
import { Link } from "react-router-dom";

/** ToDo
 * Produkt_Highlights overflow [X], auslagern
 * Galerie [X]
 * Verlinkte Artikel falls vorhanden[X]
 * Kommentare pushen/abrufen / Serverside
 * Bewertungen pushen/ abrufen / Serverside
 * Font-Awesome Icons klickbar machen []
 *
 */
function Shopansicht() {
  //Abfragen
  const { id } = useParams();
  const [filter, setFilter] = React.useState(false);
  const machtNix = "nix";
  const shops = useAppSelector(selectShops);
  const dispatch = useAppDispatch();

  // Kommentare
  const [title, setTitle] = React.useState("");
  const [user, setUser] = React.useState("");
  const [text, setText] = React.useState("");

  //Berwertungen
  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);
  let modal;

  const bewertung = (event: any) => {
    event.preventDefault();
    setFilter(!filter);
  };

  useApi(
    query(
      collection(
        "shops",
        [
          "name",
          "postal_code",
          "short_description",
          "description",
          "opening_hours",
          collection("highlights", ["url"]),
        ],
        {
          id: { eq: id },
        }
      )
    ),
    (response) => {
      dispatch(setShops(parseResponse("shops", response).data as ShopModel[]));
    },
    [machtNix]
  );

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();
  };

  /*Berechnung Rating für Durchnitt*/
  const ratings = RatingData.map((e) => e.bewertung);
  let sum = 0;
  for (let i = 0; i < ratings.length; i++) {
    sum += ratings[i];
  }
  let durchnitt: number = 0.0;
  durchnitt = sum / ratings.length;

  if (filter) {
    modal = (
      <section className="section is-large">
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Bewertung</p>
              <button
                className="delete"
                aria-label="close"
                onClick={bewertung}
              ></button>
            </header>
            <form onSubmit={submitForm}>
              <section className="modal-card-body">
                <div className="field is-grouped">
                  <p className="control is-expanded">
                    <input
                      className="input"
                      name="choreDesc"
                      type="text"
                      placeholder="Titel"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                    />
                  </p>
                  <p className="control is-expanded">
                    <input
                      className="input"
                      type="text"
                      placeholder="Nutzer"
                      value={user}
                      onChange={(e) => setUser(e.target.value)}
                    />
                  </p>
                </div>

                <div className="is-flex rating">
                  {[...Array(5)].map((star, index) => {
                    index += 1;
                    return (
                      <button
                        type="button"
                        key={index}
                        className={index <= (hover || rating) ? "on" : "off"}
                        onClick={() => setRating(index)}
                        onMouseEnter={() => setHover(index)}
                        onMouseLeave={() => setHover(rating)}
                      >
                        <FontAwesomeIcon icon={StarSolid} className="star" />
                      </button>
                    );
                  })}
                </div>
                <textarea
                  className="textarea"
                  placeholder="e.g. Hello world"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
              </section>
              <footer className="modal-card-foot">
                <button className="button is-danger" onClick={bewertung}>
                  Cancel
                </button>
                <button className="button is-success" type="submit">
                  Save changes
                </button>
              </footer>
            </form>
          </div>
        </div>
      </section>
    );
  }

  const photos = [
    {
      src: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8dmVnYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      alt: "Bowl_Vegan",
    },
    {
      src: "https://images.unsplash.com/photo-1532768641073-503a250f9754?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8dmVnYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      alt: "Sandwich",
    },
    {
      src: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmVnYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      alt: "Green-Salad",
    },
    {
      src: "https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmVnYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      alt: "Healthy Breakfast",
    },
    {
      src: "https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmVnYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      alt: "Healthy Breakfast",
    },
    {
      src: "https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVnYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      alt: "Healthy Breakfast",
    },
    {
      src: "https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmVnYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      alt: "Healthy Breakfast",
    },
    {
      src: "https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVnYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      alt: "Healthy Breakfast",
    },
    {
      src: "https://images.unsplash.com/photo-1572357176061-7c96fd2af22f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8dmVnYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      alt: "Healthy Breakfast",
    },
    {
      src: "https://images.unsplash.com/photo-1540914124281-342587941389?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8dmVnYW58ZW58MHx8MHx8&auto=format&fit=crop&w=600&q=60",
      alt: "Healthy Breakfast",
    },
  ];

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

  const [isActive, setIsActive] = React.useState(false);

  const handleClick = () => {
    // 👇️ toggle
    setIsActive((current) => !current);
    console.log(isActive);

    // 👇️ or set to true
    // setIsActive(true);
  };

  console.log(shops);
  return (
    <main className="mt-space-large Shops">
      {shops.map((shop: ShopModel) => (
        <HeaderUser key={shop.id} UserId={shop.id} imag={shop.person?.profile_picture?.url!} />
      ))}

        {/* Auslagern:
          Shopansicht rendert payment und Shop
        */}
      <section className="section is-medium p-2 mb-space-large">
        <div className="columns is-align-items-center  ">
          <div className="column  is-9">
            <h2 className="is-size-4">Bewertungen & Kommentare</h2>
          </div>
          <div className="column links is-flex kommentare ">
            <li>
              <a onClick={bewertung}>Bewertung schreiben</a>
            </li>
            <li>
              <a>Alle anzeigen</a>
            </li>
          </div>
        </div>
        {modal}
        <div className="columns">
          <div className="column is-3">
            <Rating
              durchschnitt={Math.round(durchnitt)}
              title={false}
              full={true}
              ratings={ratings.length}
            ></Rating>
          </div>
          <div className="column kommentare is-flex">
            {RatingData.map((e, key) => (
              <Kommentar
                key={key}
                title={e.title}
                autor={e.user}
                text={e.text}
                date={e.date}
                bewertung={e.bewertung}
              />
            ))}
          </div>
        </div>
      </section>
      <section>
        {shops.map((product: ShopModel) => (
          <div className="columns background_light" key={product.id}>
            <div className="column products is-flex ">
              {product.highlights?.map((e: Highlights) => (
                <div
                  className="card"
                  key={e.id}
                  style={{
                    backgroundImage: `url(https://strapi.localhost${e.url})`,
                  }}
                ></div>
              ))}
            </div>
            <div className="column is-4 mt-4">
              <h2>Beliebteste Produkte</h2>
              <p>
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Nulla vitae elit libero, a pharetra
                augue.
              </p>
              <button className="is-success mt-2">Gutschein</button>
            </div>
          </div>
        ))}
      </section>
      <section className="section mb-space-large mt-space-large">
        <div className="  concept ">
          <div className="columns is-centered is-vcentered">
            <div className="column">
              <figure className="image is-16by9">
                <iframe
                  className="has-ratio"
                  width="640"
                  height="360"
                  src="https://www.youtube.com/embed/YE7VzlLtp-4"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </figure>
            </div>
            <div className="column ">
              <h2 className="is-size-4 has-text-weight-medium">
                Wie funktioniert das Konzept?
              </h2>
              <p className="has-text-left mt-5 pb-6">
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla
                vitae elit libero, a pharetra augue. Maecenas faucibus mollis
                interdum. Nulla vitae elit libero, a pharetra augue. Maecenas
                sed diam eget risus varius blandit sit amet non magna. Etiam
                porta sem malesuada magna ultricies vehicula ut mollis.
              </p>
              <button className="button is-success">Gutschein</button>
            </div>
          </div>
        </div>
      </section>
      <section className="section background_light mb-space-medium">
        <div className="container has-text-centered mb-4">
          <h1 className="title">Das sind unsere NachhaltigkeitspartnerInnen</h1>
          <h2 className="subtitle has-text-centered p-6">
            Damit Ihr mit euren Käufen zusätzlich etwas Guten tun könnt, bieten
            unsere Parther verschiedene Möglichkeiten wie z.B. die Unterstützung
            nachhaltiger Projekte.
          </h2>

          <div className="Partner">
            <div className="partner mb-4">
              <figure className="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png"></img>
              </figure>
              <figure className="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png"></img>
              </figure>
              <figure className="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png"></img>
              </figure>
              <figure className="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png"></img>
              </figure>
              <figure className="image is-128x128">
                <img src="https://bulma.io/images/placeholders/128x128.png"></img>
              </figure>
            </div>
            <Link className="button" to="/payment">
              Gutschein
            </Link>
          </div>
        </div>
      </section>
      <section
        className="section gallery mb-space-large"
        style={{
          overflow: isActive ? "auto" : "hidden",
        }}
      >
        <div className="columns">
          <div className="column is-7 is-flex">
            <h1 className="is-size-4">Gallerie/ Eindrücke</h1>
          </div>
          <div className="column is-flex">
            <a onClick={handleClick}>Mehr Anzeigen</a>
          </div>
        </div>
        <Masonry images={photos} />
      </section>
      <section className="section artikel">
        <div className="columns">
          <div className="column is-7 is-flex">
            <h1 className="is-size-4">Artikel</h1>
          </div>
          <div className="column is-flex">
            <a onClick={handleClick}>Mehr Anzeigen</a>
          </div>
        </div>
        <Artikel article={article} />
      </section>
    </main>
  );
}

export default Shopansicht;
