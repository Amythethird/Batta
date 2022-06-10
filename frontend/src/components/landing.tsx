import React from "react";
import "../styles/style.css";

//120px abstand zwischen den components

function LandingPage() {

  /*Partner*/
  const partner = ["Partner_1", "Partner_2","Partner_3","Partner_4","Partner_5"]
  let image = (
  <figure className="image is-128x128">
      <img src="https://bulma.io/images/placeholders/128x128.png"></img>
  </figure>

  )
  return (
    <main>
      <section className="hero-body section is-medium">
        <div className="container has-text-centered">
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="title">
                Unterstütze nachhaltige AnbieterInnen in deiner Nähe
              </h1>
              <p className="pb-6">
                Aber wie? Ganz einfach! Suche und kaufe von Anbietern in deiner
                Nähe, die zu 100% nachhaltige Produkte anbieten und unterstütze
                diese und den Planeten!
              </p>
              <button className="button is-half is-primary is-medium">
                Go green!
              </button>
            </div>
          </div>
        </div>
      </section>
      <section className="Blog_Beitrag container mb-space-large">
        <div className="columns">
          <div className="column is-flex is-flex-direction-column is-justify-content-end">
            <a className="text">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
              recusandae{" "}
            </a>
            <p>sit amet consectetur adipisicing</p>
          </div>
          <div className="column is-flex is-flex-direction-column is-justify-content-end">
            <a>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
              recusandae{" "}
            </a>
            <p>sit amet consectetur adipisicing</p>
          </div>
          <div className="column is-flex is-flex-direction-column is-justify-content-end">
            <a>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit
              recusandae{" "}
            </a>
            <p>sit amet consectetur adipisicing</p>
          </div>
        </div>
      </section>
      <section className="section mb-space-large">
        <div className=" container ">
          <div className="columns is-centered is-vcentered">
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
              <a>Mehr erfahren</a>
            </div>
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
          </div>
        </div>
      </section>
      <section className="section background_light is-medium px-0 pb-5">
        <section className="container has-text-centered">
          <h1 className="title">Das sind unsere NachhaltigkeitspartnerInnen</h1>
          <h2 className="subtitle has-text-centered p-6">
            Damit Ihr mit euren Käufen zusätzlich etwas Guten tun könnt, bieten
            unsere Parther verschiedene Möglichkeiten wie z.B. die Unterstützung
            nachhaltiger Projekte.
          </h2>

          <div>
            <div className="partner mb-4">
              {
                partner.map((e)=>
                <div key={e}>{image}</div>
                )
              }
            </div>
            <a>Alle Partner</a>
          </div>
        </section>
      </section>
      <section className="section px-0 pt-0 mb-space-large">
        <div className="footer_partner footer has-text-centered">
          <p>
            Du bist Ladenbetreiber oder Mitglied einer Nachhaltigen Organisation
            und möchtest ein Teil von Gloabl Ritter werden?
          </p>
          <a>Melde dich bei Uns</a>
        </div>
      </section>
      <section className="section mb-space-large has-text-centered pt-0">
        <div className="container">
          <div className="columns pb-6">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="title">Wie wir unsere PartnerInnen auswählen?</h1>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Etiam sem
                malesuada magna mollis euismod.
              </p>
            </div>
          </div>
          <div className="columns is-centered is-vcentered ">
            <div className="column has-text-left">
              <h2 className="has-text-left mb-2 is-size-4 has-text-weight-medium">
                Unsere Lokalen LadenbetreiberInnen
              </h2>
              <p className="has-text-left mb-2">
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla
                vitae elit libero, a pharetra augue. Maecenas faucibus mollis
                interdum. Nulla vitae elit libero, a pharetra augue. Maecenas
                sed diam eget risus varius blandit sit amet non magna. Etiam
                porta sem malesuada magna ultricies vehicula ut mollis.
              </p>
              <a>Mehr erfahren</a>
            </div>
            <div className="column">
              <figure className="image is-16by9">
                <iframe
                  className="has-ratio"
                  width="580"
                  height="470"
                  src="https://www.youtube.com/embed/YE7VzlLtp-4"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </figure>
            </div>
          </div>
          <div className="columns is-centered is-vcentered ">
            <div className="column">
              <figure className="image is-16by9">
                <iframe
                  className="has-ratio"
                  width="580"
                  height="470"
                  src="https://www.youtube.com/embed/YE7VzlLtp-4"
                  frameBorder="0"
                  allowFullScreen
                ></iframe>
              </figure>
            </div>
            <div className="column has-text-left">
              <h2 className="has-text-left mb-2 is-size-4 has-text-weight-medium">
                Unsere Nachhaltigen Organisationen
              </h2>
              <p className="has-text-left mb-2">
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla
                vitae elit libero, a pharetra augue. Maecenas faucibus mollis
                interdum. Nulla vitae elit libero, a pharetra augue. Maecenas
                sed diam eget risus varius blandit sit amet non magna. Etiam
                porta sem malesuada magna ultricies vehicula ut mollis.
              </p>
              <a className="mt-2">Mehr erfahren</a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
