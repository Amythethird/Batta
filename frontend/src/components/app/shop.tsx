import React from "react";
import { useParams } from "react-router-dom";
import "../../styles/style.css";
import Shop from "../../testdata/shop.json";

function ShopAnsicht() {
  const { id } = useParams();
  const shop = Shop.find((e) => e.id === parseInt(id ?? "0"));
  const bestProdukt = ["Test", "Test", "test"];

  return (
    <main className="mt-space-large">
      <section className="section  mx-3 pr-4 pl-4">
        <div className="container shop">
          <div className="columns">
            <div className="column ml-2">
              <h1 className="has-text-left is-size-4">{shop?.shopname}</h1>
              <p>{shop?.text}</p>
              <div className="columns mt-1">
                <div className="column">
                  <p className="has-text-weight-medium mb-1">Öffnungszeiten</p>

                  {shop?.oeffnungszeiten.split("--").map((i, key) => {
                    return <p key={key}>{i}</p>;
                  })}
                </div>

                <div className="column">
                  <p className="has-text-weight-medium mb-1">Adresse</p>
                  {shop?.adresse.split("--").map((i, key) => {
                    return (
                      <p key={key}>
                        {i} {shop.plz}
                      </p>
                    );
                  })}
                </div>
              </div>
              {shop?.tag.map((i, tagItem) => (
                <span className="tag mr-2" key={tagItem}>
                  {i}
                </span>
              ))}
            </div>
            <div className="column is-flex is-justify-content-center">
              <img src={shop?.image} alt="map"></img>
            </div>
          </div>
        </div>
      </section>
      <section className="section mx-3 pr-4 pl-4 is-medium">
        <div className="container">
          <div className="columns">
            <div className="column is-one-third">
              <h2 className="is-size-4 mb-3">Beliebteste Produkte</h2>
              <p className="mb-4">
                Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus. Nulla vitae elit libero, a pharetra
                augue.
              </p>
              <button className="button is-primary is-outlined">
                Gutscheine
              </button>
            </div>
            <div className="column is-justify-content-end is-flex">
              {bestProdukt.map((i, produktItem) => (
                <div className="card mr-2" key={produktItem}>
                  <div className="card-image">
                    <figure className="image">
                      <img src={shop?.image} alt="Placeholder image"></img>
                    </figure>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="section pl-0 pr-0 mx-3 mb-space-large">
        <div className="container">
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
              <button className="button is-primary is-outlined">
                Gutscheine
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="section background_light is-medium  px-0 pb-5">
        <section className="container has-text-centered">
          <h1 className="title">
            Diese Parter:Innen unterstützt du mit einem Gutschein
          </h1>
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
            <button className="button is-primary is-outlined">
              Gutscheine
            </button>
          </div>
        </section>
      </section>
      <section className="section is-medium pr-4 pl-4 mb-is-large">
        <div className="container">
          <div className="columns">
            <div className="column is-8 p-6">
              <h2 className="is-size-4 pb-2">Gutschein</h2>
              <p className="pb-4">
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla
                vitae elit libero, a pharetra augue. Maecenas faucibus mollis
                interdum. Nulla vitae elit libero, a pharetra augue. Maecenas
                sed diam eget risus varius blandit sit amet non magna. Etiam
                porta sem malesuada magna ultricies vehicula ut mollis.
              </p>
              <div className="field is-grouped">
                <p className="control is-expanded">
                  <input
                    className="input is-normal"
                    type="text"
                    placeholder="Gutschein höhe"
                  ></input>
                </p>
                <p className="control">
                  <a className="button is-primary">Gutschein kaufen</a>
                </p>
              </div>
            </div>
            <div className="column p-6">
              <h2 className="is-size-4">Kontakt</h2>
              <p>
                E-Mail: <a href={"mailto:" + shop?.mail}>{shop?.mail}</a>
              </p>
              <p>Telefon: {shop?.tel}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default ShopAnsicht;
