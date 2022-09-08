import React from "react";
import "../../styles/style.css";

//120px abstand zwischen den components

function LandingPage() {

  /*Partner*/
  const partner = ["Partner_1", "Partner_2","Partner_3","Partner_4","Partner_5"]
  let image = (
      <img src="https://bulma.io/images/placeholders/128x128.png"></img>
  )
  return (
    <main>
      <section className="hero-body">
        <div className="container">
          <div className="columns content has-text-centered">
            <div className="column is-half is-offset-one-quarter">
              <h1 className="title is-1 mgb-2">
                Unterstütze nachhaltige AnbieterInnen in deiner Nähe!
              </h1>
              <p className="mgb-2">
                Aber wie? Ganz einfach! Suche und kaufe von Anbietern in deiner
                Nähe, die zu 100% nachhaltige Produkte anbieten und unterstütze
                diese und den Planeten!
              </p>
              <button className="button is-primary">
                Go green!
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section blog-teaser-compact">
        <div className="container">
          <div className="columns is-gapless content">
            <div className="column">
              <a className="blog-teaser-wrapper" href="#">
                <img className="cover-backgroud" src="https://images.unsplash.com/photo-1652439390548-1d71216f9ba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80/600x900" alt="Blog Vorschaubild" />
                <div className="title-wrapper">
                  <h2 className="title is-2">Nulla vitae elit libero, a pharetra augue</h2>
                </div>
                <div className="text-wrapper">
                  <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </div>
              </a>
            </div>
            <div className="column">
              <a className="blog-teaser-wrapper" href="#">
                <img className="cover-backgroud" src="https://images.unsplash.com/photo-1652054447785-eaa74ea9dcbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=854&q=80/600x900" alt="Blog Vorschaubild" />
                <div className="title-wrapper">
                  <h2 className="title is-2">Nulla vitae elit libero, a pharetra augue</h2>
                </div>
                <div className="text-wrapper">
                  <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </div>
              </a>
            </div>
            <div className="column">
              <a className="blog-teaser-wrapper" href="#">
                <img className="cover-backgroud" src="https://images.unsplash.com/photo-1652011609738-74e036599c03?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80/600x900" alt="Blog Vorschaubild" />
                <div className="title-wrapper">
                  <h2 className="title is-2">Nulla vitae elit libero, a pharetra augue</h2>
                </div>
                <div className="text-wrapper">
                  <p>Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section pdb-large">
        <div className=" container">
          <div className="columns content is-vcentered">
            <div className="column is-5">
              <h2 className="title is-2">Wie funktioniert das Konzept?</h2>
              <p className="has-text-left mt-5 pb-6">
                Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla
                vitae elit libero, a pharetra augue. Maecenas faucibus mollis
                interdum. Nulla vitae elit libero, a pharetra augue. Maecenas
                sed diam eget risus varius blandit sit amet non magna. Etiam
                porta sem malesuada magna ultricies vehicula ut mollis.
              </p>
              <a className="is-link">Mehr erfahren</a>
            </div>
            <div className="column is-offset-1 is-half">
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
          </div>
        </div>
      </section>
      
      <section className="section has-background-primary-transparent pdt-large">
        <div className="container has-text-centered">
          <h2 className="title is-2">Das sind unsere NachhaltigkeitspartnerInnen</h2>
          <div className="columns">
            <div className="column is-half is-offset-one-quarter">
              <p>
                Damit Ihr mit euren Käufen zusätzlich etwas Guten tun könnt, bieten
                unsere Parther verschiedene Möglichkeiten wie z.B. die Unterstützung
                nachhaltiger Projekte.
              </p>
            </div>
          </div>
          
          <div className="columns">
            {
              partner.map((e)=>
              <div className="column" key={e}>{image}</div>
              )
            }
          </div>

          <a className="is-link">Alle Partner</a>
        </div>
      </section>

      <section className="section has-background-primary is-medium mgb-large">
        <div className="has-text-centered has-text-white">
          <h2 className="title is-2 has-text-white">
            Du bist Ladenbetreiber oder Mitglied einer Nachhaltigen Organisation
            und möchtest ein Teil von Gloabl Ritter werden?
          </h2>
          <h2 className="title is-2"><a className="is-link has-text-white has-text-weight-bold">Melde dich bei Uns!</a></h2>
        </div>
      </section>
      
      <section className="section mgb-large">
        <div className="container">
          <div className="columns content mgb-3">
            <div className="column is-half is-offset-one-quarter has-text-centered">
              <h2 className="title is-2">Wie wir unsere PartnerInnen auswählen</h2>
              <p>
                Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                cursus magna, vel scelerisque nisl consectetur et. Etiam sem
                malesuada magna mollis euismod.
              </p>
            </div>
          </div>

          <div className="columns content is-centered is-vcentered is-multiline blog-big-grid is-gapless is-align-items-stretch">
            <div className="column is-half">
              <div className="text-wrapper">
                <h2 className="title is-2">
                  Unsere Lokalen LadenbetreiberInnen
                </h2>
                <p>
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla
                  vitae elit libero, a pharetra augue. Maecenas faucibus mollis
                  interdum. Nulla vitae elit libero, a pharetra augue. Maecenas
                  sed diam eget risus varius blandit sit amet non magna. Etiam
                  porta sem malesuada magna ultricies vehicula ut mollis.
                </p>
                <a className="is-link">Mehr erfahren</a>
              </div>
            </div>
            <div className="column is-half">
              <img className="cover-backgroud" src="https://images.unsplash.com/photo-1652054447785-eaa74ea9dcbd?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=854&q=80/600x900" alt="Blog Vorschaubild" />
            </div>
            <div className="column is-half">
              <img className="cover-backgroud" src="https://images.unsplash.com/photo-1652439390548-1d71216f9ba6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=663&q=80/600x900" alt="Blog Vorschaubild" />
            </div>
            <div className="column is-half">
              <div className="text-wrapper">
                <h2 className="title is-2">
                  Unsere Lokalen LadenbetreiberInnen
                </h2>
                <p>
                  Morbi leo risus, porta ac consectetur ac, vestibulum at eros.
                  Nullam id dolor id nibh ultricies vehicula ut id elit. Nulla
                  vitae elit libero, a pharetra augue. Maecenas faucibus mollis
                  interdum. Nulla vitae elit libero, a pharetra augue. Maecenas
                  sed diam eget risus varius blandit sit amet non magna. Etiam
                  porta sem malesuada magna ultricies vehicula ut mollis.
                </p>
                <a className="is-link">Mehr erfahren</a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default LandingPage;
