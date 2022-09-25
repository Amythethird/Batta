import React from "react";
import "../../styles/style.css";
import { useParams } from "react-router-dom";
import Rating from "../globals/elements/rating";
import Comment from "../globals/elements/comment";
import HeaderShop from "../globals/headerShop";
import { useAppDispatch, useAppSelector } from "../../state/hooks.state";
import { selectShops, setShops } from "../../state/slices/shops.state";
import useApi from "../../hooks/useApi";
import { collection, entry, query } from "../../apiUtils/query-utils";
import { parseResponse } from "../../apiUtils/response-utils";
import ShopModel from "../../models/shop";
import Review from "../../models/review";
import Masonry from "../globals/elements/masonry";
import ArtikelCard from "../globals/elements/blogPost";
import { Link } from "react-router-dom";
import Media from "../../models/media";
import Modal from "../globals/elements/modal";

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

  if (filter) {
    modal = <Modal showModal={filter} />;
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
            <div className="column is-9 comment-carousel-container">
              <div className="columns comment-carousel">
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
                  Hier finden Sie die am besten bewerteten Produkte von Lisas
                  Klamotten.
                </p>
                <Link className="button is-primary" to={`payment`}>
                  Gutschein kaufen
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
                Sie können in diesem Shop einen Gutschein erwerben und dabei
                etwas für Nachhaltigkeitsprojekte tun. Verschenken Sie den
                Gutschein oder behalten Sie ihn selbst. Mit jedem Kauf erhalten
                Sie eine Auszeichnung - je nach Höhe des Wertes - und können mit
                anderen in Ihrer Region vergleichen, wie nachhaltig Ihr Einkauf
                war.
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
            Diese Partner:innen unterstützt du mit einem Gutschein:
          </h2>
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <p>
                Damit ihr mit euren Käufen zusätzlich etwas Gutes tun könnt,
                bieten unsere Partner:innen verschiedene Möglichkeiten, wie z.B.
                die Unterstützung nachhaltiger Projekte.
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
              <h2 className="title is-2">Gallerie/Eindrücke</h2>
            </div>
            <div className="column has-text-right">
              <a onClick={handleClick}>Mehr Anzeigen</a>
            </div>
          </div>

          <Masonry images={photos} />
        </div>
      </section>

      <section className="section pdb-large">
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
