import React, { useEffect } from "react";
import "../../styles/style.css";
import { useParams } from "react-router-dom";
import Rating from "../globals/rating";
import Kommentar from "../globals/comment";
import { getData, save } from "../../hooks/useApi";
import HeaderUser from "../globals/HeaderUser";

function ShopAnsicht() {
  const comments: any = [];
  const { id } = useParams();
  const [filter, setFilter] = React.useState(false);
  const bewertung = (event: any) => {
    event.preventDefault();
    setFilter(!filter);
  };

  // Kommentare
  const [title, setTitle] = React.useState("");
  const [user, setUser] = React.useState("");
  const [text, setText] = React.useState("");

  const submitForm = async (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();

    await save(
      {
        title,
        user,
        text,
        date: new Date().toISOString(),
        bewertung: 4,
      },
      "Rating"
    );
  };

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
                <textarea
                  className="textarea"
                  placeholder="e.g. Hello world"
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                ></textarea>
              </section>
              <footer className="modal-card-foot">
                <button className="button" type="submit">
                  Save changes
                </button>
                <button className="button" onClick={bewertung}>
                  Cancel
                </button>
              </footer>
            </form>
          </div>
        </div>
      </section>
    );
  }

  useEffect(() => {
    getData("Rating").then((res) => comments.push(...res));
  });

  return (
    <main className="mt-space-large">
      <HeaderUser UserId={id} />
      <section className="section is-medium p-2 mb-space-large">
        <div className="columns is-align-items-center  ">
          <div className="column  is-9">
            <h2 className="is-size-4">Bewertungen & Kommentare</h2>
          </div>
          <div className="column is-flex kommentare ">
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
            <Rating einStar={5} title={false}></Rating>
          </div>
          <div className="column kommentare">
            <Kommentar comments={comments} />
          </div>
        </div>
      </section>
      <section className="section background_light is-medium">
        Bewertung
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
