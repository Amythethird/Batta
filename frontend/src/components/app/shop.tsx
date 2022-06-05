import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/style.css";
import Shop from "../../testdata/shop.json";
import SocialMedia from "./socialMedia";
import Rating from "../globals/rating";
import Kommentar from "../globals/comment";

function ShopAnsicht() {
  const { id } = useParams();
  const shop = Shop.find((e) => e.id === parseInt(id ?? "0"));
  const [filter, setFilter] = React.useState(false);
  const bewertung = (event: any) => {
    event.preventDefault();
    setFilter(!filter);
  };

  const [title, setTitle] = React.useState("");
  const [user, setUser] = React.useState("");
  const [text, setText] = React.useState("");

  const submitForm = (event: React.FormEvent<HTMLFormElement>) => {
    // Preventing the page from reloading
    event.preventDefault();
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
  return (
    <main className="mt-space-large  shop">
      <section
        className="section is-flex is-large pb-0 is-align-content-end mb-space-large"
        style={{ backgroundImage: `url(${shop?.image})` }}
      >
        <div className="columns mb-0">
          <div className="column is-align-self-flex-end  pb-0">
            <div className="information p-3">
              <figure className="imageInhaber">
                <img src={shop?.imageInhaber} alt={shop?.shopname} />
              </figure>
              <h2 className="is-size-4">
                {shop?.shopname}
                <span>
                  <FontAwesomeIcon icon={faHeart} size="1x" />
                </span>
              </h2>
              {shop?.tag.map((e, i) => (
                <span className="tag mr-2 mt-5 mb-2 is-primary" key={i}>
                  {e}
                </span>
              ))}
              <p>{shop?.text}</p>
              <SocialMedia id={shop?.id ?? 0} />
            </div>
          </div>
          <div className="column is-align-self-flex-start">
            <div className="test p-4">
              <p className="has-text-weight-medium">Öffnungszeiten</p>
              {shop?.oeffnungszeiten}
              <p className="has-text-weight-medium mt-1 ">Adresse</p>
              <p className="is_green">
                {shop?.adresse} <br />
                {shop?.plz}
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="section is-medium p-2">
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
            <Kommentar
              title={title}
              date="2022.1.20"
              autor={user}
              bewertung={4}
              text={text}
            />
          </div>
        </div>
      </section>
      <section className="section background_light is-medium">
        Bewertung
      </section>
    </main>
  );
}

export default ShopAnsicht;
