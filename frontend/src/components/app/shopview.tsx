import React from "react";
import "../../styles/style.css";
import { useParams } from "react-router-dom";
import Rating from "../globals/elements/rating";
import Comment from "../globals/elements/comment";
import HeaderShop from "../globals/headerShop";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar as StarSolid } from "@fortawesome/free-solid-svg-icons";
import { useAppDispatch, useAppSelector } from "../../state/hooks.state";
import { selectShops, setShops } from "../../state/slices/shops.state";
import useApi from "../../hooks/useApi";
import { collection, entry, query } from "../../api-utils/query-utils";
import { parseResponse } from "../../api-utils/response-utils";
import ShopModel from "../../models/shop";
import Review from "../../models/review";
import Masonry from "../globals/elements/masonry";
import ArtikelCard from "../globals/elements/articleCard";
import { Link } from "react-router-dom";
import Media from "../../models/media";

/** ToDo
 * Produkt_Highlights overflow [X], auslagern
 * Galerie [X]
 * Verlinkte Artikel falls vorhanden[X]
 * Kommentare pushen/abrufen / Serverside
 * Bewertungen pushen/ abrufen / Serverside
 * Font-Awesome Icons klickbar machen []
 *
 */
function ShopView() {
  /*Partner*/
  const partner = [
    "Partner_1",
    "Partner_2",
    "Partner_3",
    "Partner_4",
    "Partner_5",
  ];
  let image = (
    <img src="https://bulma.io/images/placeholders/128x128.png"></img>
  );

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
          "shopName",
          entry("address", [
            "streetName, postalCode, houseNumber, city, country",
          ]),
          "description",
          entry("openingHours", [
            "openTime",
            "closeTime",
            "breakTimeStart",
            "breakTimeEnd",
          ]),
          "description",
          collection("shopHeaderImage", ["url"]),
          entry("label", ["name"]),
          entry("socialMedia", ["platform", "url", entry("icon", ["url"])]),
          entry("reviews", ["title", "rating", "description"]),
          collection("productHighlights", ["url"]),
        ],
        {
          id: { eq: id },
        }
      )
    ),
    (response) => {
      dispatch(setShops(parseResponse("shops", response).data as ShopModel[]));
    },
    [machtNix],
    false
  );

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();
  };

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
    setIsActive((current) => !current);
    console.log(isActive);
  };

  //durchschnitt

  const reviews = shops
    .map((e) => e.reviews)
    .map((e) => e?.reduce((partialSum, a) => partialSum + a?.rating!, 0));
  console.log(reviews);

  return (
    <main className="mt-space-large shop">
      {shops.map((shop: ShopModel) => (
        <HeaderShop
          key={shop.id}
          UserId={shop.id}
          imag={shop.shopOwner?.profilePicture?.url!}
          bgImage={shop.shopHeaderImage?.url!}
        />
      ))}
      <section className="section content ">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column">
              <h2 className="title is-2">Bewertungen & Kommentare</h2>
            </div>
            <div className="column has-text-right">
              <a onClick={bewertung}>Bewertung verfassen</a> |{" "}
              <a>alle anzeigen</a>
            </div>
          </div>
          {modal}
          <div className="columns">
            <div className="column is-3">
              {shops.map((e, i) => (
                <Rating
                  key={i}
                  durchschnitt={reviews[0]!}
                  title={false}
                  full={true}
                  ratings={e.reviews?.length!}
                />
              ))}
            </div>
            <div className="column is-9 columns comment-carousel">
              {shops.map((e) =>
                e.reviews?.map((review: Review) => (
                  <Comment
                    key={review.id}
                    title={review.title!}
                    text={review.description!}
                    date={""}
                    bewertung={review.rating!}
                    lenght={e.reviews?.length!}
                  />
                ))
              )}
            </div>
          </div>
        </div>
      </section>
      <section className="section has-background-primary-transparent">
        <div className="container">
          {shops.map((product: ShopModel) => (
            <div className="columns" key={product.id}>
              <div className="column is-9  highligt-carousel">
                <div className="columns">
                  {product.productHighlights?.map((e: Media) => (
                    <div className="column is-4" key={e.id}>
                      <figure className="image is-square">
                        {/* eslint-disable-next-line no-undef */}
                        <img src={`${process.env.REACT_APP_STRAPI}${e.url}`} />
                      </figure>
                    </div>
                  ))}
                </div>
              </div>
              <div className="column is-3 content">
                <h2>Beliebteste Produkte</h2>
                <p>
                  Cum sociis natoque penatibus et magnis dis parturient montes,
                  nascetur ridiculus mus. Nulla vitae elit libero, a pharetra
                  augue.
                </p>
                <Link className="button is-primary" to={`payment`}>
                  Gutschein Kaufen
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="section">
        <div className=" container">
          <div className="columns content is-vcentered">
            <div className="column is-half">
              <figure className="image is-16by9 is-fullwidth mg-0">
                <iframe
                  className="has-ratio has-corners-round has-shadow"
                  width="640"
                  height="360"
                  src="https://www.youtube.com/embed/YE7VzlLtp-4"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </figure>
            </div>
            <div className="column is-5 is-offset-1 ">
              <h2 className="title is-2">Wie funktioniert das Konzept?</h2>
              <p className="has-text-left mt-5 pb-6">
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla
                vitae elit libero, a pharetra augue. Maecenas faucibus mollis
                interdum. Nulla vitae elit libero, a pharetra augue. Maecenas
                sed diam eget risus varius blandit sit amet non magna. Etiam
                porta sem malesuada magna ultricies vehicula ut mollis.
              </p>

              <Link className="button is-primary" to={`payment`}>
                Gutschein Kaufen
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section has-background-primary-transparent">
        <div className="container has-text-centered">
          <h2 className="title is-2">
            Diese Parter:Innen unterstützt du mit einem Gutschein
          </h2>
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <p>
                Damit Ihr mit euren Käufen zusätzlich etwas Guten tun könnt,
                bieten unsere Parther verschiedene Möglichkeiten wie z.B. die
                Unterstützung nachhaltiger Projekte.
              </p>
            </div>
          </div>
          <div className="columns">
            {partner.map((e) => (
              <div className="column" key={e}>
                {image}
              </div>
            ))}
          </div>
          <Link className="button is-primary" to={`payment`}>
            Gutschein Kaufen
          </Link>
        </div>
      </section>

      <section
        className="section gallery"
        style={{
          overflow: isActive ? "auto" : "hidden",
        }}
      >
        <div className="container">
          <div className="columns content is-vcentered">
            <div className="column">
              <h2 className="title is-2">Gallerie/ Eindrücke</h2>
            </div>
            <div className="column has-text-right">
              <a onClick={handleClick}>Mehr Anzeigen</a>
            </div>
          </div>

          <Masonry images={photos} />
        </div>
      </section>

      <section className="section mgb-large">
        <div className="container">
          <div className="columns content is-vcentered">
            <div className="column">
              <h2 className="title is-2">Artikel</h2>
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

export default ShopView;
