import React from "react";
import "../../styles/style.css";
import { useParams } from "react-router-dom";
import Rating from "../globals/rating";

import RatingData from "../../testdata/Rating.json";
import Kommentar from "../globals/comment";
import HeaderUser from "../globals/HeaderUser";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import { faStar as StarRegular } from "@fortawesome/free-regular-svg-icons";
import { faStar as StarSolid } from "@fortawesome/free-solid-svg-icons";
import { useAppSelector } from "../../state/hooks.state";
import { selectShops } from "../../state/slices/shops.state";

function ShopAnsicht() {
  const { id } = useParams();
  const [filter, setFilter] = React.useState(false);
  const bewertung = (event: any) => {
    event.preventDefault();
    setFilter(!filter);
  };

  const Shops = useAppSelector(selectShops);

  const shop = Shops.find((e) => e.id === parseInt(id ?? "0"));
  console.log(id)

  // Kommentare
  const [title, setTitle] = React.useState("");
  const [user, setUser] = React.useState("");
  const [text, setText] = React.useState("");

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();
   
  };

  const [rating, setRating] = React.useState(0);
  const [hover, setHover] = React.useState(0);
  let modal;
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

  /*Berechnung Rating für Durchnitt*/
  const ratings = RatingData.map((e) => e.bewertung);
  let sum = 0;
  for (let i = 0; i < ratings.length; i++) {
    sum += ratings[i];
  }
  let durchnitt: number = 0.0;
  durchnitt = sum / ratings.length;

  return (
    <main className="mt-space-large shop">
      <HeaderUser UserId={shop?.id} />
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
          <div className="column is-4">
            <Rating
              durchschnitt={Math.round(durchnitt)}
              title={false}
              full={true}
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
      <section className="section background_light is-medium">
        <div className="columns">
          <div className="column">{}</div>
          <div className="column"></div>
        </div>
      </section>
      <section className="section mb-space-large">
        <div className=" container concept ">
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
      <section className="section background_light is-medium mb-space-large">
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
            <button className="button is-success hast-text-align-center mt-4">
              Gutschein
            </button>
          </div>
        </div>
      </section>
      <section className="section"></section>
    </main>
  );
}

export default ShopAnsicht;
